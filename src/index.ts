import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharctersCollection';

//const numbersCollection = new NumbersCollection([1, 3, 10, 7, 8]);
//const sorter = new Sorter(numbersCollection);
//sorter.sort();

const charactersCollection = new CharactersCollection('Xaaby');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
