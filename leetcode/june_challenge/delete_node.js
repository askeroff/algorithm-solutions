(function () {
  const deleteNode = function (node) {
    let newNode = node;
    const updateNode = function (myNode) {
      let next = myNode.next;
      newNode = next;
      if (newNode === null) {
        return;
      }
      myNode.val = next.val;
      myNode.next = JSON.parse(JSON.stringify(next.next));
    };
    while (newNode !== null) {
      updateNode(newNode);
    }
  };

  const obj4 = {
    val: 3,
    next: null
  };


  const obj3 = {
    val: 1,
    next: obj4
  };

  const obj2 = {
    val: 0,
    next: obj3
  };

  const obj1 = {
    val: 2,
    next: obj2
  };


  deleteNode(obj1);

})();
