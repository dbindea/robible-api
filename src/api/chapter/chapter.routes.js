import { Router } from 'express';
import { getChapter } from './chapter.controller';

const router = Router({ mergeParams: true });

router.get(['/bible/book/:book/chapter/:chapter', '/bible/book/:book/chapter/:chapter/verse/:verse'], getChapter);

module.exports = router;
