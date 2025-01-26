const cadastro = {
    nome: 'undefined',
    sexo: 'undefined',
    nascimento: 'undefined',
    email: 'undefined',
    senha: 'undefined',
    avatar: 'undefined'
}

function addCadastro(info) {
    if('nome' in info) cadastro.nome = info.nome;
    if('sexo' in info) cadastro.sexo = info.sexo;
    if('nascimento' in info) cadastro.nascimento = info.nascimento;
    if('email' in info) cadastro.email = info.email;
    if('senha' in info) cadastro.senha = info.senha;
    if('avatar' in info) cadastro.avatar = info.avatar;
}

export {cadastro, addCadastro};