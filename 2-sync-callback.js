'use strict';
{
  const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 }
  ];

  function isLongMonth(month) {
    return month.days === 31;
  }

  function toConsole(month) {
    console.log(`${month.name} has ${month.days} days.`);
  }

  months
    .filter(isLongMonth)
    .forEach(toConsole);
}
