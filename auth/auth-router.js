const bcrypt = require("bcryptjs");

const router = require("express").Router();

const Users = require("../users/users-model.js");

function clg(...x) { console.log(...x) }

router.post("/register", (req, res) => {
	clg(req.body);
	let user = req.body;

	// hash PW
	// the 8 is the number of rounds (2^8) (iterations)
	const hash = bcrypt.hashSync(user.password, 8);

	// override the plain text pw with its hash
	user.password = hash;

	Users.add(user)
		.then(saved => {
			res.status(201).json(saved);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

router.post("/login", (req, res) => {
	let { username, password } = req.body;

	//chk that the password   <<  ??

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				// change the users-model findBy() to return the password as well
				res.status(200).json({ message: `welcom ${user.username}` });
			} else {
				res.status(401).json({ message: "invalid creds" });
			}
		})
		.catch(err => {
			res.status(500).json({ err })
		});
});

module.exports = router;