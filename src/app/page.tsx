import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between mt-[-10rem] space-x-4">
          <Card titulo="Entradas" dinheiro="R$ 17.400,00" icone="↑" cor="#33cc95" />
          <Card titulo="Saídas" dinheiro="R$ 1.259,00" icone="↓" cor="#e52e4d" />
          <Card titulo="Total" dinheiro="R$ 16.141,00" icone="$" cor="#12a454" />
        </div>
        <Table />
      </main>
    </>
  );
}
