import { Router } from 'express';
import { getBook } from './book.controller';

const router = Router({ mergeParams: true });

router.get(['/bible/book', '/bible/book/:book'], getBook);

module.exports = router;
