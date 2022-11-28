const fooduser = require('../model/fooduser');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { users, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' })

    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409);
    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const result = await User.create({

            "firstname": firstName,
            "lastname": lastName,
            "username": username,
            "email": email,
            "password": hashedPwd,
            "confirmPassword": hashedPwd,
            "location": location

        });

        console.log(result);
        res.status(201).json({ 'success': 'New user ${user} created!' })


    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };