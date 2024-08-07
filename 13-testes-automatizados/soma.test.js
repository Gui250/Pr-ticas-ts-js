const soma = require('./soma'); 


describe('Testes de soma', () => { 
    test('deve testar o resultado da soma', () => { 
        expect(soma(3,8)).toBe(11);
    })
    test('deve testar o resultado incorreto de uma soma', () => { 
        expect(soma(3,8)).not.toBe(12);
    })
})