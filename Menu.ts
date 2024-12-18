import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';

export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar Itens                         ");
        console.log("            2 - Listar Item por ID                   ");
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
                console.log(colors.fg.whitestrong, 
                    "\n\nListar Itens\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar Item por ID\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nCadastrar Item\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar Item\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar Produto\n\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
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
