var {firstDay, maxMentors} = require("./settings");

function dt(days, hours) {
  return new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate()+days-1, firstDay.getHours()+hours)
}

module.exports = {
  w1d1: {
    time: {
      from: dt(1,9),
      to: dt(1,11)
    },
    seatsMax: 1,
    skills: []
  },
  w5d1: {
    time: {
      from: dt(1,9),
      to: dt(1,11)
    },
    seatsMax: 1,
    skills: ["ruby"]
  },
  w1d1bo: {
    time: {
      from: dt(1,15),
      to: dt(1,16)
    },
    seatsMax: 1,
    skills: []
  },
  w5d1bo: {
    time: {
      from: dt(1,15),
      to: dt(1,16)
    },
    seatsMax: 1,
    skills: ["ruby"]
  },
  d1m11: {
    time: {
      from: dt(1,11),
      to: dt(1,13)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d1m13: {
    time: {
      from: dt(1,13),
      to: dt(1,15)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d1m16: {
    time: {
      from: dt(1,16),
      to: dt(1,18)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d1m18: {
    time: {
      from: dt(1,18),
      to: dt(1,21)
    },
    seatsMax: maxMentors-1,
    skills: ["ruby"]
  },
  w1d2: {
    time: {
      from: dt(2,9),
      to: dt(2,11)
    },
    seatsMax: 1,
    skills: []
  },
  w5d2: {
    time: {
      from: dt(2,9),
      to: dt(2,11)
    },
    seatsMax: 1,
    skills: ["ruby"]
  },
  w1d2bo: {
    time: {
      from: dt(2,15),
      to: dt(2,16)
    },
    seatsMax: 1,
    skills: []
  },
  w5d2bo: {
    time: {
      from: dt(2,15),
      to: dt(2,16)
    },
    seatsMax: 1,
    skills: ["ruby"]
  },
  d2m11: {
    time: {
      from: dt(2,11),
      to: dt(2,13)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d2m13: {
    time: {
      from: dt(2,13),
      to: dt(2,15)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d2m16: {
    time: {
      from: dt(2,16),
      to: dt(2,18)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d2m18: {
    time: {
      from: dt(2,18),
      to: dt(2,21)
    },
    seatsMax: maxMentors-1,
    skills: ["ruby"]
  },
  w1d3: {
    time: {
      from: dt(3,9),
      to: dt(3,11)
    },
    seatsMax: 1,
    skills: []
  },
  w5d3: {
    time: {
      from: dt(3,9),
      to: dt(3,11)
    },
    seatsMax: 1,
    skills: ["ruby"]
  },
  w1d3bo: {
    time: {
      from: dt(3,15),
      to: dt(3,16)
    },
    seatsMax: 1,
    skills: []
  },
  w5d3bo: {
    time: {
      from: dt(3,15),
      to: dt(3,16)
    },
    seatsMax: 1,
    skills: ["ruby"]
  },
  d3m11: {
    time: {
      from: dt(3,11),
      to: dt(3,13)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d3m13: {
    time: {
      from: dt(3,13),
      to: dt(3,15)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d3m16: {
    time: {
      from: dt(3,16),
      to: dt(3,18)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d3m18: {
    time: {
      from: dt(3,18),
      to: dt(3,21)
    },
    seatsMax: maxMentors-1,
    skills: ["ruby"]
  },
  w1d4: {
    time: {
      from: dt(4,9),
      to: dt(4,11)
    },
    seatsMax: 1,
    skills: []
  },
  w5d4: {
    time: {
      from: dt(4,9),
      to: dt(4,11)
    },
    seatsMax: 1,
    skills: ["ruby"]
  },
  w1d4bo: {
    time: {
      from: dt(4,15),
      to: dt(4,16)
    },
    seatsMax: 1,
    skills: []
  },
  w5d4bo: {
    time: {
      from: dt(4,15),
      to: dt(4,16)
    },
    seatsMax: 1,
    skills: ["ruby"]
  },
  d4m11: {
    time: {
      from: dt(4,11),
      to: dt(4,13)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d4m13: {
    time: {
      from: dt(4,13),
      to: dt(4,15)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d4m16: {
    time: {
      from: dt(4,16),
      to: dt(4,18)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d4m18: {
    time: {
      from: dt(4,18),
      to: dt(4,21)
    },
    seatsMax: maxMentors-1,
    skills: ["ruby"]
  },
  w1d5: {
    time: {
      from: dt(5,9),
      to: dt(5,11)
    },
    seatsMax: 1,
    skills: []
  },
  w5d5: {
    time: {
      from: dt(5,9),
      to: dt(5,11)
    },
    seatsMax: 1,
    skills: ["ruby"]
  },
  w1d5bo: {
    time: {
      from: dt(5,15),
      to: dt(5,16)
    },
    seatsMax: 1,
    skills: []
  },
  w5d5bo: {
    time: {
      from: dt(5,15),
      to: dt(5,16)
    },
    seatsMax: 1,
    skills: ["ruby"]
  },
  d5m11: {
    time: {
      from: dt(5,11),
      to: dt(5,13)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d5m13: {
    time: {
      from: dt(5,13),
      to: dt(5,15)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d5m16: {
    time: {
      from: dt(5,16),
      to: dt(5,18)
    },
    seatsMax: maxMentors,
    skills: ["ruby"]
  },
  d5m18: {
    time: {
      from: dt(5,18),
      to: dt(5,21)
    },
    seatsMax: maxMentors-1,
    skills: ["ruby"]
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