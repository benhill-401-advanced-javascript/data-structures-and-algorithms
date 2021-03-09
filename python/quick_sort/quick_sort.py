def quick_sort(arr):
    quick_sort_help(arr, 0, len(arr) - 1)


def quick_sort_help(arr, first, last):
    if first < last:
        split = partition(arr, first, last)
        quick_sort_help(arr, first, split - 1)
        quick_sort_help(arr, split + 1, last)


def partition(arr, first, last):
    pivot = arr[first]
    left = first + 1
    right = last

    done = False
    while not done:
        while left <= right and arr[left] <= pivot:
            left = left + 1
        while arr[right] >= pivot and right >= left:
            right = right - 1
        if right < left:
            done = True
        else:
            temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp

    temp = arr[first]
    arr[first] = arr[right]
    arr[right] = temp

    return right


# random
# arr = [8, 4, 23, 42, 16, 15]

# reverse
# arr = [20, 18, 12, 8, 5, -2]

# doubles
# arr = [5, 12, 7, 5, 5, 7]

# nearly sorted
arr = [2, 3, 5, 7, 13, 11]
print(str("Unsorted: "), arr)
print("Quicksort magic happens..")
quick_sort(arr)
print(str("Sorted: "), arr)
