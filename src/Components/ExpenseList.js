import ExpenseItem from "./ExpenseItem";

function ExpenseList(props){

    let expenseContent = <p> No Expenses Found </p>;

    if (props.items.length > 0){
        expenseContent = (props.items.map( (expense) => (
            <ExpenseItem 
                expname={expense.expname} 
                expamount={expense.expamount} 
                expdate={expense.expdate}
                key={expense.id}
                />
            ))
        )
    }
    console.log(expenseContent)

    return(
        <div className="Expense_list">
            {expenseContent}
        </div>
    )
}

export default ExpenseList;