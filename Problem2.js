// CW2
// Write a While loop that counts backwards from 10 to 0
// Log the current count at the end of each iteration
// EXCEPT if the current count is 5
// HINT: Use continue

var count = 11;
while(count >= 1) {
    count--;
    if (count === 5) {
        continue;
    }
    console.log("The current count is " + count);
}