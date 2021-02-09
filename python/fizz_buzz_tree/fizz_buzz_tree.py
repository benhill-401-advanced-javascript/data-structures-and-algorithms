from data_structures.tree.tree import *


def kary_fizz_buzz_tree():
    cache = tree.breadth_first()
    output = BST

    for i in cache:
        if i % 15 == 0:
            output.add('FizzBuzz')
        elif i % 3 == 0:
            output.add('Fizz')
        elif i % 5 == 0:
            output.add('Buzz')
        else:
            output.add(str(i))
    return output


if __name__ == "__main__":
    new_tree = BST()
    new_tree.add(11)
    new_tree.add(9)
    new_tree.add(6)
    new_tree.add(3)
    new_tree.add(5)
    new_tree.add(11)
    new_tree.add(121)

    print(kary_fizz_buzz_tree(new_tree))
