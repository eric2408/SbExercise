"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    """ find random words from dictionary.

    >>> findWord = WordFinder("simple.txt")
    3 words read

    >>> findWord.random() in ['cat','dog','porcupine']
    True

    """
    def __init__(self, path):
        pathFile = open(path)
        self.words = self.convert(pathFile)
        print(f'{len(self.words)} words read')

    def convert(self, pathFile):
        return [word.strip() for word in pathFile]

    def random(self):
        return random.choice(self.words)



class SpecialWordFinder(WordFinder):
    """ finds words excluding comments

    >>> special = SpecialWordFinder("complex.txt")
    3 words read

    >>> special.random() in ['pear', 'carrot', 'kale']
    True
    """

    def convert(self, pathFile):
        return [word.strip() for word in pathFile if word.strip() and not word.startswith("#")]
