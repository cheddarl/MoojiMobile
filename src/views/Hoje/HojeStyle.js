import { StyleSheet } from 'react-native';

const HojeStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    texto: {
        color: '#fff',
        textDecorationColor: '#fff',
        fontSize: 17,
    },
    fundo: {
        height: '100%',
        width: '100%',
    },
    estadoEmocional: {
        backgroundColor: '#000',
        height: 300,
        width: 300,
        borderRadius: 20,
        alignSelf: 'center',
        position: 'relative',
        top: 50,
    },
    calendario: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        top: 15,
    },
    data: {
        color: '#fff',
        fontSize: 23,
        position: 'relative',
        top: 3,
    },  
    surpresa: {
        position: 'relative',  
        height: 165,
        width: 165,
        alignSelf: 'center',
        top: 34,
    },
    dados: {
        color: '#fff',
        fontSize: 16,
        position: 'relative',
        top: 10,
        alignSelf: 'center',
    },
    
    campo: {
        width: 300,
        height: 200,
        backgroundColor: 'rgba(255,255,255,0.07)',
        borderRadius: 20,
        fontSize: 16,
        color: '#fff',
        position: 'relative',
        top: 70,
        alignSelf: 'center',
        padding: 20,
        paddingBottom: 150
    },
});
export default HojeStyle;