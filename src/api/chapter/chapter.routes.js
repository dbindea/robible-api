import { Router } from 'express';

const router = Router({ mergeParams: true });

router.get(['/bible/book/:book/chapter/:chapter', '/bible/book/:book/chapter/:chapter/verse/:verse'], getChapter);

module.exports = router;