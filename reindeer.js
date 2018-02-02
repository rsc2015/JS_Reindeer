/* Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of t
he reindeer should be prepended with the corresponding color from the other array.

Example output:

Blue Dasher

Red Dancer*/



var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];


var hohohoElement = document.getElementById("reindeer");

for ( i = 0; i < reindeer.length; i ++) {
    
    var currentColor = colors[i];
    var currentReindeer = reindeer[i];

    hohohoElement.innerHTML += currentColor + (" ") + currentReindeer + ("<br>");
    
}


