const router = require('express').Router(); 
const { Post, User } = require('../../models'); 
const { post } = require('./user-routes');

router.get('/', (req, res) => {
    Post.findAll({ 
        attributes: ['id', 'post_caption', 'created_at'], 
        include: [
            {
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err); 
        res.status(500).json(err); 
    })
}); 

module.exports = router; 