import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Output} from "./Components/Output/Output";
import {Button} from "./Components/Button/Button";
import {
  getChar,
  setOut,
  clearData,
  setMinus,
  changeSetMinus,
  memChange,
  clearScreen,
  result,
  memClear
} from "./Redux/Actions";
import {
  memorySet,
  minusChange,
  math
} from "./api/Api";
import './App.css';

function App() {
  const dispatch = useDispatch()
  const buttons = useSelector(state => state.data.buttons) //массив кнопок
  const charset = useSelector(state => state.data.out) //строка вывода
  const arrChar = useSelector(state => state.data.pit) //массив всех введенных значений
  const minusStat = useSelector(state => state.data.setMinus) //состояние флага минус
  const resultState = useSelector(state => state.memory.result) //результат
  const memGet = useSelector(state => state.memory.memory) //состояние памяти

  dispatch(setOut(arrChar.join(''))); // преобразую массив в строку и записываю в СТОР (OUT) для вывода результата

  const handleClick = char => { //принимаю символы с клавиатуры калькулятора
    switch(char) {
      case 'AC':
        return dispatch(clearData()) //  обнуляю калькулятор (возвращаю начальный СТОР)
      case '+/-':
        if(!minusStat){ //добавляю минус в начало строки либо его удаляю если он есть
          dispatch(changeSetMinus(!minusStat))
          return dispatch(setMinus(minusChange(arrChar, minusStat)));
        }else {
          dispatch(changeSetMinus(!minusStat))
          return dispatch(setMinus(minusChange(arrChar, minusStat)));
        }
      case '=': // произвожу вычисления по нажатию кнопки
        dispatch(clearScreen());
        return dispatch(getChar(math(charset)));
      case 'm+': // сохраняет значение, при повторном нажатии добавляет к нему текущее значение
        dispatch(result(math(charset)));
        return dispatch(memChange(memorySet(resultState, math(charset), true)));
      case 'm-': // отнимает от сохраненного значения
        return dispatch(memChange(memorySet(resultState, math(charset), false)));
      case 'mr': // выводит результат на экран
        dispatch(clearScreen());
        return dispatch(getChar(memGet));
      case 'mc': // очищает память
        dispatch(clearScreen());
        return dispatch(memClear())
      case '%': // считает процент от введенного уравнения
        dispatch(clearScreen());
        return dispatch(getChar(math(charset, true)))
      default:
        return dispatch(getChar(char)); //записываю в массив в СТОР (PIT)
    }

  }
  //генерирую кнопки клавиатуры динамически и передаю каждой кнопке значения и колбэк
  return (
    <div className="container">
      <Output data={charset}/>
      {buttons.map(item => <Button key={item.id} data={item} getChar={handleClick}/>)}
    </div>
  );
}

export default App;
