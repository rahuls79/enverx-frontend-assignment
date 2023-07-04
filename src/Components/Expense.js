
import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList.js';
import ExpensesChart from './ExpenseChart';
import './Expense.css';

// const items = [{    expname: "Rent", 
//                     expamount: "10000", 
//                     expdate: "1 January 2021"
//                 },
//                 {
//                     expname : "Gas", 
//                     expamount : "500", 
//                     expdate : "7 January 2021"
//                 }]

const Expense = (props) => {

    const [filteredYear,setFilteredYear] = useState('2020');

    const changeYearHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }

    const result = props.items.filter((expense) =>{
        return (expense.expdate.getFullYear().toString() === filteredYear);
    })

    // let expenseContent = <p> No Expenses Found </p>;

    // if (result.length > 0){
    //     expenseContent = (result.map( (expense) => (
    //         <ExpenseItem 
    //             expname={expense.expname} 
    //             expamount={expense.expamount} 
    //             expdate={expense.expdate}
    //             key={expense.id}
    //             />
    //         ))
    //     )
    // }


    return(
        <div>
            <ExpenseFilter selected = {filteredYear} onChangeYear = {changeYearHandler}/>
            <ExpensesChart expenses={result} />
            <ExpenseList items = {result } />
      </div>
    )
}

export default Expense;