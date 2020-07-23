import { Router } from 'express';
import { getVerse } from './verse.controller';

const router = Router({ mergeParams: true });

router.get(['/bible/book/:book/chapter/:chapter/verse', '/bible/book/:book/chapter/:chapter/verse/:verse'], getVerse);

module.exports = router;
