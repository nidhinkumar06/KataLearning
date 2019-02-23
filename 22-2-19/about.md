Start Time: 23-2-19 6.30 P.M  End Time: 24-2-19 3.30 P.M

Problem:

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Example:

``` javascript
digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

```

Approches Done:

#### Approach 1:
 - First done by comparing the given number > 9 or not
 - If it is greater then goto Sum Function
 - In sum number first the number is converted to an array using
 ``` javascript 
   number.toString(10).split("")
   // which will convert the number 1234 to ["1", "2", "3", "4"]
   //to make the array of number it is done using map(Number) 
   number.toString(10).split("").map(Number)
   //which will conver the number 1234 to [1, 2, 3, 4]
```
- Then the array is summed using reduce function

``` javascript
  number.toString(10).split("").map(Number).reduce((x,y) => x + y)
  //output will be 1+2+3+4 => 10
```
- Then the value is checked with step 2 and it continues until the solution is reached

#### Problem with Approach 1:

It works well for the two digits number like 16 but when it moves to three digits it doesn't works as expected

#### Approach 2:

- Given number is minus with 1 and then result number is taken
- Then that number modulos value is taken and added with one


Kata Link:

https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript

Search Link:

https://stackoverflow.com/questions/9914216/how-do-i-separate-an-integer-into-separate-digits-in-an-array-in-javascript
https://www.quora.com/How-do-I-sum-the-numbers-in-my-array-in-JavaScript

https://stackoverflow.com/questions/38334652/sum-all-the-digits-of-a-number-javascript