class CountTrieNode {
  children: Array<CountTrieNode | null>;
  wordCount: number;
  childrenCount: number;

  constructor() {
    this.children = new Array(26).fill(null); // Array of size 26 for 'a' to 'z'
    this.wordCount = 0; // Count of words ending at this node
    this.childrenCount = 0; // Count of children nodes
  }
}

class Trie {
  root: CountTrieNode;

  constructor() {
    this.root = new CountTrieNode();
  }

  insert(word: string): void {
    let curr: CountTrieNode = this.root;
    for (const char of word) {
      const i = char.charCodeAt(0) - "a".charCodeAt(0); // Get index for the character
      if (curr.children[i] === null) {
        curr.children[i] = new CountTrieNode();
        curr.childrenCount++;
      }
      curr = curr.children[i]!;
    }
    curr.wordCount++; // Increment word count at the last node
  }

  countWordsEqualTo(word: string): number {
    let curr: CountTrieNode | null = this.root;
    for (const char of word) {
      const i = char.charCodeAt(0) - "a".charCodeAt(0);
      if (curr === null || curr.children[i] === null) {
        return 0;
      }
      curr = curr.children[i];
    }
    return curr.wordCount; // Return the count of words equal to the given word
  }

  countWordsStartingWith(prefix: string): number {
    let curr: CountTrieNode | null = this.root;
    for (const char of prefix) {
      const i = char.charCodeAt(0) - "a".charCodeAt(0);
      if (curr === null || curr.children[i] === null) {
        return 0;
      }
      curr = curr.children[i];
    }
    return this._countStartingFromNode(curr);
  }

  private _countStartingFromNode(node: CountTrieNode | null): number {
    if (node === null) return 0;

    let count = node.wordCount; // Include words ending at this node
    for (const child of node.children) {
      if (child !== null) {
        count += this._countStartingFromNode(child);
      }
    }
    return count;
  }

  erase(word: string): void {
    const helper = (
      node: CountTrieNode | null,
      word: string,
      depth: number
    ): boolean => {
      if (node === null) return false;

      if (depth === word.length) {
        if (node.wordCount > 0) {
          node.wordCount--;
          return true;
        }
        return false;
      }

      const i = word[depth].charCodeAt(0) - "a".charCodeAt(0);
      if (helper(node.children[i], word, depth + 1)) {
        if (
          node.children[i]!.wordCount === 0 &&
          node.children[i]!.children.every((c) => c === null)
        ) {
          node.children[i] = null;
          node.childrenCount--;
        }
        return true;
      }
      return false;
    };

    helper(this.root, word, 0);
  }
}
