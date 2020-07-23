import { bible } from '../../mock/bible.mock';

export default class BibleService {
  async getBible(lang, version) {
    return bible.find((e) => e.lang == lang && e.version == version) || {};
  }
}
