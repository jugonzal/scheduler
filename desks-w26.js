var {firstDay, maxMentors} = require("./settings");

function dt(days, hours) {
  return new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate()+days-1, firstDay.getHours()+hours)
}

module.exports = {
  w2d1: {
    time: {
      from: dt(1,9),
      to: dt(1,11)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  w6d1: {
    time: {
      from: dt(1,9),
      to: dt(1,11)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  w2d1bo: {
    time: {
      from: dt(1,15),
      to: dt(1,16)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  w6d1bo: {
    time: {
      from: dt(1,15),
      to: dt(1,16)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  d1m11: {
    time: {
      from: dt(1,11),
      to: dt(1,13)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d1m13: {
    time: {
      from: dt(1,13),
      to: dt(1,15)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d1m16: {
    time: {
      from: dt(1,16),
      to: dt(1,18)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d1m18: {
    time: {
      from: dt(1,18),
      to: dt(1,21)
    },
    seatsMax: maxMentors-1,
    skills: []
  },
  w2d2: {
    time: {
      from: dt(2,9),
      to: dt(2,11)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  w6d2: {
    time: {
      from: dt(2,9),
      to: dt(2,11)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  w2d2bo: {
    time: {
      from: dt(2,15),
      to: dt(2,16)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  w6d2bo: {
    time: {
      from: dt(2,15),
      to: dt(2,16)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  d2m11: {
    time: {
      from: dt(2,11),
      to: dt(2,13)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d2m13: {
    time: {
      from: dt(2,13),
      to: dt(2,15)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d2m16: {
    time: {
      from: dt(2,16),
      to: dt(2,18)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d2m18: {
    time: {
      from: dt(2,18),
      to: dt(2,21)
    },
    seatsMax: maxMentors-1,
    skills: []
  },
  w2d3: {
    time: {
      from: dt(3,9),
      to: dt(3,11)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  w6d3: {
    time: {
      from: dt(3,9),
      to: dt(3,11)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  d3m11: {
    time: {
      from: dt(3,11),
      to: dt(3,13)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d3m13: {
    time: {
      from: dt(3,13),
      to: dt(3,15)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d3m16: {
    time: {
      from: dt(3,16),
      to: dt(3,18)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d3m18: {
    time: {
      from: dt(3,18),
      to: dt(3,21)
    },
    seatsMax: maxMentors-1,
    skills: []
  },
  w2d4: {
    time: {
      from: dt(4,9),
      to: dt(4,11)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  w6d4: {
    time: {
      from: dt(4,9),
      to: dt(4,11)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  d4m11: {
    time: {
      from: dt(4,11),
      to: dt(4,13)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d4m13: {
    time: {
      from: dt(4,13),
      to: dt(4,15)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d4m16: {
    time: {
      from: dt(4,16),
      to: dt(4,18)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d4m18: {
    time: {
      from: dt(4,18),
      to: dt(4,21)
    },
    seatsMax: maxMentors-1,
    skills: []
  },
  w2d5: {
    time: {
      from: dt(5,9),
      to: dt(5,12)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  w6d5: {
    time: {
      from: dt(5,9),
      to: dt(5,11)
    },
    seatsMax: 1,
    skills: ["teacher"]
  },
  d5m11: {
    time: {
      from: dt(5,11),
      to: dt(5,13)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d5m13: {
    time: {
      from: dt(5,13),
      to: dt(5,15)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d5m16: {
    time: {
      from: dt(5,16),
      to: dt(5,18)
    },
    seatsMax: maxMentors,
    skills: []
  },
  d6m12: {
    time: {
      from: dt(6,12),
      to: dt(6,16)
    },
    seatsMax: 2,
    skills: []
  }
};