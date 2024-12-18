import { Item } from "../model/Item"; 

export interface ItemRepository {
    listarTodosItem(): void;
	procurarPorId(id: number): void;
	cadastrar(produto: Item): void;
	atualizar(produto: Item): void;
	deletar(id: number): void;	
}