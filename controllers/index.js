const router = require('express').Router(); 

const apiRoutes = require('./api'); 
const homepageRoutes = require('./homepage'); 

router.use('/api', apiRoutes); 
router.use('/', homepageRoutes); 


// in case user makes request to non existent endpoint
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router; 
