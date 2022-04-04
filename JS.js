function change2(){
	document.getElementById('two').innerHTML="changed!";
}
function change3(){
	var select = document.getElementById('three')
	select.style.backgroundColor = 'lightblue';
	select.style.fontFamily = 'Arial';
	select.style.textAlign = 'center';
}
function change4(){
	var select = document.getElementById('four');
	var ftoc =-12*5/9
	document.getElementById('four').innerHTML = ftoc
}
function change5(){
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?')
	alert('nice to meet you' + firstName + lastName)
}
function sum(){
	var n1 = parseFloat(prompt('enter number 1'));
	var n2 = parseFloat(prompt('enter number 2'));
	alert(n1+n2);
}