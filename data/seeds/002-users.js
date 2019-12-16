exports.seed = function (knex) {
	// 000-cleanup.js deleted the data from all tables,
	// we only need to insert the seed data

	return knex('users').insert([
		{ username: 'Mike', password: "pass", role_id: 3 },
		{ username: 'Dave', password: "pass", role_id: 3 },
		{ username: 'James', password: "pass", role_id: 3 }
	]);
};
