import pytest
from hashtable.hashtable import HashTable


def hash_table(size):
    h_table = HashTable(size)
    h_table.add("Name", "Leonardo")
    h_table.add("Ninja", "true")
    h_table.add("Species", "turtle")
    return h_table


# Adding a key/value to your hashtable results in the value being in the data structure
def test_key_value():
    h_table = hash_table(5)
    assert h_table.contains("Name")


# Retrieving based on a key returns the value stored
def test_get_key():
    h_table = hash_table(5)
    assert h_table.get("Name") == "Leonardo"


# Successfully returns null for a key that does not exist in the hashtable
def test_key_returns_null_if_doesnt_exist():
    h_table = hash_table(5)
    assert h_table.get("Random") == None


# Successfully handle a collision within the hashtable
# Successfully retrieve a value from a bucket within the hashtable that has a collision
# Successfully hash a key to an in-range value
