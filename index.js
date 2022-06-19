const moment = require("moment")

const displayTime = () => {
    $('.time').text(moment().format('LTS'));
    $('.date').text(moment().format('LL'));
};

const updateTime = () => {
    displayTime();

    setTimeout(updateTime, 1000);
};

updateTime();
