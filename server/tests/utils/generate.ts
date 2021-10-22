// import faker from "faker"

/* Skedulo data */

export function generateExample() {
  return [
    {
      "band": "Soundgarden",
      "start": "1993-05-25T02:00:00Z",
      "finish": "1993-05-25T02:50:00Z",
      "priority": 5
    },
    {
      "band": "Pearl Jam",
      "start": "1993-05-25T02:15:00Z",
      "finish": "1993-05-25T02:35:00Z",
      "priority": 9
    }
  ]
}

export function exampleOptimizer() {
  return [
    {
      "band": "Soundgarden",
      "start": "1993-05-25T02:00:00Z",
      "finish": "1993-05-25T02:15:00Z"
    },
    {
      "band": "Pearl Jam",
      "start": "1993-05-25T02:15:00Z",
      "finish": "1993-05-25T02:35:00Z"
    },
    {
      "band": "Soundgarden",
      "start": "1993-05-25T02:35:00Z",
      "finish": "1993-05-25T02:50:00Z"
    }
  ]
}

export function generateMinutes() {
  return [
    {
      "band": "Pearl Jam",
      "start": "2018-05-25T00:01:00Z",
      "finish": "2018-05-25T00:28:00Z",
      "priority": 10
    },
    {
      "band": "Red Hot Chili Peppers",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T00:35:00Z",
      "priority": 9
    },
    {
      "band": "Soundgarden",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T00:45:00Z",
      "priority": 5
    }
  ]
}

export function minutesOptimizer() {
  return [
    {
      "band": "Red Hot Chili Peppers",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T00:01:00Z"
    },
    {
      "band": "Pearl Jam",
      "start": "2018-05-25T00:01:00Z",
      "finish": "2018-05-25T00:28:00Z"
    },
    {
      "band": "Red Hot Chili Peppers",
      "start": "2018-05-25T00:28:00Z",
      "finish": "2018-05-25T00:35:00Z"
    },
    {
      "band": "Soundgarden",
      "start": "2018-05-25T00:35:00Z",
      "finish": "2018-05-25T00:45:00Z"
    }
  ]
}

export function generateOverlapping() {
  return [
    {
      "band": "Soundgarden",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T01:50:00Z",
      "priority": 5
    },
    {
      "band": "Nirvana",
      "start": "2018-05-25T00:30:00Z",
      "finish": "2018-05-25T02:00:00Z",
      "priority": 1
    },
    {
      "band": "Pearl Jam",
      "start": "2018-05-25T00:15:00Z",
      "finish": "2018-05-25T01:35:00Z",
      "priority": 10
    }
  ]
}

export function overlappingOptimizer() {
  return [
    {
      "band": "Soundgarden",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T00:15:00Z"
    },
    {
      "band": "Pearl Jam",
      "start": "2018-05-25T00:15:00Z",
      "finish": "2018-05-25T01:35:00Z"
    },
    {
      "band": "Soundgarden",
      "start": "2018-05-25T01:35:00Z",
      "finish": "2018-05-25T01:50:00Z"
    },
    {
      "band": "Nirvana",
      "start": "2018-05-25T01:50:00Z",
      "finish": "2018-05-25T02:00:00Z"
    }
  ]
}

export function generateSeconds() {
  return [
    {
      "band": "Pearl Jam",
      "start": "2018-05-25T00:01:15Z",
      "finish": "2018-05-25T00:28:30Z",
      "priority": 10
    },
    {
      "band": "Red Hot Chili Peppers",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T00:35:00Z",
      "priority": 9
    },
    {
      "band": "Soundgarden",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T00:45:00Z",
      "priority": 5
    }
  ]
}

export function secondsOptimizer() {
  return [
    {
      "band": "Red Hot Chili Peppers",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T00:01:15Z"
    },
    {
      "band": "Pearl Jam",
      "start": "2018-05-25T00:01:15Z",
      "finish": "2018-05-25T00:28:30Z"
    },
    {
      "band": "Red Hot Chili Peppers",
      "start": "2018-05-25T00:28:30Z",
      "finish": "2018-05-25T00:35:00Z"
    },
    {
      "band": "Soundgarden",
      "start": "2018-05-25T00:35:00Z",
      "finish": "2018-05-25T00:45:00Z"
    }
  ]
}

export function generateTimePriority() {
  return [
    {
      "band": "2. Pearl Jam",
      "start": "2018-05-25T00:05:00Z",
      "finish": "2018-05-25T00:25:00Z",
      "priority": 10
    },
    {
      "band": "5. Nirvana finishes one minute after Soundgarden",
      "start": "2018-05-25T00:10:00Z",
      "finish": "2018-05-25T00:46:00Z",
      "priority": 1
    },
    {
      "band": "1. 3. Red Hot Chili Peppers",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T00:35:00Z",
      "priority": 9
    },
    {
      "band": "6. Rage Against The Machine",
      "start": "2018-05-25T01:10:00Z",
      "finish": "2018-05-25T01:30:00Z",
      "priority": 4
    },
    {
      "band": "4. Soundgarden",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T00:45:00Z",
      "priority": 5
    }
  ]
}

export function timePriorityOptimizer() {
  return [
    {
      "band": "1. 3. Red Hot Chili Peppers",
      "start": "2018-05-25T00:00:00Z",
      "finish": "2018-05-25T00:05:00Z"
    },
    {
      "band": "2. Pearl Jam",
      "start": "2018-05-25T00:05:00Z",
      "finish": "2018-05-25T00:25:00Z"
    },
    {
      "band": "1. 3. Red Hot Chili Peppers",
      "start": "2018-05-25T00:25:00Z",
      "finish": "2018-05-25T00:35:00Z"
    },
    {
      "band": "4. Soundgarden",
      "start": "2018-05-25T00:35:00Z",
      "finish": "2018-05-25T00:45:00Z"
    },
    {
      "band": "5. Nirvana finishes one minute after Soundgarden",
      "start": "2018-05-25T00:45:00Z",
      "finish": "2018-05-25T00:46:00Z"
    },
    {
      "band": "6. Rage Against The Machine",
      "start": "2018-05-25T01:10:00Z",
      "finish": "2018-05-25T01:30:00Z"
    }
  ]
}

export function generateTimezone() {
  return [
    {
      "band": "Soundgarden",
      "start": "1993-05-25T02:00:00+10:00",
      "finish": "1993-05-25T02:50:00+10:00",
      "priority": 5
    },
    {
      "band": "Pearl Jam",
      "start": "1993-05-25T02:15:00+10:00",
      "finish": "1993-05-25T02:35:00+10:00",
      "priority": 9
    }
  ]
}

export function timezoneOptimizer() {
  return [
    {
      "band": "Soundgarden",
      "start": "1993-05-25T02:00:00+10:00",
      "finish": "1993-05-25T02:15:00+10:00"
    },
    {
      "band": "Pearl Jam",
      "start": "1993-05-25T02:15:00+10:00",
      "finish": "1993-05-25T02:35:00+10:00"
    },
    {
      "band": "Soundgarden",
      "start": "1993-05-25T02:35:00+10:00",
      "finish": "1993-05-25T02:50:00+10:00"
    }
  ]
}