const { Trie } = require('./trie');

describe('Trie unit tests', () => {
  const testData = ['can', 'cat', 'catnip', 'bat'];
  const testDataEasy = ['can'];

  test('should return correct tree in basic case', () => {
    const results = 3;

    const myTrie = new Trie();
    myTrie.insertAll(testData);
    console.log(myTrie.root);
  });
});
