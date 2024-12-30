from os import *
from sys import *
from collections import *
from math import *

class SimpleTrieNode:
    def __init__(self):
        self.children = [None] * 26  # Array of size 26 for 'a' to 'z'
        self.end_of_word = False  # Indicates if this node marks the end of a word


class SimpleTrie:
    def __init__(self):
        self.root = SimpleTrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for char in word:
            index = ord(char) - ord('a')  # Get the index for the character
            if curr.children[index] is None:
                curr.children[index] = SimpleTrieNode()
            curr = curr.children[index]
        curr.end_of_word = True  # Mark the last node as end of a word

    def search(self, word: str) -> bool:
        curr = self.root
        for char in word:
            index = ord(char) - ord('a')
            if curr.children[index] is None:
                return False
            curr = curr.children[index]
        return curr.end_of_word  # Return True if the word exists and ends here

    def starts_with(self, prefix: str) -> bool:
        curr = self.root
        for char in prefix:
            index = ord(char) - ord('a')
            if curr.children[index] is None:
                return False
            curr = curr.children[index]
        return True  # Return True if the prefix exists