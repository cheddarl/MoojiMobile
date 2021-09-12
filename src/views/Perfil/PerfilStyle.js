import { StyleSheet } from 'react-native';

const PerfilStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    texto: {
        color: '#fff',
        textDecorationColor: '#fff',
        fontSize: 17,
        width: 100,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 5,
        textAlign: 'center',
        margin: 2,
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
    },
    anel: {
        height: 200,
        width: 200,
        backgroundColor: '#fcd739',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 10,
        margin: 15,
    },
    image: {
        height: 180,
        width: 180,
        borderRadius: 90,
        borderWidth: 7, 
        borderColor: '#000',
        zIndex: 5,
    }
});
export default PerfilStyle;