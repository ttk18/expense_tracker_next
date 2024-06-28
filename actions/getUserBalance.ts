'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getUserBalance(): Promise<{
    error?: String;
    balance?: number;
}> {
    const { userId } = auth();
    if (!userId) return { error: 'User not found' };

    try {
        const transactions = await db.transaction.findMany({
            where: { userId },
        });
        const balance = transactions.reduce((sum, transaction) => {
            return (sum += transaction.amount);
        }, 0);
        return { balance };
    } catch (error) {
        return { error: 'Database error' };
    }
}

export default getUserBalance;
