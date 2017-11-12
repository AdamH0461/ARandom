# program to count number of words based on how many spaces are in a string
original = input("enter string: ")
space = 0
string = original.lower()
for c in range(len(string)):
    char = string[c]
    if char == " ":
        space += 1
space += 1
print("There were ", space, " words in that string.")
