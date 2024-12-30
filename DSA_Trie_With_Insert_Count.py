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

    def insert_and_count(self, word: str, start: int) -> int:
        curr = self.root
        count = 0
        for i in range(start, len(word)):
            index = ord(word[i]) - ord('a')
            if curr.children[index] is None:
                curr.children[index] = SimpleTrieNode()
                count += 1
            curr = curr.children[index]
        return count
            

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

def countDistinctSubstrings(s):
    # Write your code here
    # result_set = set()
    # for i in range(len(s)):
    #     word = ''
    #     for j in range(i, len(s)):
    #         word += s[j]
    #         result_set.add(word)
    # return len(result_set) + 1
    root = SimpleTrie()
    count = 0
    n = len(s)
    for i in range(n):
        count += root.insert_and_count(s, i)
    return count + 1
