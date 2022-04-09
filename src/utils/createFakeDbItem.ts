import { faker } from '@faker-js/faker';
import {ITodoListItem} from '../store/reducers/todoListSlice';

export default function createFakeDbItem(): ITodoListItem {
  return {
    id: faker.datatype.uuid(),
    title: faker.company.bsNoun(),
    description: faker.lorem.paragraphs(faker.datatype.number({ min: 1, max: 5, precision: 1 }), '\n'),
    creationDate: faker.date.past(),
    isFavorite: faker.datatype.boolean(),
    isComplete: false,
  };
}
