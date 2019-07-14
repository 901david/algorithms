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
        return self


def isValidBST(node, min=None, max=None) -> bool:
    if node == None:
        return True
    if max != None and node.val >= max:
        return False
    if min != None and node.val <= min:
        return False

    if node.left != None and isValidBST(node.left, min, node.val) == False:
        return False
    if node.right != None and isValidBST(node.right, node.val, max) == False:
        return False

    return True


# Testing
#             Valid
#               20
#             /   \
#            10   22
#            / \   / \
#          8   12 21 24
#
#
#
#
#
#


left_node = Node(10).addNode(8).addNode(12)
right_node = Node(22).addNode(21).addNode(24)
bst = Node(20).addNode().addNode()

# print(isValidBST(bst))
