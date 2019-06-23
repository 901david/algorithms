class Node():
  def __init__(self, val, left=None, right=None): 
    self.val = val;
    self.left = left;
    self.right = right;


  def addNode(self, val): 
    if not self.left: 
      self.left = Node(val)
    else: 
      self.right = Node(val)
    
  


   
 
 
def preorderTraversal(root):
        values = []
        nodes = [root]
        while nodes:
            node = nodes.pop()
            if node:
                values.append(node.val)
                nodes.append(node.right)
                nodes.append(node.left)
                
            
        
        return values
        
        
newTree = Node(1);
newTree.addNode(2);
newTree.addNode(3);
newTree.left.addNode(4);
newTree.left.addNode(5);

print(preorderTraversal(newTree));