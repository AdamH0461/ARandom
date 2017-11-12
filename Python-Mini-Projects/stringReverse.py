# Program to reverse a string input by user
# definiton to reverse string
'''can import using import stringReverse and func can be called with
stringReverse.stringRev(string)
'''


def stringRev(string):
    newstring = []
    for c in range(len(string)):
        newstring.insert(0, string[c])
    return ("".join(newstring))  # returns the joined string
