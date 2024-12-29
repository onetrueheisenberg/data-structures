from os import *
from sys import *
from collections import *
from math import *

class CountTrieNode:
    def __init__(self):
        self.children = [None] * 26  # Array of size 26 for 'a' to 'z'
        self.word_count = 0         # Count of words ending at this node
        self.children_count = 0     # Count of children nodes

class Trie:
    def __init__(self):
        # Write your code here.
        self.root = CountTrieNode()

    def insert(self, word):
        # Write your code here.
        curr = self.root
        for char in word:
            i = ord(char) - ord('a')  # Get index for the character
            if curr.children[i] is None:
                curr.children[i] = CountTrieNode()
                curr.children_count += 1
            curr = curr.children[i]
        curr.word_count += 1  # Increment word count at the last node


    def countWordsEqualTo(self, word):
        curr = self.root
        for char in word:
            i = ord(char) - ord('a')
            if curr is None or curr.children[i] is None:
                return 0
            curr = curr.children[i]
        return curr.word_count  # Return True if word count is greater than 0

    def countWordsStartingWith(self, prefix):
        curr = self.root
        for char in prefix:
            i = ord(char) - ord('a')
            if curr.children[i] is None:
                return 0
            curr = curr.children[i]
        return self._countStartingFromNode(curr)
    def _countStartingFromNode(self, node):
        count = node.word_count  # Include words ending at this node
        for child in node.children:
            if child is not None:
                count += self._countStartingFromNode(child)
        return count


    def erase(self, word):
        # Write your code here.
        def helper(node, word, depth):
            if node is None:
                return False
            if depth == len(word):
                if node.word_count > 0:
                    node.word_count -= 1
                    return True
                return False
            i = ord(word[depth]) - ord('a')
            if ( helper(node.children[i], word, depth + 1)):
                if ( node.children[i].word_count == 0 and all(c is None for c in node.children[i].children)):
                    node.children[i] = None
                    node.children_count -= 1
                return True
            return False
        helper(self.root, word, 0)

