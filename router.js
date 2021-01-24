const router = require('express').Router()
const {
    getAllContact,
    getSingleContact,
    updateContact,
    createContact,
    deleteContact
} = require('./controller')

router.get('/', getAllContact)
router.get('/delete/:id', deleteContact)
router.get('/:id', getSingleContact)
router.put('/:id', updateContact)
router.post('/', createContact)
// router.delete('delete/:id', deleteContact)


module.exports = router