'use client';
import { Transaction } from '@/types/Transaction';
import { addCommas } from '@/lib/utils';
import { toast } from 'react-toastify';
import React from 'react';
import deleteTransaction from '@/actions/deleteTransaction';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
    const handlerDeleteTransaction = async (transactionId: string) => {
        const { message, error } = await deleteTransaction(transactionId);
        if (!error) return toast.success(message);
        toast.error(error);
    };
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text}
                <span>
                    {sign}$
                    {addCommas(Math.abs(Number(transaction.amount.toFixed(2))))}
                </span>
                <button
                    onClick={() => handlerDeleteTransaction(transaction.id)}
                    className="delete-btn"
                >
                    x
                </button>
            </li>
        </>
    );
};

export default TransactionItem;
