import { Router } from 'express';
import { createCohort, deleteCohort, getCohort, listCohorts, updateCohort } from '../controller';
import { AuthenticationsMiddleware, CohortMiddleware } from '../middleware';

const { authorize } = AuthenticationsMiddleware;
const { inspectCreateCohort } = CohortMiddleware;

const router = Router();

router.get('/', listCohorts);
router.post('/', [inspectCreateCohort, authorize(['super', 'admin'])], createCohort);
router.put('/:cohortId', [authorize(['super', 'admin'])], updateCohort);
router.get('/:cohortId', getCohort);
router.delete('/:cohortId', authorize(['super', 'admin']), deleteCohort);

export default router;
