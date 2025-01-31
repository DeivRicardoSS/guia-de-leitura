import { View, Text, SafeAreaView, TextInput, Button, StyleSheet, Image, Modal } from "react-native";
import { loginUser } from "../api/api";
import React, {useState, useCallback, useRef} from "react";
import Input1 from "../components/Input1";
import Button1 from "../components/Button1";
import Root from "../styles/root";
import { livroAberto } from "../localdata/LivroAberto";
import { useFocusEffect } from "@react-navigation/native";
import { ip, updateLivro } from "../api/api";
import { useUser, useUpdateUser } from "../localdata/User";

function LivroScreen({ navigation }){
    let { user } = useUser();
    let { updateUser } = useUpdateUser();

    let [img, setImg] = useState(null);
    let [titulo, setTitulo] = useState(null);
    let [autor, setAutor] = useState(null);
    let [paginas, setPaginas] = useState(null);
    let [paginasLidas, setPaginasLidas] = useState(null);
    let [popup, setPopup] = useState(false);
    let [btn, setBtn] = useState('Continuar Leitura');

    let[novasPaginas, setNovasPaginas] = useState(null);

    let [segundos, setSegundos] = useState(0);
    let [minutos, setMinutos] = useState(0);
    let [horas, setHoras] = useState(0);


    useFocusEffect(
        useCallback(()=>{
            setImg(user.livros[livroAberto].link);
            setTitulo(user.livros[livroAberto].nome);
            setAutor(user.livros[livroAberto].autor);
            setPaginas(user.livros[livroAberto].quantPaginas);
            setPaginasLidas(user.livros[livroAberto].pagAtual);

            if (user.livros[livroAberto].pagAtual === user.livros[livroAberto].quantPaginas) {
                setBtn('Voltar para a Biblioteca');
            }
        }, [])
    );

    const intervalRef = useRef(null); // Armazena a referência do intervalo

    function startTimer() {
        if (intervalRef.current) return; // Evitar múltiplos intervalos

        intervalRef.current = setInterval(() => {
            setSegundos((prevSegundos) => {
                if (prevSegundos === 59) {
                    setMinutos((prevMinutos) => {
                        if (prevMinutos === 59) {
                            setHoras((prevHoras) => prevHoras + 1);
                            return 0;
                        }
                        return prevMinutos + 1;
                    });
                    return 0;
                }
                return prevSegundos + 1;
            });
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(intervalRef.current);
        intervalRef.current = null; // Limpa a referência
    }

    async function atualizarLivro(xp) {
        try {
            const response = await updateLivro({ 
                nome: user.livros[livroAberto].nome,
                autor: user.livros[livroAberto].autor,
                genero: user.livros[livroAberto].genero,
                quantPaginas: user.livros[livroAberto].quantPaginas,
                pagAtual: novasPaginas,
                userId: user.userId,
                link: user.livros[livroAberto].link,
                xp: xp,
                index: livroAberto
            });
            console.log(response);
            if (response) {
                updateUser(response);
            }
        } catch (error) {
            console.log(error);
        } finally {
            navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.img}
                source={{uri: `http://${ip}:3000/${img}`}}
            />
            <Text style={styles.title}>{titulo}</Text>
            <Text style={styles.subtitle}>{autor}</Text>
            <Text style={styles.paginas}>{paginasLidas} / {paginas} Páginas</Text>
            <View style={styles.progresso}>
                <Text >{parseInt((paginasLidas/paginas)*100)}% Completo</Text>
                <View style={{flex: 1, backgroundColor: Root.fundo2, height: 5, borderRadius: 5, overflow: 'hidden',}}>
                    <View style={{
                        backgroundColor: Root.primaria,
                        height: 5,
                        width: `${(paginasLidas/paginas)*100}%`
                    }}></View>
                </View>
            </View>
            <Button1
                value={btn}
                onPress={() => {
                    if (paginasLidas < paginas) {
                        setPopup(true);
                        startTimer();
                    } else {
                        navigation.goBack();
                    }
                    
                }}
            />
            <Modal
                visible={popup}
                animationType="slide"
                transparent= {true}
                onRequestClose={() => setPopup(false)}  
            >

                <View style={styles.blur}>
                    <View style={styles.popup}>
                        <Text style={styles.title}>{horas>0? horas.toString().padStart(2, '0')+':' : ''}{minutos.toString().padStart(2, '0')}:{segundos.toString().padStart(2, '0')}</Text>
                        <Input1
                            placeholder={"Número da página atual"}
                            onChange={setNovasPaginas}
                            keyboardType={"numeric"}
                        />
                        <Button1
                            value={"Terminar leitura"}
                            onPress={() => {
                                setPopup(false);
                                pauseTimer();
                                let pontos = parseInt(`${horas.toString().padStart(2, '0')}${minutos.toString().padStart(2, '0')}`) + (novasPaginas - paginasLidas);
                                atualizarLivro(pontos);
                            }}
                        />
                    </View>
                </View>
                
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        padding: 20,
        justifyContent: 'flex-start',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: Root.title
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        color: Root.text
    },
    paginas: {
        fontSize: 12,
        fontWeight: '400',
        color: Root.text
    },
    img: {
        objectFit: 'cover',
        width: 115,
        height: 158,
        borderRadius: 10,
        backgroundColor: '#E2E2E2'
    },
    progresso: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    blur: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popup: {
        backgroundColor: Root.fundo,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        width: 300
    }
});

export default LivroScreen;