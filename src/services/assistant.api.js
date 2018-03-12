import data from './mock-data.json';

const intersection = (a, b) => {
	const toLowerCase = (str) => str.toLowerCase();
	let set1 = new Set(a.map(toLowerCase));
	let set2 = new Set(b.map(toLowerCase));
	return [...new Set([...set1].filter(x => set2.has(x)))];
};

const filterByEnabled = (obj) => Object.keys(obj).filter((key) => obj[key]);

const byDuties = ({ duties }) => ({ skills }) => intersection(filterByEnabled(duties), skills.duties).length === filterByEnabled(duties).length;
const byLanguages = ({ languages }) => ({ skills }) => intersection(filterByEnabled(languages), skills.languages).length === filterByEnabled(languages).length;
const byPostCode = ({ postCode }) => (assistant) => true;
const byPriceRange = ({ priceRange }) => (assistant) => true;

export const fetchData = async (filter) => {
	if (!filter) return { data };
	return {
		data: data
		.filter(byDuties(filter))
		.filter(byLanguages(filter))
		.filter(byPostCode(filter))
		.filter(byPriceRange(filter))
	};
}