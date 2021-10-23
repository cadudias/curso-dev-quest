
const acrescimoValorEntrega = 0.2;

const calcularValorPedido = pedido => {
	const valorProdutos = pedido.itens
	.filter(produto => !produto.entrega)
	.reduce((prev, curr) => prev + curr.valor, 0);

	const entrega = pedido.itens.find(produto => produto.entrega);

	if(pedido.estado === 'RS' || pedido.estado === 'SC')
		entrega.valor += entrega.valor * acrescimoValorEntrega;

	return valorProdutos > 500 ? valorProdutos : valorProdutos + entrega.valor;

	// if(valorProdutos > 500) {
	// 	return valorProdutos;
	// } else {
	// 	return valorProdutos + entrega.valor;
  	// }
}

module.exports = calcularValorPedido;