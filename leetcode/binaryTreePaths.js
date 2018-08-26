/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let result = [];
  findPath(root, '', result);
  console.log(result);
};

function findPath(node, path, result) {

  let curPath = path + node.val; 

  if (node.left){
    findPath(node.left, curPath, result);
  }
  if (node.right){
    findPath(node.right, curPath, result);
  }

  if(!node.left && !node.right){
    result.push(curPath.slice(0, -2));
    return;
  }
}