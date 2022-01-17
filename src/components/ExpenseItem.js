import './ExpenseItem.css'

function ExpenseItem() {
//use jsx attributes not class but className
    return (<div className="expense-item">
        <h1>
            March 28
        </h1>
        <div className="expense-item__description">
            <h2>Car insuarance</h2>
            <div className="expense-item__price">298</div>
        </div>
    </div>);
}

export default ExpenseItem;