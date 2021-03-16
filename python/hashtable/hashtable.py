from hashtable.linked_list import LinkedList

# from linked_list import LinkedList


class HashTable:
    def __init__(self, size):
        self.size = size
        self.table = [None] * self.size

    def value(self, LL, key, value=None):
        """[Adds the key/value to the hash table. If key already exists, update the value. When value is not given, return the value matching the key, or None]"""

        if value:
            current = LL.head
            while current is not None:
                if current.value[0] == key:
                    current.value[1] = value
                    return
                current = current.next
            LL.append([key, value])
        else:
            if not LL:
                return None
            else:
                current = LL.head
                while current is not None:
                    if current.value[0] == key:
                        return current.value[1]
                    current = current.next
                return None

    def add(self, key, value):
        """[Hashes the key, adds the key/value pair to table. If key already exists, update the value. If multiple keys using the same hashed key, resolve collisions]"""
        hash_key = self.hash(str(key))
        if not self.table[hash_key]:
            self.table[hash_key] = LinkedList()

        self.value(self.table[hash_key], str(key), value)

    def contains(self, key):
        """[Checks whether a key is contained in the hash table]"""
        hashed_key = self.hash(str(key))
        if not self.table[hashed_key]:
            return False
        else:
            check = self.value(self.table[hashed_key], str(key))
            if check:
                return True
            return False

    def hash(self, key):
        """[Hashes the key]"""
        sum = 0

        for char in key:
            sum += ord(char)

        primed = sum * 19
        index = primed % self.size
        return index

    def get(self, key):
        hashed_key = self.hash(str(key))
        if self.table[hashed_key]:
            return self.value(self.table[hashed_key], str(key))
        return None


# if __name__ == "__main__":
#     h_table = HashTable(5)

#     h_table.add("Name", "Leonardo")
#     h_table.add("Ninja", "true")
#     h_table.add("Species", "turtle")
#     print(h_table.get("Name"))
