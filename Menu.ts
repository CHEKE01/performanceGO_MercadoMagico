import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';
import { ItemController } from "./src/controller/ItemController";
import { Comum } from "./src/model/Comum";
import { Magico } from "./src/model/Magico";

export function main() {
    let opcao, id, tipo, valor, lote, estoque, energia, cargas: number
	let nome, raridade: string
	let tipoItem = ['Comum', 'Magico']

    const itemController = new ItemController()
   
    itemController.cadastrar(
		new Comum( itemController.gerarId(), 'Refeição Diaria', 1, 50.0, 101, 500, "Basico", new Date ("2025-10-05"))
	)

    itemController.cadastrar(
		new Comum(itemController.gerarId(),'Curatico',1, 2.0, 635, 2000, "Basico", new Date ("2050-01-01"))
	)
	
    itemController.cadastrar(
		new Magico( itemController.gerarId(), 'Poção de Cura', 2, 150.0, 36, 120, "Raro", 0, 1)
	)

    itemController.cadastrar(
		new Magico( itemController.gerarId(), 'Cajado de bola de fogo', 2, 100000.0, 1, 1, "lendario", 500, 10)
	)


    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar Itens                         ");
        console.log("            2 - Procurar Item por ID                 ");
        console.log("            3 - Cadastrar Item                       ");
        console.log("            4 - Atualizar Item                       ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong, 
                "\nEmporio de bugigangas do Mago !!!NÃO OFERECEMOS GARANTIAS)!!!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log(
					colors.fg.whitestrong,
					'\n\nCriar Item\n\n',
					colors.reset
				)

				nome = readlinesync.question('Digite o Nome do Item: ');

				tipo = readlinesync.keyInSelect(tipoItem, '', {cancel: false,}) + 1;

				valor = readlinesync.questionFloat('Digite o preco: ')

                lote = readlinesync.questionInt('Digite o lote: ')

                estoque = readlinesync.questionInt('Digite a quantidade do estoque: ')

                raridade = readlinesync.question('Digite a raridade do Item: ')

				switch (tipo) {
					case 1:

                        while (true) {    
                            let validade: Date = new Date(readlinesync.question('Digite a data de validade do Item (formato YYYY-MM-DD): '));

                            if (isNaN(validade.getTime())) {
                                console.log("Data inválida! Por favor, digite a data no formato correto (YYYY-MM-DD).");
                            } else {
                                console.log("Data válida: ", validade);
						
						itemController.cadastrar(
							new Comum(
								itemController.gerarId(),
								nome,
								tipo,
								valor,
								lote,
                                estoque,
                                raridade,
                                validade
							));
                            
                        break; }

                        break;

					case 2:
						energia = readlinesync.questionInt(
                            'Digite a Energia para usar o Item'
                        )
                        cargas = readlinesync.questionInt(
							'Digite o Numero de Cargas do Item: '
						)
						itemController.cadastrar(
							new Magico(
								itemController.gerarId(),
								nome,
								tipo,
								valor,
								lote,
                                estoque,
                                raridade,
                                energia,
                                cargas
							)
						)
						break
				}

				keyPress()
				break

            case 2:
                console.log(
                    colors.fg.whitestrong, 
                    "\n\nListar Item por ID\n\n", 
                    colors.reset
                )

                itemController.listarTodosItens()

                keyPress()
                break;

            case 3:
                console.log(
					colors.fg.whitestrong,
					'\n\nConsultar dados do Item - por Id\n\n',
					colors.reset
				)

				id = readlinesync.questionInt('Digite o Id: ')
				itemController.procurarPorId(id)

                keyPress()
                break;
            case 4:
                console.log(
					colors.fg.whitestrong,
					'\n\nAtualizar dados do Item\n\n',
					colors.reset
				)

				id = readlinesync.questionInt('Digite o Id do Item: ')

				let item = itemController.buscarNoArray(id)

				if (item !== null) {
					nome = readlinesync.question('Digite o Nome do Item: ')

					tipo = item.tipo

					valor = readlinesync.questionFloat('Digite o preco: ')

                    lote = readlinesync.questionInt('Digite o lote: ')

                    estoque = readlinesync.questionInt('Digite a quantidade do estoque: ')

                    raridade = readlinesync.question('Digite a raridade do Item: ')

					switch (tipo) {
						case 1:
							while (true) {  

                                let validade: Date = new Date(readlinesync.question('Digite a data de validade do Item (formato YYYY-MM-DD): '));
    
                                if (isNaN(validade.getTime())) {
                                    console.log("Data inválida! Por favor, digite a data no formato correto (YYYY-MM-DD).");
                                } else {
                                    console.log("Data válida: ", validade);

                            itemController.atualizar
                            new Comum(id, nome, tipo, valor, lote, estoque, raridade, validade)
                            break
                            }

                            break

                        case 2:
							energia = readlinesync.questionInt(
                                'Digite a Energia para usar o Item'
                            )
                            cargas = readlinesync.questionInt(
                                'Digite o Numero de Cargas do Item: '
							)

							itemController.atualizar(
								new Magico(id, nome, tipo, valor, lote, estoque, raridade, energia, cargas)
							)
							break
					}
				} else console.log('item não Encontrado!')

				keyPress()
				break;
            case 5:
                console.log(
					colors.fg.whitestrong,
					'\n\nApagar um item\n\n',
					colors.reset
				)

				id = readlinesync.questionInt('Digite o Id: ')
				itemController.deletar(id)

				keyPress()
				break
        }
    }

}

function sobre(): void {
	console.log('\n*****************************************************')
	console.log('Projeto Desenvolvido por: Bruno Lima')
	console.log('Generation Brasil - brunol@genstudents.org')
	console.log('github.com/CHEKE01')
	console.log('*****************************************************')
}

function keyPress(): void {
	console.log(colors.reset, '')
	console.log('\nPressione enter para continuar...')
	readlinesync.prompt()
}

main() 