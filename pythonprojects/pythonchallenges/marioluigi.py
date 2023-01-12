# Given an array of numbers return an array where each indicy in the array is only 1 more than the one before

def pipes(nums):
    nums.sort()

    return [i for i in range(nums[0], nums[-1] + 1)]
