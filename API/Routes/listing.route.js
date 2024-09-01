import express from 'express';
import { createListing } from '../Controllers/listing.controller.js';
import { verifyToken } from '../Utils/verifyUser.js';

const router = express.Router();

router.post('/create', createListing);

export default router;  