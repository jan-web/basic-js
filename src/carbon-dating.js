const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
	// Проверки
	if (!sampleActivity || typeof sampleActivity !== "string") {
    
		return false;
	}
	if (
		!Number(sampleActivity) ||
		Number(sampleActivity) <= 0 ||
		Number(sampleActivity) >= 15
	) {

		return false;
	}

	const n0 = MODERN_ACTIVITY;
	const n = Number(sampleActivity);
	const k = 0.693 / HALF_LIFE_PERIOD;
	const numerator = Math.log(n0 / n);
	const denominator = k;
	const res = numerator / denominator;
	return Number(Math.ceil(res));
}
