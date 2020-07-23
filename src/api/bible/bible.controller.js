import BibleService from '../../shared/services/bible.service';

const bibleService = new BibleService();

export function getBible(req, res) {
  const { lang, version } = req.appData['bible'];

  return bibleService
    .getBible(lang, version)
    .then((bible) => res.json(bible))

    .catch((err) => {
      console.error('ERROR', err);
      return res.status(400).json({
        error: err.message,
      });
    });
}
