import { useState } from 'react';

import { Trie } from './trie';
import dictionary from './dictionary.json';

const testStrings = [
  'cat',
  'catnip',
  'can',
  'cab',
  'bat',
  'babble',
  'bobbleheade',
];

const trie = new Trie();

trie.insertAll(dictionary);
console.log(dictionary.length);
console.log(trie);

const App = () => {
  const [potentialWords, setPotentialWords] = useState([]);

  const onChangeHandler = e => {
    setPotentialWords(trie.searchWithWords(e.target.value));
  };
  return (
    <div className='App'>
      {/* <span>You could choose from:</span>
      <div>{dictionary.join(', ')}</div> */}
      <span>I thinkyou are typing one of</span>
      <div>{potentialWords.join(', ')}</div>
      <input onChange={onChangeHandler} />
    </div>
  );
};

export default App;
