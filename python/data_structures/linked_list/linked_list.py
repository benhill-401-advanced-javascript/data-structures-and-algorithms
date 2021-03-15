class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def __str__(self):
        output = ""
        current = self.head
        while current is not None:
            output += f"{{ {current.value} }} -> "
            current = current.next
        return output + "NONE"

    def insert(self, value):
        node = Node(value)

        if self.head is not None:
            node.next = self.head
        self.head = node

    def includes(self, value):
        current = self.head

        while current is not None:
            if current.value == value:
                return True
            current = current.next
            return False

    def append(self, value):
        node = Node(value)

        if not self.head:
            self.head = node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = node
        # return node.next

    def insert_before(self, value, new_val):
        if not self.head:
            raise Exception("List is empty!")

        previous = None

        current = self.head
        while current:
            if current.value == value:
                node = Node(new_val)
                node.next = current
                if previous:
                    previous.next = node
                else:
                    self.head = node
            previous = current
            current = current.next
        return self.head

    def insert_after(self, value, new_val):
        current = self.head
        after = None
        while current.value:
            if current.value == value:
                node = Node(new_val)
                after = current.next
                current.next = node
                node.next = after
            return current
        current = current.next
        # return self.head

    def kth_number(self, k):
        current = self.head

        counter = 0
        while current is not None:
            current = current.next
            counter += 1

        if k > counter:
            print(f"{k} is not in Linked List!")
            return
        current = self.head
        for i in range(0, counter - k):
            current = current.next
        return current.value


if __name__ == "__main__":
    new_node = Node(1)
    new_ll = LinkedList()
    print(new_ll)

    LL = LinkedList(new_node)
#   link_list.insert(2)
#   link_list.insert(9)
#   link_list.insert(8)
#   link_list.append(3)
#   link_list.append(4)
#   link_list.append(5)
#   link_list.insert_before(8, 15)
#   print(link_list)
#   link_list.insert_before(4, 22)
#   print(link_list)
#   link_list.insert_before(5, 45)
#   print(link_list)
#   link_list.insert_after(2, 77)
#   print(link_list)
#   link_list.insert_after(5, 88)
#   print(link_list)
#   print(link_list.kth_number(4))
# print(link_list.includes(3))
# print(link_list.includes(4))
# print(new_ll1)
