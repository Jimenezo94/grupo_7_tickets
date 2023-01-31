const userController = {
    register: (req, res) => {
        res.render('./user/register')
    },
    login: (req, res) => {
        res.render('./user/login')
    },
};

module.exports = userController;