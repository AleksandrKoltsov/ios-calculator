export const minusChange = (arr, val) => { //функция по добавлению и удалению минуса
    if(!val){
        const changed = ['-'];
        return changed.concat(arr);
    }else {
        return arr.slice(1);
    }
}
export const memorySet = (mem, inc, val) => { //функция инкремента и декремента числа в памяти
    if(val){
        return mem + inc;
    } else {
        return mem - inc;
    }
}

export const math = (str, rate = false) => { // парсер математического уравнения из строки и его расчет
    const reg = /[+\-\\*/]/g;
    const val = str.match(reg); //получаю массив операторов
    const arr = str.split(reg); // получаю массив операндов
    let result = [];

    while(Math.min(arr.length, val.length)){ //склеиваю массивы операторов и операндов последовательно каждое значение
        result = result.concat(arr.splice(0,1), val.splice(0,1));
    }

    arr.length ? result = result.concat(arr) : result = result.concat(val);
    console.log('start: ' + result);

    //расчет процента
    let arrPercent = [];
    if(rate){ //
        arrPercent = result.splice(-2, 2);
        console.log('percent ' + arrPercent);
    }
    console.log('cut percent: ' + result)

    let mathResult = 0; // хранение промежуточного результата

    const calc = (result, sign) => { // промежуточная калькуляция уравнения
        const calcArr = result;
        const val = calcArr.indexOf(sign);
        const tempArr = calcArr.slice(val-1, val+2);
        switch(sign) {
            case '*':
               mathResult = Number(tempArr[0]) * Number(tempArr[2]);
               break;
            case '/':
                mathResult = Number(tempArr[0]) / Number(tempArr[2]);
                break;
            case '+':
                mathResult = Number(tempArr[0]) + Number(tempArr[2]);
                break;
            case '-':
                mathResult = Number(tempArr[0]) - Number(tempArr[2]);
                break;
            default:
                break;
        }
        calcArr.splice(val-1, 3, mathResult);
        return calcArr;
    }
    //поиск в массиве повторных операторов
    while(result.includes('*')) {
        calc(result, '*');
    }
    while(result.includes('/')) {
        calc(result, '/');
    }
    while(result.includes('+')) {
        calc(result, '+');
    }
    while(result.includes('-')) {
        calc(result, '-');
    }
    console.log(result);
    if(!rate) {
        return result;
    } else {
        let a = Number(result[0]);
        let b = Number(arrPercent[1]);
        switch(arrPercent[0]){
            case '*':
                return mathResult = (a/100) * b;
            case '/':
                return mathResult = (a*100) / b;
            case '+':
                return mathResult = (( a / 100 ) * b ) + a;
            case '-':
                return mathResult = a - (( a / 100 ) * b );
            default:
                break;
        }
    }
}
