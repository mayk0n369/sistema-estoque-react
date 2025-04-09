import React, { useState } from "react";

export default function App() {
  const [produtos, setProdutos] = useState([
    { nome: "BALLY MELANCIA", quantidade: 5 },
    { nome: "BALLY TROPICAL", quantidade: 35 },
    { nome: "RED LABEL", quantidade: 5 },
    { nome: "REDBULL MELANCIA", quantidade: 247 },
    { nome: "ÁGUA", quantidade: 792 },
  ]);

  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="p-4 font-sans bg-white text-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sistema de Estoque</h1>
      <input
        type="text"
        placeholder="Buscar produto..."
        className="mb-4 p-2 border rounded w-full max-w-md"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2 text-left">Item</th>
            <th className="border p-2 text-left">Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {produtosFiltrados.map((produto, index) => (
            <tr key={index}>
              <td className="border p-2">{produto.nome}</td>
              <td className="border p-2">{produto.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
