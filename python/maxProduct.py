def max_product(nums):
    max1, max2 = float('-inf'), float('-inf')
    min1, min2 = float('inf'), float('inf')

    for num in nums:

        #update large numbers
        if num > max1:
            max2 = max1
            max1 = num
        elif num > max2:
            max2 = num

        #update small numbers
        if num < min1:
            min2 = min1
            min1 = num
        elif num < min2:
            min2 = num
        
    return max(max1 * max2, min1 * min2)


print(max_product([5, -2, 3, -7]))  # Example usage
print(max_product([1, 3, 5, 2]))    # Example usage