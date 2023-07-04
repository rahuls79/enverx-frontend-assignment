import './App.css';
import NewExpense from './Components/NewExpense.js';
// import ExpenseFilter from './Components/ExpenseFilter.js';
// // import ExpenseItem from './Components/ExpenseItem.js';
import { useState } from 'react';
import Expense from './Components/Expense';

const items = [{
  expname: "Rent",
  expamount: "50",
  expdate: new Date(2020, 1, 1),
  id : '201'
},
{
  expname: "Gas",
  expamount: "20",
  expdate: new Date(2022, 1, 7),
  id : '202'
} ]


function App() {


  const [expenses,setExpenses] = useState(items);
  
  

  const AddingExpenseHandler = (expense) => {
    setExpenses ((newExpense) =>
    {
      console.log(expense);
      return [expense, ...newExpense];
      
    });
  }


  return (
    <div className="Expenses">
      <NewExpense onAddExpense={AddingExpenseHandler} />
      {/* <ExpenseFilter /> */}
      <Expense items={expenses} />
      {/* <ExpenseItem
        expname={items[0].expname}
        expamount={items[0].expamount}
        expdate={items[0].expdate}>
      </ExpenseItem>
      <ExpenseItem
        expname={items[1].expname}
        expamount={items[1].expamount}
        expdate={items[1].expdate}>
      </ExpenseItem> */}
    </div>
  )
};

export default App;
