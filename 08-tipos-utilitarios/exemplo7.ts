
// Uppecase<TipoString>
// Lowercase<TipoString>
// Capitalize<TipoString> 




type TransacaoCredito = 'Credito';
type TransacaoDebito = 'Debito';



type Transacao = Uppercase<TransacaoCredito> | Uppercase<TransacaoDebito>; 
type Transacao2 = Lowercase<TransacaoCredito> | Lowercase<TransacaoDebito>;
type Transacao3 = Capitalize<TransacaoCredito> | Capitalize<TransacaoDebito>;
const tipo: Transacao = 'Credito';
const tipo2: Transacao2 = 'credito';
