import { StyleSheet } from 'react-native';

const CadastroStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    mooji: {
        height: 330,
        width: 330,
        position: 'relative',
        top: -65,
    },
    texto: {
        color: '#fff',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.2)',
    },
    formulario: {
        position: 'relative',
        top: -155,
    },
    campo: {
        width: 280,
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 15,
        padding: 15,
        margin: 6,
        color: 'white',
        fontSize: 20,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: 45,
        width: 140,
        top: 30,
        borderRadius: 10,
        backgroundColor: '#81a969',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
    },
    avisoSenha: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: 280,
        alignSelf: 'center',
    },
}); 

export default CadastroStyle;