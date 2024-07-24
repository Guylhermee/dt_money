import Image from "next/image";

export function Table() {
    const transactions = [
        { title: 'Desenvolvimento de site', price: 'R$ 12.000,00', category: 'Venda', date: '13/04/2021' },
        { title: 'Hamburguer', price: '- R$ 59,00', category: 'Alimentação', date: '10/04/2021' },
        { title: 'Aluguel do apartamento', price: '- R$ 1.200,00', category: 'Casa', date: '27/03/2021' },
        { title: 'Computador', price: 'R$ 5.400,00', category: 'Venda', date: '15/03/2021' },
    ];

    return <div className="mt-6">
        <table className="w-full table-auto">
            <thead>
                <tr className="text-gray-400 text-left">
                    <th className="font-normal py-4 px-6">Título</th>
                    <th className="font-normal py-4 px-6">Preço</th>
                    <th className="font-normal py-4 px-6">Categoria</th>
                    <th className="font-normal py-4 px-6">Data</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index} className="bg-white rounded-lg shadow-md mb-4">
                        <td className="py-4 px-6">{transaction.title}</td>
                        <td className={`py-4 px-6 ${transaction.price.includes('-') ? 'text-red-600' : 'text-green-600'}`}>
                            {transaction.price}
                        </td>
                        <td className="py-4 px-6">{transaction.category}</td>
                        <td className="py-4 px-6">{transaction.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}