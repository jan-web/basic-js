    /**
     * Calculate turns number and time (in seconds) required
     * to solve puzzle
     *
     * @param {Number} disks number of disks
     * @param {Number} speedPerHour speed (in turns/hour)
     * @return {Object} object with props turns (number of turns)
     * and seconds (time in seconds)
     *
     * @example
     *
     * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
     *
     */
    export default function calculateHanoi(disksNumber, speedPerHour) {
      let numbers = 1;
      const speedPerSecond = speedPerHour / 60 / 60
      for (let i = 2; i <= disksNumber; i++) {
        numbers = (numbers + numbers) + 1
      }
      const seconds = Math.floor(numbers / speedPerSecond)

      return { turns: numbers, seconds: seconds }
    }
