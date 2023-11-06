import { Router } from 'express';
import { saveAddress, getAddressData } from '../controller';

const router = Router();

router.post('/', saveAddress);
router.get('/', getAddressData);

export default router;
