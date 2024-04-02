/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

/* Your Code Here */
const createEmployeeRecord = (record) => {
    // record parameter is an array with 4 elements
    const obj = {
      firstName: record[0],
      familyName: record[1],
      title: record[2],
      payPerHour: record[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
    return obj;
  };
  
  const createEmployeeRecords = (records) => {
    // records is array of arrays
    const objs = records.map((record) => createEmployeeRecord(record));
    return objs;
  };
  
  const createTimeInEvent = function (timeStamp) {
    const [d, h] = timeStamp.split(" ");
  
    const timeInEvent = {
      type: "TimeIn",
      hour: Number.parseInt(h),
      date: d,
    };
    this.timeInEvents.push(timeInEvent);
    return this;
  };
  
  const createTimeOutEvent = function (timeStamp) {
    const [d, h] = timeStamp.split(" ");
  
    const timeOutEvent = {
      type: "TimeOut",
      hour: Number.parseInt(h),
      date: d,
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
  };
  
  const hoursWorkedOnDate = function (date) {
    const timeIn = this.timeInEvents.find((ob) => ob.date === date).hour;
    const timeOut = this.timeOutEvents.find((ob) => ob.date === date).hour;
    return Math.abs(timeOut - timeIn) / 100;
  };
  
  const wagesEarnedOnDate = function (date) {
    const numberOfHoursWorked = hoursWorkedOnDate.call(this, date);
    return numberOfHoursWorked * this.payPerHour;
  };
  
  
  const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date;
    });
  
    const payable = eligibleDates.reduce(
      function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
      }.bind(this),
      0
    ); 
  
    return payable;
  };
  const calculatePayroll = (employees) => {
      const payRoll = employees.reduce(
        (total, employee) => total + allWagesFor.call(employee),
        0
      );
      return payRoll;
    };
    
    const findEmployeeByFirstName = function (employees, firstName) {
      const searchedEmploy = employees.find((empl) => empl.firstName === firstName);
      console.log(searchedEmploy);
      return searchedEmploy;
    };
    
    let src = [
      ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
      ["Natalia", "Romanov", "CEO", 150],
    ];