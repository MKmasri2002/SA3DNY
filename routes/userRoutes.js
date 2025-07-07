import express from 'express';
import { protect } from '../middleware/authMiddleware.js'
import { addUser,loginUser, getUserByid, getAllUser, deleteUser, updateUser } from '../controllers/userController.js';


const router= express.Router();

router.post('/addUser', addUser);
router.post('/login',loginUser);
router.get('/getUserByid',protect, getUserByid);
router.get('/getAllUser', protect, getAllUser);
router.delete('/deleteUser',protect, deleteUser);
router.put('/updateUser', protect, updateUser);


export default router;