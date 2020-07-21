import ChapterService from '../../shared/services/chapter.service';

const chapterService = new ChapterService();

export function getChapter(req, res) {
  const book = req.params && req.params.book ? req.params.book : undefined;
  const bible = req.appData['bible'];

  return chapterService
    .getChapter(bible, book)
    .then((book) => res.json(book))
    .catch((err) => {
      console.error('ERROR', err);

      return res.status(400).json({
        error: err.message,
      });
    });
}
