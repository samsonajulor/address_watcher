import { Router } from 'express';
import { saveAddress, getAddressData } from '../controller';

const router = Router();

router.post('/', saveAddress);
router.get('/:owner', getAddressData);

export default router;
