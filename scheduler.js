let _ = require('lodash');
let firstDay = require("./settings").firstDay;

const TIMEZONE = ' EDT';
const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

let desksSeed = require("./desks-w26.js");
let peopleSeed = require("./people.js");

function duration (from, to) {
  return ((new Date(to)).getTime() - (new Date(from)).getTime())/3600000;
}

function isTimeConflict (thisTime, thatTime) {
  if ((new Date(thisTime.to)).getTime() <= (new Date(thatTime.from)).getTime()) {
    return false;
  }
  if ((new Date(thisTime.from)).getTime() >= (new Date(thatTime.to)).getTime()) {
    return false;
  }
  return true;
}

function isTimeWithin (thisTime, withinTime) {
  if ((new Date(thisTime.from)).getTime() >= (new Date(withinTime.from)).getTime()
    && (new Date(thisTime.to)).getTime() <= (new Date(withinTime.to)).getTime()) {
    return true;
  }
  return false;
}

function dateStringFromTime (time) {
  let d = new Date(time.from);
  return `${d.getFullYear()}-${("00" + (d.getMonth() + 1)).slice( - 2)}-${("00" + (d.getDate())).slice( - 2)}`;
}

function findPersonAvailable (people, time) {
  let ignoreRatio = 1 - 1/Object.keys(people).length;
  for (let person in people) {
    // no conflicts in schedules ?
    let conflict = null;
    if (Math.random() > ignoreRatio) {
      conflict = true;
    } else {
      conflict = false;
      for (let sched in people[person].schedule) {
        for (let t = 0; t < people[person].schedule[sched].length; t++) {
          if (isTimeConflict(time, people[person].schedule[sched][t])) {
            conflict = true;
          }
        } 
      }
    }
    if (!conflict) {
      // typically available on that day ?
      let dayOfWeek = daysOfWeek[(new Date(time.from)).getDay()];
      if (people[person].available[dayOfWeek]) {
        let dateString = dateStringFromTime(time);
        let availableTime = {
          from: (dateString + people[person].available[dayOfWeek].from + TIMEZONE),
          to: (dateString + people[person].available[dayOfWeek].to + TIMEZONE)
        };
        if (isTimeWithin(time, availableTime) && (Math.random() > 0.8)) { // a little chaos 
          return people[person];
        }
      }
    }
  }
  return null;
}

function sitPersonAtDesk (person, desk) {
  // person is now unavailable during those desks hours
  person.schedule['lighthouse'].push(desk.time);
  // desk is now attended by person
  if (desk.people === undefined) {
    desk.people = [];
  }
  desk.people.push(person);
}

function sitPeopleAtDesks (people, desks) {
  let person;
  for (let desk in desks) {
    for (seats = desks[desk].seatsMax; seats > 0; seats--) {
      if (person = findPersonAvailable(people, desks[desk].time))
        sitPersonAtDesk(person, desks[desk]);
    }
  }
}

function displayDesks (desks) {
  for (let desk in desks) {
    if (desks[desk].people !== undefined) {
      console.log(`Desk ${desk} from ${desks[desk].time.from} to ${desks[desk].time.to} (max ${desks[desk].seatsMax} seats)`);
      for (s = 0; s < desks[desk].people.length; s++) {
        console.log(`   by ${(who = desks[desk].people[s].name) === undefined ? 'none' : who}`);
      }
    } else {
      console.log(`Desk ${desk} from ${desks[desk].time.from} to ${desks[desk].time.to} ${desks[desk].seatsMax} seats yet to be assigned`);
    }
  }
}

function displayHourline () {
  hour = firstDay;
  hour.setHours(9);
  console.log(hour);
}

function displayTimeline () {

}

function displaySchedule (people) {
  for (let person in people) {
    console.log(`${people[person].name}`);
    for (t = 0; t < people[person].schedule['lighthouse'].length; t++) {
      console.log(`   Assigned from ${people[person].schedule['lighthouse'][t].from} to ${people[person].schedule['lighthouse'][t].to}`);
    }
  }
}

function toArray (collection) {
  let theArray = [];
  for (let key in collection) {
    theArray.push(collection[key]);
  }
  return theArray;
}

// All scoring functions below should assume a score of 0 means
// that no problems were found.  

// Score is equivalent to the number of seats yet to be assigned
function scoreFullness (desk) {
  if (desk.seatsMax !== undefined) {
    if (desk.people !== undefined) {
      return desk.seatsMax - desk.people.length;
    } else {
      return desk.seatsMax;
    }
  } else {
    return 0;
  }
}

// Score is equivalent to the number of lectures yet to be assigned
function scoreLectures (desk) {
  if (desk.seatsMax === 1) { // important to assign since only one seat needed
    if (desk.people === undefined) {
      return 1;
    }
  }
  return 0;
}

// Score points if we are far off from ideal hours
function scoreIdealHours (person) {
  let actualHours = 0;
  let ideal = person.idealHours ? person.idealHours: 4;

  for (t = 0; t < person.schedule['lighthouse'].length; t++) {
    actualHours += duration(person.schedule['lighthouse'][t].from, person.schedule['lighthouse'][t].to);
  }
  return Math.abs(actualHours - ideal)/4;
}

// score if exceeding number of MaxDays
function scoreMaxDays (person) {
  if (!person.maxDays) {
    return 0; // no MaxDays specified, no issue
  }
  let totalDaysMask = 0;
  for (t = 0; t < person.schedule['lighthouse'].length; t++) {
    totalDaysMask = totalDaysMask | Math.pow(2,((new Date(person.schedule['lighthouse'][t].from)).getDay()));
  }
  let totalDaysArray = [];
  for (let nShifted = totalDaysMask; nShifted; 
    totalDaysArray.push(Boolean(nShifted & 1)), nShifted >>>= 1);
  let score = totalDaysArray.filter(isTrue => isTrue).length;
  return (score > person.maxDays) ? score - person.maxDays : 0;
}

// score whether hours are assigned consecutively
// each element in the calendarMask array represents 
// a day of the week and each value is a bitmask where
// each bit is one hour of that day.
function scoreEfficient (person) {
  let calendarMask = [0,0,0,0,0,0,0];
  for (t = 0; t < person.schedule['lighthouse'].length; t++) {
    let startTime = new Date(person.schedule['lighthouse'][t].from);
    let lengthTime = duration(person.schedule['lighthouse'][t].from,person.schedule['lighthouse'][t].to)
    for (h = startTime.getHours(); h<startTime.getHours()+lengthTime; h++) {
      calendarMask[startTime.getDay()] |= Math.pow(2,h);
    }
  }
  
  let totalInefficiencies = 0;
  // forgive one shift per day if booked
  calendarMask.forEach(day => day?totalInefficiencies--:0); 
  for (let day = 0; day < 7; day++) {
    for (let nShifted = calendarMask[day]; nShifted; nShifted >>>= 1) {
      if ((nShifted & 3) == 2) { // this hour not assigned, but next hour is
        totalInefficiencies++;
      }
    }
  }
  return (totalInefficiencies*.5);
}

// Make sure that whenever skills are required for a given desk, 
// the people assigned have those skills
function scoreSkillsAligned (desk) {
  skillsAvailable = [];
  skillsUseful = [];
  if (desk.skills && desk.people) {
    if (desk.skills.length) {
      debugger;
      for (p = 0; p < desk.people.length; p++) {
        skillsAvailable = skillsAvailable.concat(desk.people[p].skills);
      }
      skillsUseful = skillsAvailable.filter(skill => {
        desk.skills.indexOf(skill) !== -1;
      });
      // console.log("skills needed ",desk.skills," found ",skillsAvailable);
      if (skillsUseful.length < desk.skills.length) {
        return 1;
      }
    }
  }
  return 0;
}

// Ideally we prefer when everyone in the pool gets hours assigned
function scoreEveryoneAssigned (person) {
  if (person.schedule['lighthouse'].length > 0) 
    return 0;
  else
    return 1;
}

function scoreEquality () {
  // this function will score whether women are assigned  as mentors on a given day
}

function scoreBeingThere () {
  // this function will score whether a person has received positive feedback on that particular curriculum day
}

// takes an array of scoring functions and runs against a collection
// creating a matrix of scores
function scoreCollection (collection, scoring, weights) {
  let scores = [];
  scoring.forEach((f, index) => {
    scores.push(toArray(collection).map(f).map(v => v * weights[index]).reduce( (prev, curr) => prev + curr ));
  });
  return scores.reduce( (prev, curr) => prev + curr );
}

function auditCollection (collection) {

  toArray(collection).forEach(element => {
    if (element.name !== undefined) {
      score = scoreMaxDays(element);
      if (score) {
        console.log("MaxDays! ", element.name, " score ", score);
      }
      score = scoreEfficient(element);
      if (score) {
        console.log("Not Efficient! ", element.name, " score ", score);
      }
    } else {
      score = scoreFullness(element);
      if (score) {
        console.log("Incomplete scheduling ", score);
      }
      score = scoreLectures(element);
      if (score) {
        console.log("Lecture not scheduled ", score);
      }
      score = scoreSkillsAligned(element);
      if (score) {
        console.log("Wrong skills! ", element, " required ", element.skills, " avail ", element.people[0].skills);
      }
    }
  })
}

function trySchedules () {
  var schedules = [];
  var bestScore = 1000;
  var bestSchedule = -1;
  for (let i = 0; i < 1000; i++) {
    let desks = _.cloneDeep(desksSeed);
    let people = _.cloneDeep(peopleSeed);
    sitPeopleAtDesks(people, desks);
    let score = scoreCollection (desks, [scoreFullness, scoreLectures, scoreSkillsAligned], [1, 10, 5]);
    score += scoreCollection (people, [scoreIdealHours, scoreMaxDays, scoreEveryoneAssigned, scoreEfficient], [2, 10, 1, 3]);
    if (score < bestScore) {
      bestScore = score;
      bestSchedule = i;
      console.log("Found better score ", score," at ",i);
    } 
    else {
      // no need to remember mediocre scores
      desks = null;
      people = null;
    }
    schedules.push({desks: desks, people: people, score: score});
  }
  displayDesks(schedules[bestSchedule].desks);
  displaySchedule(schedules[bestSchedule].people);
  console.log("Best Score: ", bestScore);
  auditCollection(schedules[bestSchedule].desks);
  auditCollection(schedules[bestSchedule].people);
}

trySchedules();
