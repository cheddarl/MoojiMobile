import { StyleSheet } from 'react-native';

const CalendarStyle = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    texto: {
        color: '#fff',
        textDecorationColor: '#fff',
        fontSize: 17,
    },
    calendario: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        top: 17,
    },
    data: {
        color: '#fff',
        fontSize: 23,
        position: 'relative',
        top: 3,
    },
    media: {
        height: 370,
        width: 350,
        position: 'relative',
        top: 45,
    }
});
export default CalendarStyle;