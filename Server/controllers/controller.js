const users = require("../../users.json");
let id = users[users.length-1].id + 1

module.exports = {
	getAllUsers: (req, res) => {
		res.status(200).send(users);
	},
	getSingleUser: (req, res) => {
		const { identifier } = req.params;
		const user = users.find(user => user.id === +identifier);
		if (!user) {
			return res.status(500).send("Unable to find user");
		}
		res.status(200).send(user);
    },
    addUser: (req, res) => {
        const {newUser} = req.body
        console.log(req.body)
        const user = {
            first_name: newUser.first,
            last_name: newUser.last,
            email: newUser.email,
            id
        }
        id++
        users.push(user)
        res.status(200).send(users)
    }
};
