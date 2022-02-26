import React from 'react';
import './ExpenseItem.css'
const ExpenseItem = () => {
    const expensedata = new Date (2021, 2, 28)
    const expensetitle = "Car Insurance"
    const expenseprice = 294067
    return (
        <div className='expense-item'>
            <div>
                <div>{expensedata.toISOString()}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{expensetitle}</h2>
                <div className='expense-item__price'>${expenseprice}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;