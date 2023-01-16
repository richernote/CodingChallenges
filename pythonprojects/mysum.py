def mysum(*args):

    total = 0

    for number in args:
        total += number

    return(total)

print(mysum(1, 2, 5))
