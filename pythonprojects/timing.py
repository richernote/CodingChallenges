def average(x, y):
    return x/y

def run_timing():
    run_times = []
    while True:
        time = input('Enter run time: ')

        if not time:
            if run_times:
                print(average(sum(run_times), len(run_times)))
            break
        try:
            time = int(time)
        except ValueError as e:
            print('Please put a number')

        run_times.append(time)

run_timing()
