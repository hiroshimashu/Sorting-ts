import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1, 3, 10, 7, 8]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
