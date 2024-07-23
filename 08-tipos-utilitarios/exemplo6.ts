// Exclude<Uniao de tipos, itensExcluidos>
// Extract<Uniao de tipos, ItensExtraidos> 

type T1 = Exclude<'a' | 'b' | 'c', 'b'>

type Transacao = 'Credito' | 'Debito' | 'Boleto' | 'Pix'; 

type Banco1 = Exclude<Transacao, 'Credito'>;

type Banco2 = Exclude<Transacao, 'Boleto' | 'Pix'>



type T2 = Extract<'a' | 'b' | 'c', 'b' | 'a'>

type Banco1Extract = Extract<Transacao, 'Debito' | 'Boleto' | 'Pix'>
type Banco2Extract = Extract<Transacao, 'Credito' | 'Debito'> 

