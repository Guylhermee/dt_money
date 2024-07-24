import Image from "next/image";

export function Card({ titulo, cor, dinheiro, icone }) {
    return <div className={`p-6 rounded-lg text-white`} style={{ backgroundColor: cor }}>
        <div className="flex justify-between items-center">
            <span>{titulo}</span>
            <span className="text-2xl">{icone}</span>
        </div>
        <strong className="mt-4 block text-4xl">{dinheiro}</strong>
    </div>
}