import { Router } from "express";
import { feed } from './modules/feed'

const router: Router = Router();

router.use('/feed',feed)

export default router;