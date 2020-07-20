export default class BookService {

  async getBook(bible, book) {
    let result = {};
    try {
      const { lang, version } = { ...bible };

      if (book) {
        result = {
          bible: {
            lang,
            version,
            name: 'Dumitru Cornilescu',
          },
          book: {
            name: 'Leviticul',
            order: book,
            chapters: 27,
          },
          chapters: [
            {
              name: 1,
              verses: 17,
            },
            {
              name: 2,
              verses: 16,
            },
            {
              name: 3,
              verses: 17,
            },
          ],
        };
      } else {
        result = {
          bible: {
            lang,
            version,
            name: 'Dumitru Cornilescu',
          },
          books: [
            {
              name: 'Geneza',
              order: 1,
              chapters: 50,
            },
            {
              name: 'Exod',
              order: 2,
              chapters: 40,
            },
            {
              name: 'Leviticul',
              order: 3,
              chapters: 27,
            },
          ],
        };
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
