import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 20,        
    },
    bedrooms: {
        marginVertical: 10,
        fontSize: 14,
        color: 'grey',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: 'grey',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: 'grey',
        textDecorationLine: 'underline',
    },
});

export default styles;