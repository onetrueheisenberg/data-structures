class SimpleTrieNode {
  public children: number[];
  public endOfWord: boolean;
  constructor() {
    this.children = new Array(26).fill(null);
    this.endOfWord = false;
  }
}
class SimpleTrie {
  public root;
  constructor() {
    this.root = new SimpleTrieNode();
  }

  insert(word: string): void {
    let curr = this.root;
    for (const char of word) {
      const i = char.charCodeAt(0) - "a".charCodeAt(0);
      if (curr.children[i] === null) {
        curr.children[i] = new SimpleTrieNode();
      }
      curr = curr.children[i];
    }
    curr.endOfWord = true;
  }

  search(word: string): boolean {
    let curr = this.root;
    for (const char of word) {
      const i = char.charCodeAt(0) - "a".charCodeAt(0);
      if (curr.children[i] === null) return false;
      curr = curr.children[i];
    }
    return curr.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let curr = this.root;
    for (const char of prefix) {
      const i = char.charCodeAt(0) - "a".charCodeAt(0);
      if (curr.children[i] === null) return false;
      curr = curr.children[i];
    }
    return true;
  }
}
