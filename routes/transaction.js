const express = require('express');
const router = express.Router();

const Transaction = require('../models/Transaction');

router.post('/save', function(req, res, next) {
    const newTransaction = new Transaction(req.body);

    newTransaction.save(function(err, rep) {
        if (err) {
            console.error(err);
            res.send(false);
        } else {
            if (rep) {
                console.log(`Transaction saved successfully under id ${rep._id}`);
                res.send(true);
            } else {
                console.error(`Transaction was not saved. The cause for this is unknown`);
                res.send(false);
            }
        }
    });
});

module.exports = router;