(function () {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  var countNodes = function(root) {
    let sum = 0;
    if(root && root.val) {
      sum += 1;
    }
    const countMe = (node) => {
      if(node === null) {
        return;
      }
      if(node.left) {
        sum += 1;
        countMe(node.left);
      }

      if(node.right) {
        sum += 1;
        countMe(node.right);
      }
    };
    countMe(root);

    return sum;

  };
})();
