import VerseService from '../../shared/services/verse.service';

const verseService = new VerseService();

export function getVerse(req, res) {
  const book = req.params && req.params.book ? req.params.book : undefined;
  const bible = req.appData['bible'];

  return verseService
    .getVerse(bible, book)
    .then((book) => res.json(book))
    .catch((err) => {
      console.error('ERROR', err);

      return res.status(400).json({
        error: err.message,
      });
    });
}
