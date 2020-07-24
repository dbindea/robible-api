import { bible_mock } from '../../mock/bible.mock';
import { book_mock } from '../../mock/book.mock';

export default class BookService {
  async getBook(lang, version, book) {
    let _bible = [...bible_mock];
    let _book = JSON.parse(JSON.stringify(book_mock));

    const myBible = _bible.find((e) => e.lang == lang && e.version == version);
    if (book) {
      return [_book.find((e) => e.bible_version == myBible.version && e.book_order == book)] || [];
    } else {
      return _book.filter((e) => e.bible_version == myBible.version) || [];
    }
  }
}
