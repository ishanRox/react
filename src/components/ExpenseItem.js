import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {

    //use jsx attributes not class but className
    return (<div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>);
}

export default ExpenseItem;