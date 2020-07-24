import ChapterService from '../../shared/services/chapter.service';

const chapterService = new ChapterService();

export function getChapter(req, res) {
  const book = req.params && req.params.book ? req.params.book : undefined;
  const chapter = req.params && req.params.chapter ? req.params.chapter : undefined;
  const { lang, version } = req.appData['bible'];

  return chapterService
    .getChapter(lang, version, book, chapter)
    .then((response) => res.json(response))
    .catch((err) => {
      console.error('ERROR', err);

      return res.status(400).json({
        error: err.message,
      });
    });
}
