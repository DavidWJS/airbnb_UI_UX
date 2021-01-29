import React, { useState } from "react";
import {View, Text, Image, FlatList, TextInput, Pressable} from "react-native";
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
                <GooglePlacesAutocomplete
                placeholder='Where would you like to go?'
                onPress={(data, detail = null) => {
                    console.log(data, detail);
                    navigation.navigate('Guests');
                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput
                }}
                query={{
                    key: 'AIzaSyCtuYKnjSMN3cj_OQk_4BwH3kiBz_fm29I',
                    language: 'en',
                    type: '(cities)'
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
                
            />
        </View>
    );
};

export default DestinationSearchScreen;