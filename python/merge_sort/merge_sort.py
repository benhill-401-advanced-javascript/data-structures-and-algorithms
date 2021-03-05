def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) / 2
        left_half = arr[:mid]
        right_half = arr[mid:]
        # sort the left side
        merge_sort(left_half)
        # sort the right side
        merge_sort(right_half)
        # merge the sorted left and right sides together
        merge_sort(left_half, right_half, arr)


# try and take merge function out and add same logic to merge_sort..
def merge(left_half, right_half, arr):
    i = 0
    j = 0
    k = 0

    while i < len(left_half) and j < len(right_half):
        if left_half[i] < right_half[j]:
            arr[k] = left_half[i]
            i = i + 1
        else:
            arr[k] = right_half[j]
            j = j + 1
        k = k + 1

    while j < len(left_half):
        arr[k] = left_half[i]
        i = i + 1
        k = k + 1

    while i < len(right_half):
        arr[k] = right_half[i]
        j = j + 1
        k = k + 1


arr = [8, 4, 23, 42, 16, 15]
merge_sort(merge(arr))
