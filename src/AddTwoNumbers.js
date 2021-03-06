// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
//     You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//     Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 第一次的思路为转换成数字然后进行相加 然后再重新转回来
// 遇见例子：
// 输入：
// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]
// 输出：
// [0,3,NaN,NaN,1]
// 预期：
// [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// 造成失败，发现对题目的思考出现偏差
//
// var addTwoNumbers = function(l1, l2) {
//     var a = ala(l1);
//     var b = ala(l2);
//     var re = (parseInt(a)+parseInt(b)).toString().split("");
//     re = re.reverse();
//     for(var i =0;i<re.length;i++){
//         re[i]=parseInt(re[i]);
//     }
//     return re;
//
// };
//
// function ala(l) {
//     var re = "";
//     var temp = l;
//     while(temp){
//         re+= temp.val;
//         temp = temp.next;
//     }
//     re = re.split("").reverse();
//     var dx='';
//     for(var i =0;i<re.length;i++){
//         dx+=re[i];
//     }
//     return dx;
// }


// 忘记考虑直接进位的问题
// 输入：
// [5]
// [5]
// 输出：
// [0]
// 预期：
// [0,1]

// 未考虑只有但单链表时大于9的操作,然后有重复加入数组的情况
// 输入：
// [1]
//     [9,9]
// 输出：
// [0,10]
// 预期：
// [0,0,1]

var addTwoNumbers = function(l1, l2) {
    var temp1 = l1;
    var temp2 = l2;
    var result =[];

    while(temp1||temp2){
        if(temp1&&temp2){
            var sum;
            if((temp1.val+temp2.val)>9)
                sum = temp1.val+temp2.val-10;
            else sum = temp1.val+temp2.val;
            result.push(sum);

            if((temp1.val+temp2.val)>9){
                if(temp1.next)
                    temp1.next.val++;
                else if(temp2.next)
                    temp2.next.val++;
                else {
                    result.push(1);
                }
            }
            temp1 = temp1.next;
            temp2 = temp2.next;
        }else if(temp1){
            if(temp1.val>9){
                result.push(temp1.val-10);
                if(temp1.next)
                    temp1.next.val++;
                else result.push(1);
            }else {
                result.push(temp1.val);
            }
            temp1 = temp1.next;
        }else if(temp2){
            if(temp2.val>9){
                result.push(temp2.val-10);
                if(temp2.next)
                    temp2.next.val++;
                else result.push(1);
            }else {
                result.push(temp2.val);
            }
            temp2 = temp2.next;
        }
    }
    return result;
};

