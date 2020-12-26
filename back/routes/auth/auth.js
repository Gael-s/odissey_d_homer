const router = require('express').Router();
const connection = require('../../helpers/db');

router.post('/signup', function(req, res, next) {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        pass: req.body.pass
    };

    connection.query(
        'INSERT INTO users ( firstname, lastname, email, pass) VALUES (?,?,?,?)',
        [user.firstname, user.lastname, user.email, user.pass ],
        (errTwo, resTwo) => {
            if (errTwo) res.status(500).end;
            res.end();
        }
    );
});


module.exports = router;