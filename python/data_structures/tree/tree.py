
class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class BinaryTree:
    def __init__(self, value):
        self.root = Node(value)
        self.count = 1

    def size(self):
        return self.count

    def pre_order(self):
        result = []

        def recursive_traverse(node):
            # capture root node value
            print(result.value)
            # if left child exists, go left
            if node.left:
                recursive_traverse(node.left)
            # if right child exists, go right
            if node.right:
                recursive_traverse(node.right)

        recursive_traverse(self.root)
        return result

    def in_order(self):
        result = []

        def recursive_traverse(node):
            # if left child exists, go left
            if node.left:
                recursive_traverse(node.left)
            # capture root node value
            print(node.value)
            # if right child exists, go right
            if node.right:
                recursive_traverse(node.right)

        recursive_traverse(self.root)
        return result

    def post_order(self):
        result = []

        def recursive_traverse(node):
            # if left child exists, go left
            if node.left:
                recursive_traverse(node.left)
            # if left child exists, go right
            if node.right:
                recursive_traverse(node.right)
            # capture root node value
            print(node.value)

        recursive_traverse(self.root)
        return result


class BST(BinaryTree):
    def __init__(self, value):
        self.root = Node(value)
        self.count = 1

    def add(self, value):
        self.count += 1
        new_node = Node(value)

        def search_tree(node):
            # if value < node.value, go left
            if value < node.value:
                # if no left child, append new node
                if not node.left:
                    node.left = new_node
                else:
                    # if left child, look left again
                    search_tree(node.left)
            # if value is less than node.value, go right
            elif value > node.value:
                # if no right child, append new node
                if not node.right:
                    node.right = new_node
                else:
                    # if right child, look right again
                    search_tree(node.right)

        search_tree(self.root)

    def contains(self, value):
        current_node = self.root

        while current_node:
            if value == current_node.value:
                return True
            if value < current_node.value:
                current_node = current_node.left
            else:
                current_node = current_node.right
        # if we look through entire tree and don't find a value
        return False


if __name__ == "__main__":
    tree = BinaryTree()

    tree.root = Node("ROOT")
    tree.root.left = Node("LEFT")
    tree.root.right = Node("RIGHT")

    # print(tree.root.value)
    # print(tree.root.left.value)
    # print(tree.root.right.value)
    print(tree.pre_order())
    print(tree.in_order())
