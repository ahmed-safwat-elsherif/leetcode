function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let remaining = 0;
    let result = new ListNode(0);

    let currNode = result;
    let currentL1 = l1;
    let currentL2 = l2;
    while (currentL1 || currentL2) {
        const l1Num = currentL1?.val ?? 0;
        const l2Num = currentL2?.val ?? 0;

        const sum = remaining + l1Num + l2Num;

        const firstDigit = sum % 10;

        remaining = (sum - (firstDigit)) / 10;

        currNode.val = firstDigit;

        currentL1 = currentL1?.next;
        currentL2 = currentL2?.next;
        if (currentL1 || currentL2) {
            currNode.next = new ListNode(0);
            currNode = currNode.next;
        }
    }

    let lastRemDigit = remaining % 10
    while (remaining !== (lastRemDigit)) {
        lastRemDigit = remaining % 10;

        currNode.next = new ListNode(lastRemDigit);
        currNode = currNode.next;

        remaining = (remaining - (lastRemDigit)) / 10;
    }

    if (remaining !== 0) currNode.next = new ListNode(remaining);

    return result;
};

/**
 * 
 * @param {number[]} arr 
 */
const arrToList = (arr) => {
    const startNode = new ListNode();
    let lastNode = startNode;
    arr.forEach((num) => {
        const currNode = new ListNode(num);
        lastNode.next = currNode;
        lastNode = currNode;
    });

    return startNode.next;
}

/**
 * 
 * @param {ListNode} node 
 */
const listToArr = (node) => {
    const result = [];

    while (node) {
        result.push(node.val);
        node = node.next;
    }

    return result
}



// const output = addTwoNumbers(
//     arrToList([2, 4, 3, 9]),
//     arrToList([5, 6, 8, 9])
// )

const output = addTwoNumbers(
    arrToList([2, 4, 3]),
    arrToList([5, 6, 4])
)

console.log(listToArr(output));
