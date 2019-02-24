Start Time: 9.30 P.M  End Time  24-2-19:  3.00 P.M

#### Problem:

Delete occurrences of an element if it occurs more than n times

Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

#### Example: 

```javascript
  deleteNth ([1,1,1,1],2) // return [1,1]

  deleteNth ([20,37,20,21],1) // return [20,37,21]

```
#### Solution Link:

https://www.codewars.com/kata/554ca54ffa7d91b236000023/solutions/javascript

#### Best Solution:

``` javascript
function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
}

```

## Approach:

#### Approach 1:

- First tried to sort the array using sort()
- Then using a for loop tried to loop each item and delete the duplicate item if the item exist already in the array
- But needed is based on the maximum occurance we need to delete rest of the element


#### Approach 2:

- Created a object
- Filter each array and compare whether the object exist already or not
- If exist already check the max occurances and if both conditions are true then exit the loop
- Else push the item to the array and increement the count with 1

Other Links:

https://www.w3schools.com/js/js_array_sort.asp
https://www.w3schools.com/jsref/jsref_includes_array.asp
https://stackoverflow.com/questions/18008025/remove-duplicate-item-from-array-javascript
https://www.codeproject.com/Questions/1117738/Delete-occurrence-of-an-element-is-it-occurs-more
