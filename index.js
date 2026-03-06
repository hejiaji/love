const formatDuration = (from) => {
	const now = moment();
	const momentFrom = moment(from);
	const result = moment.preciseDiff(momentFrom, now, true);
	const diffDays = now.diff(momentFrom, 'days') + 1;

	const parts = [];
	if (result.years) parts.push(`${result.years} ${result.years === 1 ? 'year' : 'years'}`);
	if (result.months) parts.push(`${result.months} ${result.months === 1 ? 'month' : 'months'}`);
	parts.push(`${result.days} ${result.days === 1 ? 'day' : 'days'}`);

	return `${parts.join(', ')} (${diffDays.toLocaleString()} days total)`;
};

const milestones = [
	{ id: 'together', date: new Date('2015-08-08') },
	{ id: 'engagement', date: new Date('2017-08-12') },
	{ id: 'marriage', date: new Date('2018-02-14') },
	{ id: 'nolan', date: new Date('2021-05-05') },
	{ id: 'saiya', date: new Date('2023-08-25') },
];

const updateAll = () => {
	milestones.forEach(({ id, date }) => {
		const el = document.getElementById(id);
		if (el) el.textContent = formatDuration(date);
	});
};

window.onload = () => {
	updateAll();
	setInterval(updateAll, 60000);
};
