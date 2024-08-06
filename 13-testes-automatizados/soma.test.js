const soma = require('./soma'); 

test('deve testar o resultado da soma', () => { 
    expect(soma(3,8)).toBe(11);
})