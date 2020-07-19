(function () {
  const removeNthFromEnd = function (head, n) {
    const map = {};

    let node = head;
    let index = 0;
    while (node !== null) {
      map[index] = node;
      index++;
      node = node.next;
    }
    // let itemWeNeed = Object.keys(map).length - n;
    let itemBefore = Object.keys(map).length - n - 1;
    let itemAfter = Object.keys(map).length - n + 1;
    if (itemAfter < Object.keys(map).length && map[itemBefore]) {
      map[itemBefore].next = map[itemAfter];
    } else if (map[itemBefore]) {
      map[itemBefore].next = null;
    } else if(map[itemAfter]) {
      head = map[itemAfter];
    } else {
      head = null;
    }
    return head;
  };
  const node = {
    val: 1,
    next: {val: 2, next: null}
  };

  removeNthFromEnd(node, 2);
})();
