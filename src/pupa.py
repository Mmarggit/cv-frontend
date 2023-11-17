n = input()
print(n)
while n != '':
    try:
         s += int(n)
    except:
         s += 0
print(str(s))