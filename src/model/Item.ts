
export abstract class Item {

    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _valor: number;
    private _lote: number;
    private _estoque: number;
    private _raridade: string;

    constructor(id: number, nome: string, tipo: number, valor: number, lote: number, estoque: number, raridade: string) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._valor = valor;
		this._lote = lote;
		this._estoque = estoque;
        this._raridade = raridade
	}

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get valor(): number {
		return this._valor;
	}

	public get lote(): number {
		return this._lote;
	}

	public get estoque(): number {
		return this._estoque;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set valor(value: number) {
		this._valor = value;
	}

	public set lote(value: number) {
		this._lote = value;
	}

	public set estoque(value: number) {
		this._estoque = value;
	}

	public get raridade(): string {
		return this._raridade;
	}

	public set raridade(value: string) {
		this._raridade = value;
	}

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Comum";
                break;
            case 2:
                tipo = "Magico";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Item:");
        console.log("*****************************************************");
        console.log("Id: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Tipo: " + tipo);
        console.log("Lote: " + this.lote);
        console.log("Quantidade em Estoque: " + this.estoque);
        console.log("Preço: R$ " + this._valor.toFixed(2));
    }
}