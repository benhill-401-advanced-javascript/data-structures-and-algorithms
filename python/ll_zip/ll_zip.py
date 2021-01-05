# import data_structures.linked_list.linked_list

# from data_structures.linked_list.linked_list import Node, LinkedList
from data_structures.linked_list.linked_list import Node, LinkedList


def merge_lists(ll_1, ll_2):
  ll_1_current = ll_1.head
  ll_2_current = ll_2.head

  temp_1 = ll_1_current.next
  temp_2 = ll_2_current.next

  while ll_1_current is not None and ll_2_current is not None:
    if temp_1 is None and temp_2 is not None:
      ll_1_current.next = ll_2_current
      ll_2_current.next = temp_2
    else:
      ll_1_current.next = ll_2_current
      ll_2_current.next = temp_1

    ll_1_current = temp_1
    ll_2_current = temp_2

    if temp_1 is not None and temp_2 is not None:
      temp_1 = temp_1.next
      temp_2 = temp_2.next
    
  return ll_1


if __name__ == "__main__":
    list1 = [1, 3, 4]

    list2 = [
      [5,9,4], 
      [5, 9]
    ]

    link_list_1 = LinkedList()
    link_list_2 = LinkedList()

    link_list_1.insert(list1)

    link_list_2.insert(list2[1])

    merge = merge_lists(link_list_1, link_list_2)
    print(merge)

