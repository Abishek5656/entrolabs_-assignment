import { Router } from 'express';
import { createMedicine, getRecords } from '../controllers/medicine.controller.js';

const router = Router();

router.route("/create").post(createMedicine)

router.route("/getrecords").get(getRecords);

export default router