const calculateDaysBetween = (from, to) => {
	 const result = moment.preciseDiff(from, to, true);
	 return `${result.years} years, ${result.months} months, ${result.days} days`;
};


const datingDate = new Date('2015-08-08');
const engageDate = new Date('2017-08-12');
const marriedDate = new Date('2018-02-14');

window.onload = (event) => {
	const now = Date.now();
	document.getElementById("together").innerText = calculateDaysBetween(datingDate, now).toString();
	document.getElementById("engagement").innerText = calculateDaysBetween(engageDate, now).toString();
	document.getElementById("marriage").innerText = calculateDaysBetween(marriedDate, now).toString();
};