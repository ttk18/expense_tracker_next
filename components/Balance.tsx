import React from 'react';
import getUserBalance from '@/actions/getUserBalance';
import { addCommas } from '@/lib/utils';

async function Balance() {
    const { balance } = await getUserBalance();
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${addCommas(balance ?? 0)}</h1>
        </>
    );
}

export default Balance;
