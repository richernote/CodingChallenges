import random
def game():

    print("Welcome to the guessing game, to give up simply type exit")
    answer = random.randint(0, 100)
    
    count = 0

    while True:
        guess = input("Guess a Number: ")

        if guess == "exit":
            break

        guess = int(guess)

        if guess == answer:
            print(f"You're right!! You got it in {count + 1} tries")
            break

        if guess < answer:
            count += 1
            print("Too low")

        if guess > answer:
            count += 1
            print("Too high")
    print("Thanks for playing")

game()
