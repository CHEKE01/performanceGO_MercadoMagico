import { Item } from "./Item"

export class Magico extends Item{

    private _energia: number;
    private _cargas: number;

    constructor(id: number, nome: string, tipo: number, valor: number, lote: number, estoque: number, raridade: string, energia: number, cargas: number){
        super(id, nome, tipo, valor, lote, estoque, raridade)
        this._energia = energia;
        this._cargas = cargas;
    }

	public get energia(): number {
		return this._energia;
	}


	public get cargas(): number {
		return this._cargas;
	}

	public set energia(value: number) {
		this._energia = value;
	}

	public set cargas(value: number) {
		this._cargas = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Energia: " + this._energia);
        console.log("Cargas: " + this._cargas);
    }
}