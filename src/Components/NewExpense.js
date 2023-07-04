import React, {useState} from "react";
import ExpenseForm from "./New Expense/ExpenseForm.js";
import './NewExpense.css';

function NewExpense(props){

    const AddExpenseHandler = (expense) =>{
        const expenseNew = {
            ...expense,
            id : Math.random().toString()
        }
        console.log(expenseNew);
        props.onAddExpense(expenseNew);

    };

    const [editExpense,setAddExpenseState] = useState(false);

    const onAddExpenseForm = () =>{
        setAddExpenseState(true);
    }

    const onCancelExpense = () =>{
        setAddExpenseState(false);
    }

    const onSubmitExpense = () =>{
        setAddExpenseState(false);
    }

    return(
        <div className="NewExpense">
            {!editExpense && <button onClick={onAddExpenseForm}>Add Expense</button>}
            {editExpense && <ExpenseForm onExpenseAdd = {AddExpenseHandler} onCancel = {onCancelExpense} onSubmit = {onSubmitExpense} />}
        </div>
    )
}

export default NewExpense;