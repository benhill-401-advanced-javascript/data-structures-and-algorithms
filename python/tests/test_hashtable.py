from hashtable.hashtable import HashTable


def test_instantiate():
    test_hash = HashTable(1)
    assert test_hash[1] == None


# Adding a key/value to your hashtable results in the value being in the data structure
def test_add_key_value():
    test_hash = HashTable(5)
    test_hash[1] = "one"
    expected = test_hash[1]
    actual = "one"
    assert expected == actual


# Retrieving based on a key returns the value stored
# Successfully returns null for a key that does not exist in the hashtable
# Successfully handle a collision within the hashtable
# Successfully retrieve a value from a bucket within the hashtable that has a collision
# Successfully hash a key to an in-range value
