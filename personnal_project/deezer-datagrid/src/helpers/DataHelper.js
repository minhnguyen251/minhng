export default class DataHelper {

    /**
     * Convert seconds to minute(s)
     * @param seconds
     * @return {string} minute(s)
     */
    static convertSecToMin(seconds) {
        if (typeof seconds !== 'number')
            return seconds;
        return `${Math.round(seconds / 60)}:${seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60}`
    }

    /**
     * Reformat string to
     * @param string
     * @return {string}
     */
    static reformatString(string) {
        if (typeof string !== 'string')
            return string;

        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    /**
     * De-duplicate received data based on its id
     * @param array
     * @return {array}
     */
    static arrayUnique = (array) => {
        const a = array.concat();
        for(let i=0; i<a.length; ++i) {
            for(let j=i+1; j<a.length; ++j) {
                if(a[i].id === a[j].id) {
                    a.splice(j--, 1);
                }
            }
        }

        return a;
    };

    /**
     *
     * @param {array} songs
     * Songs received from search
     * @param key1
     * @param key2
     * @param {boolean} ascending
     * Ascending or Descending
     *
     * @return {array}
     */
    static sortSongs = (songs, key1, key2, ascending) => {
        songs.sort((a, b) => {
            if (!key2 ? a[key1] < b[key1] : a[key1][key2] < b[key1][key2])
                return ascending ? 1 : -1;

            if (!key2 ? a[key1] > b[key1] : a[key1][key2] > b[key1][key2])
                return ascending ? -1 : 1;

            return 0;
        });

        return songs;
    };
}