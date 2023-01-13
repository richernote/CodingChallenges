# write a function that takes a number and returns a total cost giving a dicount for the number of items bought

def sale_hotdogs(n):
    if n < 5:
        return 5 * 100
    elif 10 > n >= 5:
        return n * 95
    else:
        return n * 90
