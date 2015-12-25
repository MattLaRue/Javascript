var age = prompt("What is your age?");
// var leap = age/4;
// var days = (age * 365 + leap) + " days old";
// alert(age + " is roughly " + days)

if (age < 0)
{
	alert("Please enter a valid age");
}
if (age == 21)
{
	alert("Happy 21st Birthday");
}
if (Math.sqrt(age) % 2 == 1 || Math.sqrt(age) % 2 == 0)
{
	alert("Perfect square");
}
else {
	alert("Hi");
}
