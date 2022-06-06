def print_upper_words(words):
    """print each word in uppercase """
    for word in words:
        print(word.upper())

print_upper_words(["hello", "how", "are", "you"])

def print_upper_words_start_with_e(words):
    """print words in the list that starts with e with the upper case"""
    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())

print_upper_words_start_with_e(["eat", "eel", "wow"])

def print_upper_words_start_char(words, must_start_with):
    """print words in upper case that start with the letters in the must_Start_with variable"""
    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())


print_upper_words_start_char(["apple","banana","wow", "cream"], ["a","b","c"])
