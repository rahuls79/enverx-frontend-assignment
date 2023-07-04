import './Expense.css'
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js'


function ExpenseItem(props) {


    // const [filteredYear,setFilteredYear] = useState('2020');

    // const changeYearHandler = (selectedYear) =>{
    //     setFilteredYear(selectedYear);
    // }


    return (
        <>
        <Card className="ExpenseItem">
            <ExpenseDate expdate = {props.expdate} />
            <div className="ExpenseDesc">
                <h2>{props.expname}</h2>
            </div>
            <div className="ExpensePrice">
                <p>Rs.{props.expamount}</p>
            </div>
        </Card></>
    )
  }

  export default ExpenseItem;