package org.corgium.training;

import org.corgium.training.utils.ListNode;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

public class AddTwoNumbers {

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {        
        var result = new ListNode(0);
        var current = result;
        int carry = 0;
        while (l1 != null || l2 !=null || carry > 0){
            int x = 0; 
            if(l1 != null){
                x = l1.val;
                l1 = l1.next;
            }
            int y = 0; 
            if(l2 != null){
                y = l2.val;
                l2 = l2.next;
            }

            int total = x + y + carry;
            carry = total / 10;
            current.next = new ListNode(total % 10);
            current = current.next;        
        }
        return result.next;
    }

}
