import Mock from '../mock';
import database from './database.json';

Mock.onGet('/api/information').reply((config) => {
	const response = database.information;
	return [ 200, response ];
});

Mock.onGet('/api/services').reply((config) => {
	const response = database.services;
	return [ 200, response ];
});

Mock.onGet('/api/reviews').reply((config) => {
	const response = database.reviews;
	return [ 200, response ];
});

Mock.onGet('/api/skills').reply((config) => {
	const response = database.skills;
	return [ 200, response ];
});

Mock.onGet('/api/portfolios').reply((config) => {
	const response = database.portfolios;
	return [ 200, response ];
});

Mock.onGet('/api/experience').reply((config) => {
	const response = database.experience;
	return [ 200, response ];
});

Mock.onGet('/api/contactinfo').reply((config) => {
	const response = database.contactInfo;
	return [ 200, response ];
});
