import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server';
import AddTransaction from '@/components/AddTransaction';
import Balance from '@/components/Balance';
import InComeExpense from '@/components/InComeExpense';
import TransactionList from '@/components/TransactionList';

const HomePage = async () => {
    const user = await currentUser();
    if (!user) return <Guest />;
    return (
        <main>
            <h2> Welcome, {user.firstName}</h2>
            <Balance />
            <InComeExpense />
            <TransactionList />
            <AddTransaction />
        </main>
    );
};

export default HomePage;
