/**
 * @param {ListNode} head
 * @param {number} position
 * @return {ListNode}
 */
var removeNth = ( head , position) => {
    let ptr = head;
    let temp = head;

    for (let i = 0; i < n; i++) {
        ptr = ptr.next;
    }

    if (!ptr) return head.next;

    while (ptr.next) {
        ptr = ptr.next;
        temp = temp.next;
    }

    temp.next = temp.next.next;
    return head;
}