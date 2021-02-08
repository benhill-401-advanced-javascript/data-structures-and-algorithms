
def binary_search(input_Arr, key):
  low = 0
  high = len(input_Arr) - 1
  mid = (low + high) // 2
  while low <= high:
    if input_Arr[mid] == key:
      return mid
    elif key < input_Arr[mid]:
      high = mid - 1
    elif key > input_Arr[mid]:
      low = mid + 1
    # else:
    #   return -1
  return -1


if __name__ == "__main__":
  from textwrap import dedent

  print(dedent("""
  *******************************************
  ** Please enter a sorted list of numbers **
  *******************************************
  """))

  input_Arr = [int(index) for index in input().split()]

  print(dedent("""
  ***************************************************
  ** Input the key you'd like to find in that list **
  ***************************************************
  """))

  key = int(input())
  output = binary_search(input_Arr, key)
  if not output - 1:
    print(f"I found {output} in your list!")
  else:
    print('That number is not in your list, please try again')
