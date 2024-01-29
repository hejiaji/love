const calculateDaysBetween = (from, to) => {
	 const result = moment.preciseDiff(from, to, true);
	 const now = new moment();
	 const momentFrom = new moment(from);
	 const diffDays = now.diff(momentFrom, 'days') + 1;
	 return `${result.years} years, ${result.months} months, ${result.days} days (In total ${diffDays} days)`;
};


const datingDate = new Date('2015-08-08');
const engageDate = new Date('2017-08-12');
const marriedDate = new Date('2018-02-14');
const nolanBirthDate = new Date("2021-05-05");
const saiyaBirthDate = new Date("2023-08-25");

window.onload = (event) => {
	const now = Date.now();
	document.getElementById("together").innerText = calculateDaysBetween(datingDate, now).toString();
	document.getElementById("engagement").innerText = calculateDaysBetween(engageDate, now).toString();
	document.getElementById("marriage").innerText = calculateDaysBetween(marriedDate, now).toString();
	document.getElementById("nolan").innerText = calculateDaysBetween(nolanBirthDate, now).toString();
	document.getElementById("saiya").innerText = calculateDaysBetween(saiyaBirthDate, now).toString();
};
