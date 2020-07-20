import BookService from '../../shared/services/book.service';

const bookService = new BookService();

export function getBook(req, res) {
  
  const book = req.params && req.params.book ? req.params.book : undefined;
  const bible = req.appData['bible'];

  return bookService
    .getBook(bible, book)
    .then((book) => res.json(book))
    .catch((err) => {
      console.error('ERROR', err);

      return res.status(400).json({
        error: err.message,
      });
    });
}
