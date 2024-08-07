const vagas = []
let opcao   

function criarVaga(nomeVaga, descricaoVaga, dataLimite){
    const novaVaga = {
        nomeVaga,
        descricaoVaga,
        dataLimite,
        candidatos: [],
        quantidadeInscritos: 0
    }
    vagas.push(novaVaga)
    
}

// criarVaga('Programador', 'Programador em JS e Python', '23/08/2024')
// criarVaga('Analista de dados', 'Data Science', '12/09/2024')

// console.log(vagas)
// console.log(quantidadeInscritos)

function listarVaga(){
    vagas.forEach (function(item, indice){
        const mensagem = `Índice: ${indice}\nNome da vaga: ${item.nomeVaga}\nQuantidade de inscritos: ${item.quantidadeInscritos} `
        alert(mensagem)
    })
}

// listarVaga()

/*
A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, 
o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga
*/

function inscreverCandidato(){
    const nomeCandidato = prompt('Digite seu nome: ')
    listarVaga()
    const indiceVaga = parseInt(prompt('Digite o índice da vaga que você se deseja cadastrar: '))
    if (indiceVaga >= 0 && indiceVaga < vagas.length){
        vagas[indiceVaga].candidatos.push(nomeCandidato)
        vagas[indiceVaga].quantidadeInscritos += 1
        alert('Candidato cadastrado com sucesso')
    }else{
        alert('Índice inválido')
    }
    
}

/*
A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: 
índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
*/

function visualizarVaga(){
    vagas.forEach(function(item, indice){
        let mensagem = `índice: ${indice}\nNome da vaga: ${item.nomeVaga}\nDescrição da vaga: ${item.descricaoVaga}\nData limite: ${item.dataLimite}\nQuantidade de inscritos: ${item.quantidadeInscritos}\n`
        if (item.candidatos.length > 0){
            mensagem += `Nome do(s) candidato(s): ${item.candidatos.join(', ')} `
        }else{
            mensagem += 'Nenhum candidato inscrito'
        }
        alert(mensagem)

        
    })
}


/*
A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme 
a exclusão da vaga antes de realmente exclui-la.
*/

function excluirVaga(){
    listarVaga()
    const indiceVaga = parseInt(prompt('Digite o indice da vaga a ser excluída: '), 10)
    if(indiceVaga >= 0 && indiceVaga < vagas.length){
        const vagasParaExcluir = vagas[indiceVaga]
        let confirmar = confirm('Confirma a exclusão da vaga:\n' + 
            'Nome da vaga: ' + vagasParaExcluir.nomeVaga + '\n' 
        )
        if (confirmar) {
            vagas.splice(indiceVaga, 1)
        }else{
            alert('Exclusão cancelada')
        }
    }else{
        alert('Vaga inexistente')
    }
}

do{
    opcao = prompt('Sistema de vagas de emprego - Selecione uma opção:\n' +
        '\n1. Listar vagas\n' +
        '2. Criar uma nova vaga\n' +
        '3. Visualizar uma vaga\n' +
        '4. Inscrever um candidato em um vaga\n' +
        '5. Excluir uma vaga\n' +
        '6. Sair do programa\n'
    )
    switch(opcao){
        case '1':
            listarVaga()
            break
        case '2':
            let nomeVaga = prompt('Digite o nome da vaga que deseja cadastrar')
            let descricaoVaga = prompt('Digite a descrição da vaga cadastrada')
            let dataLimite = prompt('Digite a data limite para a vaga')
            criarVaga(nomeVaga, descricaoVaga, dataLimite)
            alert('Vaga criada com sucesso')
            break
        case '3':
            visualizarVaga()
            break
        case '4':
            inscreverCandidato()
            break
        case '5':
            excluirVaga()
            break
        case '6':
            alert('Saindo do programa')
            break
        default:
            alert('Opção inválida')
            break
    }
}while(opcao !== '6')
