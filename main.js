import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function listar() {
	let lista = [];
	const question = 'Digite uma propriedade CSS: ';
	// Faz a primeira pergunta e adiciona o input em uma lista caso o input não for 'SAIR'
	rl.question(question, input => {
		if (input.trim().toUpperCase() !== 'SAIR') {
			lista.push(input.trim());
			// Faz a pergunta novamente entrando em um loop adicionando novos inputs na lista até 'SAIR' ser digitado
			rl.setPrompt(question);
			rl.prompt();
			rl.on('line', input => {
				if (input.trim().toUpperCase() !== 'SAIR') {
					lista.push(input.trim());
					rl.setPrompt(question);
					rl.prompt();
				} else rl.close();
			});
		} else rl.close();
	});
	// Retorna a lista ordenada quando o usuario digita 'SAIR'
	rl.on('close', () => {
		const listaOrdenada = lista.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));
		console.log(listaOrdenada);
	});
}

listar();
