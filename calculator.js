var operand1 = ''
var operand2 = ''
var operator = null;

function handleInput(input, type){
	if(type == 'num'){
		handleNum(input);
	}else if(type == 'operator'){
		operator = input;
	}else if(type == 'other'){
		handleOther(input);
	}
	return;
}

function handleNum(input){
	//Cases: 
	if(operator == null){
		operand1+=input.toString();
		document.getElementById('screen').innerHTML = operand1;
	}else{
		operand2+=input.toString();
		document.getElementById('screen').innerHTML = operand2;
	}
	return;
}

function handleOther(input){
	if(input == '=' && equalsCondition() == true){
		operand1 = parseInt(operand1, 10);
		operand2 = parseInt(operand2, 10);
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
	}else{
		console.log('wrong input');
	}
	return;
}

function equalsCondition(){
	if(operand1 == '' || operand2 == '' || operator == null){
		return false;
	}else{
		return true;
	}
}

function sum(){
	document.getElementById('screen').innerHTML = operand1 + operand2;
	operand1 = '';
	operand2 = '';
	operator = null;
	return;
}
function sub(){
	document.getElementById('screen').innerHTML = operand1 - operand2;
	operand1 = '';
	operand2 = '';
	operator = null;
	return;
}

function mult(){
	document.getElementById('screen').innerHTML = operand1 * operand2;
	operand1 = '';
	operand2 = '';
	operator = null;	
	return;
}
function div(){
	document.getElementById('screen').innerHTML = operand1 / operand2;
	operand1 = '';
	operand2 = '';
	operator = null;	
	return;
}