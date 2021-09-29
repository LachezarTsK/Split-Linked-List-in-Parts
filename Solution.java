
public class Solution {

    public ListNode[] splitListToParts(ListNode head, int numberOfPartitions) {

        if (head == null) {
            return new ListNode[numberOfPartitions];
        }

        ListNode[] listParts = new ListNode[numberOfPartitions];
        int totalNodes = countTotalNodes(head);

        int remainder = totalNodes % numberOfPartitions;
        int nodesPerPartWithoutRemainder = totalNodes / numberOfPartitions;

        ListNode current = head;
        ListNode previous = null;//a helper node to cut the links between two parts during the iteration.
        int index = 0;

        while (numberOfPartitions-- > 0) {

            int nodes = nodesPerPartWithoutRemainder + (remainder-- > 0 ? 1 : 0);
            listParts[index++] = current;

            while (current != null && nodes-- > 0) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
        return listParts;
    }

    public int countTotalNodes(ListNode head) {
        ListNode current = head;
        int counter = 0;
        while (current != null) {
            counter++;
            current = current.next;
        }
        return counter;
    }
}

class ListNode {

    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
