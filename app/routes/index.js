const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('home');
});

// export to be required for routing
module.exports = router;