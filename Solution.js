
/**
 * @param {ListNode} head
 * @param {number} numberOfPartitions
 * @return {ListNode[]}
 */
var splitListToParts = function (head, numberOfPartitions) {
    if (head === null) {
        return fillArrayWithNullValues(numberOfPartitions);
    }
    const listParts = [];
    let totalNodes = countTotalNodes(head);

    let remainder = totalNodes % numberOfPartitions;
    let nodesPerPartWithoutRemainder = Math.floor(totalNodes / numberOfPartitions);

    let current = head;
    let previous = null;//a helper node to cut the links between two parts during the iteration.
    let index = 0;

    while (numberOfPartitions-- > 0) {

        let nodes = nodesPerPartWithoutRemainder + (remainder-- > 0 ? 1 : 0);
        listParts[index++] = current;

        while (current !== null && nodes-- > 0) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }
    return listParts;
};

/**
 * @param {ListNode} head
 * @return {number} total nodes in the linked list
 */
function countTotalNodes(head) {
    let current = head;
    let counter = 0;
    while (current !== null) {
        counter++;
        current = current.next;
    }
    return counter;
}

function fillArrayWithNullValues(numberOfPartitions) {
    const listParts = [];
    for (let i = 0; i < numberOfPartitions; i++) {
        listParts[i] = null;
    }
    return listParts;
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
