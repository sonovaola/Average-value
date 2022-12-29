const a = prompt("Введите первое число: ");

const b = prompt("Введите второе число: ");

const c = prompt("Введите третье число: ");
const sum = Number (a) + Number(b) + Number(c);
switch (true) {
	case ((a === '') && (b ==='') && (c === '')):
		alert ('Ошибка: Вы ничего не ввели ни в одно значение')
		break;
	case ((a === '') && (b ==='')):
		alert ('Ошибка: Вы ничего не ввели в значения а и b')
		break;
	case ((a === '') && (c === '')):
		alert ('Ошибка: Вы ничего не ввели в значения а и c')
		break;
	case ((b === '') && (c ==='')):
		alert ('Вы ничего не ввели в значения b и c')
		break;
	case (a === ''):
		alert ('Ошибка: Вы ничего не ввели в а')
		break;
	case (b ===''):
		alert ('Ошибка: Вы ничего не ввели в b')
		break;
	case (c === ''):
		alert ('Ошибка: Вы ничего не ввели в c')
		break;

	case ((a === null) && (b === null) && (c === null)):
		alert ('Ошибка: Вы отменили ввод во все значения :(')
		break;
	case ((a === null) && (b === null)):
		alert ('Ошибка: Вы отменили ввод значений a и b :(')
		break;
	case ((a === null) && (с === null)):
		alert ('Ошибка: Вы отменили ввод значений а и c :(')
		break;
	case ((b === null) && (с === null)):
		alert ('Ошибка: Вы отменили ввод значений а и c :(')
		break;
	case (a === null ):
		alert ('Ошибка: Вы отменили ввод а :(')
		break;
	case (b === null):
		alert ('Ошибка: Вы отменили ввод b :(')
		break;
	case (c === null):
		alert ('Ошибка: Вы отменили ввод c :(')
		break;
	
	
	case (isNaN(parseFloat(a)) && isNaN(parseFloat(b)) && isNaN(parseFloat(c))):
		alert ('Ошибка: все введенные Вами значения не являются числом')
		break;
	case (isNaN(parseFloat(a)) && isNaN(parseFloat(b))):
		alert ('Ошибка: значения а и b не являются числом')
		break;
	case (isNaN(parseFloat(a)) && isNaN(parseFloat(b))):
		alert ('Ошибка: значения а и с не являются числом')
		break;
	case (isNaN(parseFloat(b)) && isNaN(parseFloat(c))):
		alert ('Ошибка: значения b и c не являются числом')
		break;
	case isNaN(parseFloat(a)):
		alert ('Ошибка: а не являются числом')
		break;
	case isNaN(parseFloat(b)):
		alert ('Ошибка: b не являются числом')
		break;
	case isNaN(parseFloat(c)):
		alert ('Ошибка: c не являются числом')
		break;
	case (!(isNaN(parseFloat(a)) && isNaN(parseFloat(b)) && isNaN(parseFloat(c)))):
	case (!((a === null) && (b === null) && (c === null))) :
	case (!(a === '') && !(b ==='') && !(c === '')) :
			alert ("Среднее арифметическое ваших трех чисел: " + (Number (a) + Number(b) + Number(c)) / 3);
	}
			
	

