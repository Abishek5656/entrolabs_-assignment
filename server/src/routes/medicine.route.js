import { Router } from 'express';
import { createMedicine } from '../controllers/medicine.controller.js';

const router = Router();

router.route("/create").post(createMedicine)

export default router