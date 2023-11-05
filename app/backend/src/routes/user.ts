import { Router } from 'express';
import { listUsers, getUser, updateUser, deleteUser } from '../controller/user';
import { UserMiddleware, AuthenticationsMiddleware } from '../middleware';

const router = Router();
const { inspectUpdateUser } = UserMiddleware;
const { authorize } = AuthenticationsMiddleware;

router.post('/logout');
router.post('/refresh');
router.get('/', listUsers);
router.get('/:userId', getUser);
router.put('/:userId', [inspectUpdateUser], updateUser);
router.delete('/:userId', [authorize(['super', 'admin'])], deleteUser);

export default router;
