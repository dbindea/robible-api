import { bible } from '../../mock/bible.mock';
import { book } from '../../mock/book.mock';

export default class BookService {
  async getBook(lang, version, bookSearch) {
    const myBible = bible.find((e) => e.lang == lang && e.version == version);
    if (bookSearch) {
      return [book.find((e) => e.bible_version == myBible.version && e.order == bookSearch)] || [];
    } else {
      return book.filter((e) => e.bible_version == myBible.version) || [];
    }
  }
}
