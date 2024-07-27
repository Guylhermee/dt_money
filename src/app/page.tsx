'use client'

import Card from "@/components/Card";
import { Header } from "@/components/Header";
import Table from "@/components/Table";
import React from "react";
import { FaArrowDown, FaArrowUp, FaDollarSign  } from "react-icons/fa";
import { categories } from "@/mocks/categoryModel";
import { OperationType, TransactionModel, transactionsMock } from "@/mocks/transactionModel";

export default function Home() {
    const [transactions, setTransactions] = React.useState<TransactionModel[]>(transactionsMock);

    const cardsData = [
        {
            id: 1,
            title: 'Entradas',
            value: transactions.reduce((group, item) => {
                if (item.type === OperationType.credit) {
                    group += item.price;
                }
                return group;
            }, 0),
            icon: <FaArrowDown className="h-8 w-8 text-green-500" />,
            backgroundColor: 'white',
            textColor: 'text-lighter-green'
        },
        {
            id: 2,
            title: 'Saídas',
            value: transactions.reduce((group, item) => {
                if (item.type === OperationType.debit) {
                    group += item.price;
                }
                return group;
            }, 0),
            icon: <FaArrowUp className="h-8 w-8 text-red-500" />,
            backgroundColor: 'white',
            textColor: 'text-red'
        },
        {
            id: 3,
            title: 'Total',
            value: transactions.reduce((group, item) => {
                group += item.price;
                return group;
            }, 0),
            icon: <FaDollarSign className="h-8 w-8 text-lighter-purple" />,
            backgroundColor: 'white',
            textColor: 'text-lighter-purple'
        }
    ];

    const handleSubmit = (entry: TransactionModel) => {
        setTransactions((prev) => [...prev, entry]);
    }

    return (
        <>
            <Header categories={categories} handleSubmit={handleSubmit} />
            <div className="mx-auto max-w-[1120px] flex justify-between -mt-24 pt-6">
                {cardsData.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        value={card.value}
                        icon={card.icon}
                        backgroundColor={card.backgroundColor}
                        textColor={card.textColor}
                    />
                ))}
            </div>
            <Table transactions={transactions} />
            <div className="mb-16"></div>
        </>
    );
}
