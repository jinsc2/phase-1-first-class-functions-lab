// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(value1){
    return function(value2){
        return value1 * value2;
    };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (drivers, driving){
    return driving(drivers);
};