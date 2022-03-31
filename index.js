/* Your Code Here */
function createEmployeeRecord(empRecordArr) {
    return {
    firstName: empRecordArr[0],
    familyName: empRecordArr[1],
    title: empRecordArr[2],
    payPerHour: empRecordArr[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}

function createEmployeeRecords(arrayOfArray) {
    return arrayOfArray.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(dateStamp){
   const [date , hour] = dateStamp.split(' ')
//    const date = dateArray[0]
//    const hour = dateArray[1]

   const inEvent = {
       type: "TimeIn",
       hour: parseInt(hour) ,
       date: date
   }
   
   this.timeInEvents.push(inEvent)
    return this

}

function createTimeOutEvent(dateStamp){
    const [date , hour] = dateStamp.split(' ')
 //    const date = dateArray[0]
 //    const hour = dateArray[1]
 
    const outEvent = {
        type: "TimeOut",
        hour: parseInt(hour) ,
        date: date
    }
    
    this.timeOutEvents.push(outEvent)
     return this
}


function hoursWorkedOnDate(targetDate) {
    const timeIn = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
    const timeOut = this.timeOutEvents.find(outEvent => outEvent.date === targetDate)

    return(timeOut.hour - timeIn.hour) /100
}

function wagesEarnedOnDate(targetDate) {
    return hoursWorkedOnDate.apply(this, [targetDate]) * this.payPerHour
}


function findEmployeeByFirstName(srcRecordArr, firstName) {
    return srcRecordArr.find(rec => rec.firstName === firstName)
}

function calculatePayroll(recordsArray) {
    return recordsArray.reduce((total, record) => {
        return total + allWagesFor.call(record)
    },0
    )}
     /*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 fo
 r you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

