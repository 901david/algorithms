class TrieNode {
  constructor({ char, children = {}, currentWords = [] }) {
    this.char = char;
    this.children = children;
    this.currentWords = currentWords;
  }

  isCurrentWord() {
    return this.hasChildChar('*');
  }

  hasChildChar(char) {
    return this.children[char] !== undefined;
  }
}

class TrieBase {
  constructor() {
    this.root = new TrieNode({ char: '$' });
    this.treeResults = [];
  }

  insertAll(words) {
    words.forEach(word => this.insert(word));
  }

  insert(word, index = 0, currentNode = this.root) {
    if (index === word.length) {
      if (!currentNode.isCurrentWord())
        currentNode.children['*'] = new TrieNode({ char: null });
      currentNode.children['*'].currentWords.push(word);
      return this;
    }
    const nextChar = word[index];
    if (!currentNode.hasChildChar(nextChar)) {
      currentNode.children[nextChar] = new TrieNode({ char: nextChar });
    }
    return this.insert(word, index + 1, currentNode.children[nextChar]);
  }

  getWordsAt(node = this.root, words = []) {
    if (node.isCurrentWord()) {
      words.push(...node.children['*'].currentWords);
    }
    for (const child of Object.keys(node.children)) {
      this.getWordsAt(node.children[child], words);
    }
    return words;
  }

  search(word, index = 0, currentNode = this.root) {
    if (index === word.length) return currentNode;
    const nextChar = word[index];
    if (currentNode.hasChildChar(nextChar)) {
      return this.search(word, index + 1, currentNode.children[nextChar]);
    }
    return null;
  }

  searchWithWords(string) {
    const searchResults = this.search(string);
    if (searchResults) {
      return this.getWordsAt(searchResults);
    }
    return [];
  }
}

exports.Trie = TrieBase;
