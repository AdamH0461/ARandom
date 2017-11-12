file = open("testfile.txt", "r")
print(file.read())
file.close()
file = open("testfile.txt", "a")
file.write(input("something"))
file.close()
file = open("testfile.txt", "r")
print(file.read())
file.close
