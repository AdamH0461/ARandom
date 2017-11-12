""" program to count how many vowels are in a string and then
 count how many of each there is"""
original = input("enter string: ")
a, e, i, o, u = 0, 0, 0, 0, 0
vowellist = ""
vowels = "aeiou"
string = original.lower()
for c in range(len(string)):
    char = string[c]
    if char == "a":
        a += 1
        vowellist += "a"
    elif char == "e":
        e += 1
        vowellist += "e"
    elif char == "i":
        i += 1
        vowellist += "i"
    elif char == "o":
        o += 1
        vowellist += "o"
    elif char == "u":
        u += 1
        vowellist += "u"
print(a, "a was found")
print(e, "e was found")
print(i, "i was found")
print(o, "o was found")
print(u, "u was found")
print("total vowels found is, ", (a+e+i+o+u))
