import React from 'react';
import getInComeExpense from '@/actions/getInComeExpense';
import { addCommas } from '@/lib/utils';
const InComeExpense = async () => {
    const { income, expense } = await getInComeExpense();
    console.log(income);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    ${addCommas(Number(income?.toFixed(2)))}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    -${addCommas(Number(expense?.toFixed(2)))}
                </p>
            </div>
        </div>
    );
};

export default InComeExpense;
