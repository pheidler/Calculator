var operand1 = ''
var operand2 = ''
var operator = null;
var overwrite = false;

function handleInput(input, type){
	if(type === 'num'){
		handleNum(input);
	}else if(type === 'operator'){
		operator = input;
		overwrite = false;
		operand2 = '';
	}else if(type === 'other'){
		handleOther(input);
	}
	return;
}

function handleNum(input){
	//Cases: 

	//Inputting first number
	if(operator === null && overwrite === false){
		operand1+=input.toString();
		document.getElementById('screen').innerHTML = operand1;

	//Inputting number after operation has been performed
	}else if(overwrite === true){
		reset();
		operand1 = input;
		document.getElementById('screen').innerHTML = operand1;
	//Inputting second number
	}else{
		operand2+=input.toString();
		document.getElementById('screen').innerHTML = operand2;
	}
	return;
}

function handleOther(input){
	if(input === 'RESET'){
		reset();
		document.getElementById('screen').innerHTML = 0;

	}
	else if(input === '=' && equalsCondition() === true){
		operand1 = parseFloat(operand1, 10);
		operand2 = parseFloat(operand2, 10);
		switch(operator){
			case('+'):
				sum();
				break;
			case('-'):
				sub();
				break;
			case('x'):
				mult();
				break;
			case('/'):
				div();
				break;
			default: 
				break;
		}
		overwrite = true;

	}else{
		console.log('you fucked up');
	}
	return;
}

function equalsCondition(){
	if(isNaN(operand1) || isNaN(operand2) || operator === null){
		return false;
	}else{
		return true;
	}
}

function sum(){
	var result = operand1 + operand2;
	document.getElementById('screen').innerHTML = result;
	operand1 = result;
	return;
}
function sub(){
	var result = operand1 - operand2;
	document.getElementById('screen').innerHTML = result;
	operand1 = result;
	return;
}

function mult(){
	var result = operand1 * operand2;
	document.getElementById('screen').innerHTML = result;
	operand1 = result;
	return;
}
function div(){
	var result = operand1 / operand2;
	document.getElementById('screen').innerHTML = result;
	operand1 = result;
	return;
}
function reset(){
	operand1 = '';
	operand2 = '';
	operator = null;
	overwrite = false;
}