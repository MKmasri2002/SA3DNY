import express from 'express';
import { addCraftsman, getCraftsmanByid, getAllCraftsman, deleteCraftsman, updateCraftsman } from '../controllers/craftsmanController.js';


const router= express.Router();

router.post('/addCraftsman', addCraftsman);
router.get('/getCraftsmanByid', getCraftsmanByid);
router.get('/getAllCraftsman', getAllCraftsman);
router.delete('/deleteCraftsman', deleteCraftsman);
router.put('/updateCraftsman', updateCraftsman);


export default router;