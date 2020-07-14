import {Bible} from '../../shared/schema/bible.schema'
export const resolvers = {
  Query: {
    hello: () => 'hi',
    editions: () => Bible.find()
  },
};
