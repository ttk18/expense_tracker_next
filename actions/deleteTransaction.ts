'use server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

async function deleteTransaction(id: string): Promise<{
    message?: String;
    error?: String;
}> {
    const { userId } = auth();
    if (!userId) return { error: 'User not found' };

    try {
        const deleteTransaction = await db.transaction.delete({
            where: {
                id,
                userId,
            },
        });
        revalidatePath('page');

        return { message: 'Transaction delete successfully' };
    } catch (error) {
        return { error: 'Transaction delete error' };
    }
}

export default deleteTransaction;
