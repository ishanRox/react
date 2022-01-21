
import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    };
    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);
    };
    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(enteredDate);
    };

    return <form>
        <div className="new-expense__controls">
            {enteredTitle}
            <div className="new-expense__control">
                <label>
                    Title
                </label>
                <input type='text' onChange={titleHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>
                    Amount
                </label>
                <input  type='number' min='0.01' step='0.01' onChange={amountHandler} />
            </div>
            <div className="new-expense__control">
                <label>
                    Date
                </label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateHandler}/>
            </div>
            <div className="new-expnse__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>;
}

export default ExpenseForm;