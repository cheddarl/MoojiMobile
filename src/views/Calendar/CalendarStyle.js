import { StyleSheet } from 'react-native';

const CalendarStyle = StyleSheet.create({
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
});
export default CalendarStyle;