# Complete the function that takes a non-negative int, n, and returns
# a list of all the powers of 2 up to that number
def power(n):
    return list(map(lambda i: 2**i, [x for x in range(n+1)]))
# old way
#def power(n):
#    num = [n ** i for i in range 2]
#    num.insert(0,1)

#    return num
