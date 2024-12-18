import { Item } from "./Item";

export class Comum extends Item{

    private _validade: Date;

    constructor(id: number, nome: string, tipo: number, valor: number, lote: number, estoque: number, raridade: string, validade: Date){
        super(id, nome, tipo, valor, lote, estoque, raridade)
        this._validade = validade;
    }

	public get validade(): Date {
		return this._validade;
	}

	public set validade(value: Date) {
		this._validade = value;
	}
    
    public visualizar(): void {
        super.visualizar();
        console.log("Validade: " + this._validade);
    }

}