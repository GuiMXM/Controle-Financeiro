import { useEffect, useState } from 'react';

import * as C from './App.styles'
import './App.css';

import { Item } from './types/item';
import { categories } from './data/categories';
import { items } from './data/item';
import {getCurrentMonth, handleFilteredList, sortByDate } from './helpers/datefilter';
import { TableArea } from './components/TableArea';
import InfoArea from './components/InfoArea';
import InputArea from './components/InputArea';

function App() {


  const [list,setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  
  useEffect(() => {

    setFilteredList(sortByDate(handleFilteredList(list,currentMonth)) )
    
  }, [list,currentMonth])

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const addNewItem = (item:Item)=> {
    setList([...list, item])
  }

  return (
    <>
      <C.Container>
      <C.Header>
        <C.HeaderText>Controle Financeiro</C.HeaderText>
      </C.Header>
        
      <C.Body>
        <InfoArea
         currentMonth={currentMonth}
         onMonthChange={handleMonthChange} 
         income={income} expense={expense}
         />

        <InputArea onAdd={addNewItem} />

        <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
    </>
  );
}

export default App;
