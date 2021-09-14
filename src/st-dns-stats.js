    import { NotImplementedError } from "../extensions/index.js";

    /**
     * Given an array of domains, return the object with the appearances of the DNS.
     *
     * @param {Array} domains
     * @return {Object}
     *
     * @example
     * domains = [
     *  'code.yandex.ru',
     *  'music.yandex.ru',
     *  'yandex.ru'
     * ]
     *
     * The result should be the following:
     * {
     *   '.ru': 3,
     *   '.ru.yandex': 3,
     *   '.ru.yandex.code': 1,
     *   '.ru.yandex.music': 1,
     * }
     *
     */
    export default function getDNSStats(domains) {
      let res = {};
      if (domains.length === 0) {

        return res;
      }



      for (let i = 0; i < domains.length; i++) {
        let domain = domains[i];
        const arr = domain.split('.').reverse()
        domain = '.' + arr.join('.')
        do {
          if (!res[domain]) {
                res[domain] = 0
              }
              res[domain] += 1
          const indexOfLastDot = domain.lastIndexOf('.')
          domain = domain.slice(0, indexOfLastDot)

        } while (domain.indexOf('.') > -1)
      }

      return res;
    }
