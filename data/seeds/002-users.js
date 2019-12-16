exports.seed = function (knex) {
	// 000-cleanup.js deleted the data from all tables,
	// we only need to insert the seed data

	return knex('table_name').insert([
		{ username: 'rowValue1', password: "pass", role_id: 3 },
		{ username: 'rowValue2', password: "pass", role_id: 3 },
		{ username: 'rowValue3', password: "pass", role_id: 3 }
	]);
};
