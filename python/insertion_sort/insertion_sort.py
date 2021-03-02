def insertion_sort(arr):

    # For every index in array
    for i in range(1, len(arr)):

        # Set current values and position
        currentvalue = arr[i]
        position = i

        # Sorted Sublist
        while position > 0 and arr[position - 1] > currentvalue:

            arr[position] = arr[position - 1]
            position = position - 1

        arr[position] = currentvalue


input_arr = [8, 4, 23, 42, 16, 15]
insertion_sort(input_arr)
print(f"Random input of [8, 4, 23, 42, 16, 15]. Sorted output -> {input_arr}")

reverse_sorted = [20, 18, 12, 8, 5, -2]
insertion_sort(reverse_sorted)
print(
    f"Sorted in reverse from input [20,18,12,8,5,-2]. Sorted output -> {reverse_sorted}"
)

nearly_sorted = [5, 12, 7, 5, 5, 7]
insertion_sort(nearly_sorted)
print(f"Nearly sorted from input [5,12,7,5,5,7]. Sorted output -> {nearly_sorted}")