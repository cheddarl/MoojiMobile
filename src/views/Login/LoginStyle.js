import { StyleSheet } from 'react-native';

const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    mooji: {
        height: 430,
        width: 430,
        position: 'relative',
        top: -15,
    },
    texto: {
        color: '#fff',
        textDecorationColor: '#fff',
        fontSize: 17,
    },
    formulario: {
        position: 'relative',
        top: -125,
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
        width: 120,
        top: 30,
        borderRadius: 10,
        backgroundColor: '#81a969',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
    },
    cadastro: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        top: -10,
    },
}); 

export default LoginStyle;