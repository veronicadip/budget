import { useEffect, useState, type KeyboardEvent } from "react";

export const Home: React.FC = () => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);

    const handleIncomeKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setIncome(income + Number(event.currentTarget.value));
        }
    }

    const handleExpensesKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setExpenses(expenses + Number(event.currentTarget.value));
        }
    }

    useEffect(() => {
        setTotalBalance(income - expenses);
    }, [income, expenses]);
    
    return(
        <>
            <div>Income: {income}</div>
            <div>Expenses: {expenses}</div>
            <div>Total Balance: {totalBalance}</div>

            <input type="number" placeholder="add an INCOME" onKeyDown={(e) => handleIncomeKeyDown(e)} />
            <input type="number" placeholder="add an EXPENSE" onKeyDown={(e) => handleExpensesKeyDown(e)} />
        </>
    )
};