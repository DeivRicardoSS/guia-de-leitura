import * as SecureStore from 'expo-secure-store';

const user = {
    nome: undefined,
    nascimento: undefined,
    sexo: undefined,
    email: undefined,
    senha: undefined,
    avatar: undefined,
    userId: undefined,
    livros: [],
    xpTotal: 0,
    xpSemanal: 0,
    amigos: [],
    lidas: 0
}

async function addUser(info) {
    if('nome' in info) user.nome = info.nome;
    if('nascimento' in info) user.nascimento = info.nascimento;
    if('sexo' in info) user.sexo = info.sexo;
    if('email' in info) user.email = info.email;
    if('senha' in info) user.senha = info.senha;
    if('avatar' in info) user.avatar = info.avatar;
    if('userId' in info) user.userId = info.userId;
    if('livros' in info) user.livros = info.livros;
    if('xpTotal' in info) user.xpTotal = info.xpTotal;
    if('xpSemanal' in info) user.xpSemanal = info.xpSemanal;
    if('amigos' in info) user.amigos = info.amigos;
    if('lidas' in info) user.lidas = info.lidas;

    try {
        await SecureStore.setItemAsync('user', JSON.stringify(user));
        console.log("Usuário salvo localmente");
    } catch (error) {
        console.error("Erro ao salvar:", error);
    }
}

export {user, addUser};