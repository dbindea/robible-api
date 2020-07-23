import { Router } from 'express';
import { getBible } from './bible.controller';

const router = Router();

router.get(['/bible'], getBible);

module.exports = router;
