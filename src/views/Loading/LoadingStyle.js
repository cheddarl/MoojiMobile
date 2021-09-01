import { StyleSheet } from 'react-native';

const LoadingStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    mooji: {
        height: 400,
        width: 400,
        position: 'relative',
        top: 70
    },
    rodape: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        top: 80,
    },
    texto: {
        color: '#fff',
        position: 'relative',
        top: 80,
    },
    hearthings: {
        height: 185,
        width: 185
    }
}); 

export default LoadingStyle;