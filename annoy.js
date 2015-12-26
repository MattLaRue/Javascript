var response = prompt("Are we there yet"); 

while (response.indexOf("yes") > 0 || response.indexOf("yeah") > 0)
{ 
	var response = prompt("Are we there yet"); 
} 

alert("YAY, we made it!")