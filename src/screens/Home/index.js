import React from "react";
import {View, Text, ImageBackground, Pressable, Image, Dimensions} from "react-native";
import styles from './styles';
import Fontisto from "react-native-vector-icons/Fontisto";
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = (props) => {
    const navigation = useNavigation();

    const width = Dimensions.get('screen').width;

    return (
        <ScrollView>
            <View>
                <Pressable
                    style={styles.searchButton}
                    onPress={() =>navigation.navigate('Destination Search')}>
                        <Fontisto name="search" size={25} color={'tomato'} />
                        <Text style={styles.searchButtonText}>Where would you like to go?</Text>
                    </Pressable>
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                <Text style={styles.title}>Go Near</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => {}}>
                        <Text style={styles.buttonText}>Explore nearby stays</Text>
                    </Pressable>
            </ImageBackground>
        </View>
        <View>
            <Text style={{margin: 15, fontSize: 20, fontWeight: 'bold'}}>Trending Locations</Text>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../../../assets/images/poconos.jpg')} 
                style={{
                width: width * 0.9,
                height: 200,
                resizeMode: 'cover',
                borderRadius: 20,
                }}/>
                <Text style={{fontWeight:'500', fontSize: 14, marginBottom: 10}}>Poconos</Text>

                <Image source={require('../../../assets/images/montauk.jpg')} 
                style={{
                    width: width * 0.9,
                    height: 200,
                resizeMode: 'cover',
                borderRadius: 20,
                }}/>
                <Text style={{fontWeight:'500', fontSize: 14, marginBottom: 10}}>Montauk</Text>

                <Image source={require('../../../assets/images/longIsland.jpg')} 
                style={{
                    width: width * 0.9,
                    height: 200,
                resizeMode: 'cover',
                borderRadius: 20,
                }}/>
                <Text style={{fontWeight:'500', fontSize: 14, marginBottom: 10}}>Long Island</Text>
            </View>
            
        </View>
        </ScrollView>
    );
};

export default HomeScreen;