let month = prompt("Enter a month");
month = month.toLowerCase();

if (month === 'february') {
    console.log(`${month} has 28 days or 29 days if it is a leap year`);
} else if (month === 'september' || month === 'april' || month === 'june' || month === 'november') {
    console.log(`${month} has 30 days`);
} else {
    console.log(`${month} has 31 days`)
}