'use client'

import Image from "next/image";
import { FC, useState } from "react";
import TransactionDialog from "@/components/Dialog";

interface HeaderProps {
    isUpdate: boolean;
}

export const Header: FC<HeaderProps> = ({isUpdate = false}) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <header className="bg-purple w-full h-[212px]">
            <div className="mx-auto max-w-[1120px] flex justify-between pt-8">
                <Image src="/images/logo_svg.svg" alt="Logo" width={172} height={40} />
                <button
                    className="bg-lighter-purple text-white size-4 w-[197px] px-5 py-6 rounded-md flex items-center justify-center hover:opacity-90"
                    onClick={() => setIsDialogOpen(true)}>Nova Transação
                </button>
                <TransactionDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} transactionId={null}/>
            </div>
        </header>
    );
}
