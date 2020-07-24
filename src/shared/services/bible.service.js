import { bible_mock } from '../../mock/bible.mock';

export default class BibleService {
  async getBible(lang, version) {
    let _bible = [...bible_mock];
    if (version) {
      return [_bible.find((e) => e.lang == lang && e.version == version)] || [];
    } else {
      return _bible.filter((e) => e.lang == lang);
    }
  }
}
