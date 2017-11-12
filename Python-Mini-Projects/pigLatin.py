# program to take first constonant, move it to the end and add "ay"
original = input("enter string")
pyg = "ay"
if original.isalpha():
    string = original.lower()
    first = string[0]
    if first in "aeiou":
        newstring = string + pyg
    else:
        newstring = string[1:] + first + pyg
    print(newstring)
else:
    print("failed")
