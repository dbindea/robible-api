import VerseService from '../../shared/services/verse.service';

const verseService = new VerseService();

export function getVerse(req, res) {
  const book = req.params && req.params.book ? req.params.book : undefined;
  const chapter = req.params && req.params.chapter ? req.params.chapter : undefined;
  const verse = req.params && req.params.verse ? req.params.verse : undefined;
  const { lang, version } = req.appData['bible'];

  return verseService
    .getVerse(lang, version, book, chapter, verse)
    .then((response) => res.json(response))
    .catch((err) => {
      console.error('ERROR', err);

      return res.status(400).json({
        error: err.message,
      });
    });
}
