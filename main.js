import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function test() {
	let lista = [];
	const question = 'Digite uma propriedade CSS: ';
	rl.question(question, input => {
		if (input.trim().toUpperCase() !== 'SAIR') {
			lista.push(input);
			rl.setPrompt(question);
			rl.prompt();
			rl.on('line', input => {
				if (input.trim().toUpperCase() !== 'SAIR') {
					lista.push(input);
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

test();
