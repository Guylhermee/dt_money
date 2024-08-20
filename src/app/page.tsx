'use client'
import {Header} from "@/components/Header";
import React from "react";
import { FaArrowDown, FaArrowUp, FaDollarSign  } from "react-icons/fa";
import {useTransaction} from "@/hooks/useTransaction";
import Table from "@/components/Table";
import Card from "@/components/Card";

export default function Home() {
    const {data: transactions} = useTransaction.Get()
    const {data: dashboard} = useTransaction.GetDashboard()

    const cardsData = [
        {
            title: 'Entradas',
            value: dashboard?.entry ?? 0,
            icon: <FaArrowDown className="h-8 w-8 text-green-500" />,
            backgroundColor: 'white',
            textColor: 'text-lighter-green'
        },
        {
            title: 'Saídas',
            value: dashboard?.outcome ?? 0,
            icon: <FaArrowUp className="h-8 w-8 text-red-500" />,
            backgroundColor: 'bg-white',
            textColor: 'text-black'
        },
        {
            title: 'Total',
            value: dashboard?.total ?? 0,
            icon: <FaDollarSign className="h-8 w-8 text-lighter-purple" />,
            backgroundColor: 'white',
            textColor: 'text-lighter-purple'
        }
    ];

    return (
        <>
            <Header isUpdate={false}/>
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
