class ContaBanco {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo)
            return "Operação Negada, Valor maior do que Saldo.";

        // this._saldo = this._saldo - valor;
        return this._saldo = this._saldo - valor;
    }

    depositar(valor) {
        return this._saldo = this._saldo + valor;
    }

}//Clase - ContaBanco

class ContaCorrente extends ContaBanco {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    
    get cartaoCredito() {
        this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}//Conta Corrente

class ContaPoupanca extends ContaBanco {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}//Conta Poupança

class ContaUniversitaria extends ContaBanco {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500)
            return "Operação Negada, Valor maior que R$500.";

        // this._saldo = this._saldo - valor;
        return this._saldo = this._saldo - valor;
    }

    
}//Conta Universitároa