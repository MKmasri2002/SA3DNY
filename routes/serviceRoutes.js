import express from 'express';
import { addService, getServiceByid,getAllService, deleteService, updateService } from '../controllers/serviceController.js';


const router= express.Router();

router.post('/addService', addService);
router.get('/getServiceByid', getServiceByid);
router.get('/getAllService', getAllService);
router.delete('/deleteService', deleteService);
router.put('/updateService', updateService);


export default router;