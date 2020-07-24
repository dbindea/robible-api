import { verse_mock } from '../../mock/verse.mock';
import ChapterService from './chapter.service';

const chapterService = new ChapterService();

export default class VerseService {
  async getVerse(lang, version, book, chapter, verse) {
    let _verse = [...verse_mock];
    let myChapter = await chapterService.getChapter(lang, version, book, chapter);

    if (verse) {
      myChapter[0].chapter[0].verse = _verse
        .filter((e) => e.bible_version == version && e.book_order == book && e.chapter_order == chapter && e.number == verse)
        .map((v) => ({ number: v.number, text: v.text }));
      return myChapter;
    } else {
      myChapter[0].chapter[0].verse = _verse
        .filter((e) => e.bible_version == version && e.book_order == book && e.chapter_order == chapter)
        .map((v) => ({ number: v.number, text: v.text }));
      return myChapter;
    }
  }
}
