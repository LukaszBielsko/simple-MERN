const express = require('express')
const router = express.Router()

// item model - bring it here to query it etc
const Item = require('../../models/Item')

// @route GET api/items
// @desc Get all items
// @access public
router.get('/', (_req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
    // res.send('hello')
})

// @route POST api/items
// @desc add new item
// @access public
// router.post('/', (req, res) => {
//     const newItem = new Item({
//         name: req.body.name
//     })
//     console.log(req.body.name)

//     newItem.save().then(item => res.json(item))
// })


// brad's version
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then(item => res.json(item))
});



 
// @route DELETE api/items
// @desc Get all items
// @access public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
        .then(() => res.json({ success: true })))
        .catch( err => res.status(404).json({success:false}) )
})

module.exports = router