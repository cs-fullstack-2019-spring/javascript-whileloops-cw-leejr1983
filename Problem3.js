// CW3
// Asks the user Enter a word. Enter 'q' to quit. Create a while loop that will not quit until they enter 'q'.
// HINT: Use true condition so loop continues forever and break to exit the loop

var i = "q";
do{
	// KEY: This works, but explicitly declare your variables
    var n = prompt("Enter a word or enter 'q' to quit.");
}
while(i !== n);