import subtracao from "./subtracao";

describe('Testes de subtração', () => {
    test('Devolve o resultado da subtração dos números', () => { 
        expect(subtracao(6.7, 2.5)).toBeCloseTo(4.2);
        expect(subtracao(6, 8)).toBeCloseTo(-2);
        expect(subtracao(60, 2)).toBeCloseTo(58);
    })
    test('deve verificar o resultado incorreto da subtração', () => { 
        expect(subtracao(6, 2)).not.toBeCloseTo(5);
    })
})