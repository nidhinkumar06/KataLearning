Link: https://www.codewars.com/kata/breaking-chocolate-problem/train/javascript
Solution Link: https://www.codewars.com/kata/534ea96ebb17181947000ada/solutions/javascript

Problem:
=========

1. Your task is to split the chocolate bar of given dimension n x m into small squares. 
2. Each square is of size 1x1 and unbreakable. 
3. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, 
but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). 
Input will always be a non-negative integer.

Start Time: 21-2-19 6.30 P.M
End Time: 21-2-19 11.15 P.M (Thinking)
Coding Time: 1 mins

Things happened :
=================

1. Draw the image for a 2*2 size and figured about that (totalSize -1) would be the result
2. But tired with multiple sizes and the calculation gets wrong
3. Found what would be the maximum size of the bar
4. But get into the confusion of dividing the bar size with the min size and it becomes wrong (8.00 P.M)
5. Left the topic for 2.5 hours 
6. Randomly thought and found what ever the size it may be the no of breaks will be (totalsize - 1)


Best Practices:
================

```javascript
  var breakChocolate = function(n, m) {
    return (n*m === 0) ? 0 : n * m - 1;
  };

```