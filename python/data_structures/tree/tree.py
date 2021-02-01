
class Node:
    def __init__(self, value=None, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class BinaryTree:
    def __init__(self, root=None):
        self.root = root

    def pre_order(self):

        def traverse(root):
            print(root.value)
            if root.left:
                traverse(root.left)
            if root.right:
                traverse(root.right)
        traverse(self.root)

    def in_order(self):
        def traverse(root):
            if root.left:
                traverse(root.left)
            print(root.value)
            if root.right:
                traverse(root.right)
        traverse(self.root)

    def post_order(self):
        def traverse(root):
            if root.left:
                traverse(root.left)
            if root.right:
                traverse(root.right)
            print(root.value)
        traverse(self.root)


class BST:
    def __init__(self) -> None:
        pass

    def add(self):
        pass

    def contains(self):
        pass


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
