import { StyleSheet } from 'react-native';

const PerfilStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    perfil: {
        backgroundColor:'#fff',
        height: 140,
        width: 140,
        borderRadius: 100,
    }
});
export default PerfilStyle;