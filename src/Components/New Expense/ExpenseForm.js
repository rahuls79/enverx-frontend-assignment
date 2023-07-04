import React from 'react';
import './ExpenseForm.css'
import {useState} from 'react';

function ExpenseForm(props) {

    const [enteredtitle,updatedTitle] = useState('');
    const [enteredDate,updatedDate] = useState('');
    const [enteredPrice,updatedPrice] = useState('');

    function ExpFormNameHandler(event){
        updatedTitle(event.target.value)
        console.log(event.target.value);
    }

    function ExpFormDateHandler(event){
        updatedDate((event.target.value))
        console.log(event.target.value);
    }

    function ExpFormPriceHandler(event){
        updatedPrice(event.target.value)
        console.log(event.target.value);
    }
    
    function formSubmitHandler(event){
        event.preventDefault();

        const newExpenseData = {
            expname : enteredtitle,
            expdate: new Date(enteredDate),
            expamount : enteredPrice
        };
        
        props.onExpenseAdd(newExpenseData);
        props.onSubmit(false);

        updatedDate("");
        updatedPrice("");
        updatedTitle(""); 
    }

    function onCancel(){
        props.onCancel(false);
    }
    

    return(
        <form onSubmit={formSubmitHandler}>
        <div className='ExpForm'>
        <div className='ExpForm-control'>
            <label>Expense Title </label>
            <input onChange={ExpFormNameHandler} value={enteredtitle}></input>
        </div>
        
        <div className='ExpForm-control'>
            <label>Expense Date </label>
            <input type="date" onChange={ExpFormDateHandler} value={enteredDate}></input>
        </div>
        <div className='ExpForm-control'>
            <label>Expense Price </label>
            <input onChange={ExpFormPriceHandler} type="number" value={enteredPrice}></input>
        </div>
        
        <button className="ExpForm-submit" >Add Expense</button>
        <button className='Cancel' onClick={onCancel}>Cancel</button>
        </div>
        </form>
    )
}

export default ExpenseForm;