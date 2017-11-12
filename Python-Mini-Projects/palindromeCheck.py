# program to check if input is a palindrome (word which is the same backwards),
# using my string reversal program made earlier
import stringReverse as sr  # imports code from string reversal project
origin = input("enter Shenanigans")
reverse = sr.stringRev(origin)
if origin == reverse:
    print(origin + " reversed is " + reverse + "\n palindrome confirm")
else:
    print("U GOT NO PALINDROME")
    print(origin + " reversed is " + reverse)
