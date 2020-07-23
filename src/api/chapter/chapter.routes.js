import { Router } from 'express';
import { getChapter } from './chapter.controller';

const router = Router({ mergeParams: true });

router.get(['/bible/book/:book/chapter', '/bible/book/:book/chapter/:chapter'], getChapter);

module.exports = router;
