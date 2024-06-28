import React from 'react';
import { Transaction } from '@/types/Transaction';
import getTransactionList from '@/actions/getTransactionList';

const TransactionList = async () => {
    const { transactions, error } = await getTransactionList();
    if (error) {
        return <p className="error">{error}</p>;
    }
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions &&
                    transactions.map((transaction: Transaction) => (
                        <p>{transaction.text}</p>
                    ))}
            </ul>
        </>
    );
};

export default TransactionList;
