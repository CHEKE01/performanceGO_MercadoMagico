import { Item } from "../model/Item";
import { ItemRepository } from "../repository/ItemRepository";
import { colors } from "../util/colors"; 

export class ItemController implements ItemRepository {

    listaItens = new Array<Item>();

    public id: number = 0;

    listarTodosItens(): void {
        
        this.listaItens.forEach(item => item.visualizar());

    }
    
    procurarPorId(id: number): void {
        let buscaItem = this.buscarNoArray(id);

        if (buscaItem != null) {
            buscaItem.visualizar();
        } else
            console.log(colors.fg.red, "\nO Item id: " + id
                + " não foi encontrado!", colors.reset);
    }

    cadastrar(item: Item): void {
        this.listaItens.push(item);
        console.log("O item foi cadastrado com sucesso!")
    }

    atualizar(item: Item): void {
        let buscaItem = this.buscarNoArray(item.id);

        if (buscaItem != null) {
            this.listaItens[this.listaItens.indexOf(buscaItem)] = item;
            console.log(colors.fg.green, "\nO Item id: " + item.id + 
                        " foi atualizado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO Produto id: " + item.id + 
                        " não foi encontrado!", colors.reset);
    }

    deletar(id: number): void {
        let buscaItem = this.buscarNoArray(id);

        if (buscaItem != null) {
            this.listaItens.splice(this.listaItens.indexOf(buscaItem), 1);
        	console.log(colors.fg.green,"\nO Item id: " + id + 
                        " foi apagado com sucesso!", colors.reset);
        }else
        console.log(colors.fg.red,"\nO Item id: " + id + 
                    " não foi encontrado!", colors.reset);
    }

    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Item | null {

        for (let produto of this.listaItens) {
            if (produto.id === id)
                return produto;
        }

        return null;
    }
}