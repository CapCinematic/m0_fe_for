// As you complete each challenge, RUN THE CODE to ensure it works. You can do this by
// running `node <filepath>`. If you are in this directory, you'd run `node for.js`.
  
// Challenge 1
// Use a for statement to log to the console all even numbers between 25 and 75.

for (var i = 25; i < 75; i++){
  if (i % 2 === 0){
    console.log(i)
  }
  
}
// Creating a for loop, declaring a varible of i which is valued between 25 and 75.  
// As we itterate through this for loop we are checking if a condition is met on line 8.
// This condition is saying is the number we're on is divisble by 2 with a remainder of 0
// If condition is met console.log the number.

// Challenge 2
// Use a for statement to log to the console a complete sentence stating the weather using the Array below:
var weather_options = ["sunny", "snowy", "freezing", "partly cloudy", "drizzly"]
for (var i = 0; i < weather_options.length; i++){
    console.log(`Today's weather is ${weather_options[i]}`)
}
// Created a loop that states the days weather, I used weather_options.lenght to cycle through the array and stop at the end of array.
// I used a console.log with back ticks and curly brackets to inform the code of what weather element to include.
// Challenge 3
// Use a for statement to log to the console only the words that are exactly 3 characters in length

var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]
for (var i = 0; i < words.length; i++){
  // var word = words[i]
  if (words[i].length === 3)  
    {console.log(words[i])}
}
// 📹 Record yourself live-coding and talking through any ONE of the challenges. 
  // The recording doesn't have to be the first time you are solving the problem. 
  // Use technical vocabulary and explain each part to demonstrate your understanding! 
  // Share the link to your video in your small group channel.

