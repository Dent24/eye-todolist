export default (date) => {
    function padLeft(num) {
        if (num < 10) return `0${num}`;
        return num;
    }

    return [ date.getFullYear(), padLeft(date.getMonth() + 1), padLeft(date.getDate()) ].join('-') + ' ' + [ padLeft(date.getHours()), padLeft(date.getMinutes()), padLeft(date.getSeconds()) ].join(':');
}