'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getInComeExpense(): Promise<{
    error?: String;
    income?: Number;
    expense?: Number;
}> {
    const { userId } = auth();
    if (!userId) return { error: 'User not found' };

    try {
        const transactions = await db.transaction.findMany({
            where: { userId },
        });
        const income = transactions
            .filter((transaction) => transaction.amount > 0)
            .reduce((sum, transaction) => {
                return (sum += transaction.amount);
            }, 0);
        const expense = transactions
            .filter((transaction) => transaction.amount < 0)
            .reduce((sum, transaction) => {
                return (sum += transaction.amount);
            }, 0);
        return { income, expense: Math.abs(expense) };
    } catch (error) {
        return { error: 'Database error' };
    }
}

export default getInComeExpense;
