# function mysum() works similar to sum() but accepts any number of inputs
# TODO: need to add ability to accept collections


def mysum(*args):

    total = 0

    for number in args:
        total += number

    return(total)

print(mysum(1, 2, 5))
