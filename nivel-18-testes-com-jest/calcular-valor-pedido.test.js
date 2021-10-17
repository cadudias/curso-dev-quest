const { expect } = require("@jest/globals");
const calcularValorPedido = require('./calcular-valor-pedido');

it('deve calcular valor total sem frete caso valor do pedido seja maior que 500', () => {
    // arrange - prepara;áo do que precisa ser testado
    const pedido = {
        itens: [
            { nome: 'Arco encantado', valor: 1000 },
            { nome: 'Entrega', valor: 100, entrega: true },
        ]
    };

    //act - acao, eh o que vai ser testado
    const totalPedido = calcularValorPedido(pedido);

    // assert - asser;áo, garantir que o resultado do act [e o que esperamos que seja
    expect(totalPedido).toBe(1000);
});

it('deve cobrar frete caso valor do pedido seja menor que 500 reais', () => {
    //arrange - prepara;áo do que precisa ser testado
    const pedido = {
        itens: [
            { nome: 'Sanduiche', valor: 50 },
            { nome: 'Bota nova', valor: 400 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    //act - acao, eh o que vai ser testado
    const resultado = calcularValorPedido(pedido);

    // assert - asserção, garantir que o resultado do act [e o que esperamos que seja
    expect(resultado).toBe(550);
});

it('deve cobrar frete caso valor do pedido seja exatamente 500 reais', () => {
    //arrange - prepara;áo do que precisa ser testado
    const pedido = {
        itens: [
            { nome: 'Sanduiche', valor: 100 },
            { nome: 'Bota nova', valor: 400 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    //act - acao, eh o que vai ser testado
    const resultado = calcularValorPedido(pedido);

    // assert - asserção, garantir que o resultado do act [e o que esperamos que seja
    expect(resultado).toBe(600);
});

// Caso os estados de entrega sejam RS ou SC deve ser acrescida uma taxa de 20% sobre o valor total da entrega
it('deve adicionar 20% no valor da entrega caso estado do pedido seja RS e valor de produtos menor que 500', () => {
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: 'Sanduiche', valor: 10 },
            { nome: 'Bota nova', valor: 400 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(530);
})

it('deve adicionar 20% no valor da entrega caso estado do pedido seja SC e valor de produtos menor que 500', () => {
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            { nome: 'Sanduiche', valor: 10 },
            { nome: 'Bota nova', valor: 400 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(530);
})


it('não deve adicionar 20% no valor da entrega caso estado do pedido seja diferente de SC ou RS e valor de produtos menor que 500', () => {
    const pedido = {
        estado: 'SP',
        itens: [
            { nome: 'Sanduiche', valor: 10 },
            { nome: 'Bota nova', valor: 400 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedido);

    expect(resultado).toBe(510);
})