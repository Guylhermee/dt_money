import React from 'react';

export interface CardProps {
    id: number;
    icon: React.ReactNode;
    title: string;
    value: number;
    backgroundColor: string;
    textColor: string;
}

const Card: React.FC<CardProps> = ({ id, icon, title, value, backgroundColor, textColor }) => {
    return (
        <div
            key={id}
            className={`w-[352px] h-[136px] rounded-md px-8 pt-6 shadow`}
            style={{ backgroundColor: backgroundColor }} 
        >
            <div className='flex justify-between items-center'>
                <div className={`${textColor}`}>{title}</div>
                <span className={`text-2xl ${textColor}`}>{icon}</span>
            </div>
            <div className={`font-medium pt-4 text-3xl ${textColor}`}>
                R$ {value.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}
            </div>
        </div>
    );
};

export default Card;
