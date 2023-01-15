# write a function that checks to see if a string is a palendrome (case insensitive)

def checker(string):
    return string.lower() == string.lower()[::-1]
