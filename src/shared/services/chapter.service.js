import BookService from '../../shared/services/book.service';
import { chapter_mock } from '../../mock/chapter.mock';

const bookService = new BookService();
export default class ChapterService {
  async getChapter(lang, version, book, chapter) {
    let _chapter = [...chapter_mock];

    let myBook = (await bookService.getBook(lang, version, book))[0];
    if (chapter) {
      let { number, num_verses } = _chapter.find((e) => e.bible_version == version && e.book_order == book && e.number == chapter);
      myBook.chapter = [{ number, num_verses }];
      return [myBook];
    } else {
      myBook.chapter = _chapter.filter((e) => e.bible_version == version && e.book_order == book).map((c) => ({ number: c.number, num_verses: c.num_verses }));
      return [myBook];
    }
  }
}
