class Node():
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def addNode(self, val):
        if not self.left:
            self.left = Node(val)
        else:
            self.right = Node(val)


def inorderTraversal(root):
    results = []
    stack = []
    curr = root

    while len(stack) > 0 or curr != None:
        if curr != None:
            stack.append(curr)
            curr = curr.left
        else:
            curr = stack.pop()
            results.append(curr.val)

            curr = curr.right
    return results


newTree = Node(1)
newTree.addNode(2)
newTree.addNode(3)
newTree.left.addNode(4)
newTree.left.addNode(5)

print(inorderTraversal(newTree))
