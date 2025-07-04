import express from 'express';
import { addUser, getUserByid, deleteUser, updateUser } from '../controllers/userController.js';
import { addCraftsman, getCraftsmanByid, deleteCraftsman, updateCraftsman } from '../controllers/craftsmanController.js';

const router= express.Router();

router.post('/addUser', addUser);
router.get('/getUserByid', getUserByid);
router.delete('/deleteUser', deleteUser);
router.put('/updateUser', updateUser);
////////////////////////////////////////
/////////
router.post('/addCraftsman', addCraftsman);
router.get('/getCraftsmanByid', getCraftsmanByid);
router.delete('/deleteCraftsman', deleteCraftsman);
router.put('/updateCraftsman', updateCraftsman);


export default router;