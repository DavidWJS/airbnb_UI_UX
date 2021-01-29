import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 70,
        width: '50%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: 'white',
        width: 200,
        height: 30,
        marginLeft: 25,
        marginTop: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchButton: {
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 30,
        marginHorizontal: 15,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        position: 'absolute',
        top: 50,
        zIndex: 100,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    item: {
        
    }
});

export default styles;