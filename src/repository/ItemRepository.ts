import { Item } from "../model/Item"; 

export interface ItemRepository {

    listarTodosItens(): void;
	procurarPorId(id: number): void;
	cadastrar(item: Item): void;
	atualizar(item: Item): void;
	deletar(id: number): void;	
}