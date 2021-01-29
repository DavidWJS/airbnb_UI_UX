import React, { useState } from "react";
import {Pressable, View, Text} from "react-native";
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';

const GuestsScreen = (props) => {
    const navigation = useNavigation();
    const route = useRoute();

    const [adults, setAdults] = useState (0);
    const [children, setChildren] = useState (0);
    const [infants, setInfants] = useState (0);

    const [inputText, setInputText] = useState( "");
    return (
        <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View>
                <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Adults</Text>
                    <Text style={{color: 'grey'}}>Ages 13 or above</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable onPress={() => setAdults(Math.max(0, adults - 1))}
                    style={styles.button}>
                        <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 10, fontSize: 18}}>{adults}</Text>
                    <Pressable onPress={() => setAdults(adults + 1)}
                    style={styles.button}>
                        <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
                    </Pressable>

                </View>
            </View>
                <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>children</Text>
                    <Text style={{color: 'grey'}}>Ages 2 - 12</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable onPress={() => setChildren(Math.max(0, children - 1))}
                    style={styles.button}>
                        <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 10, fontSize: 18}}>{children}</Text>
                    <Pressable onPress={() => setChildren(children + 1)}
                    style={styles.button}>
                        <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
                    </Pressable>

                </View>
            </View>
                <View style={styles.row}>

                <View>
                    <Text style={{fontWeight: 'bold'}}>Infants</Text>
                    <Text style={{color: 'grey'}}>Under 2</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable onPress={() => setInfants(Math.max(0, infants - 1))}
                    style={styles.button}>
                        <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
                    </Pressable>

                    <Text style={{marginHorizontal: 10, fontSize: 18}}>{infants}</Text>
                    <Pressable onPress={() => setInfants(infants + 1)}
                    style={styles.button}>
                        <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
                    </Pressable>

                </View>
            </View>
            </View>

                <Pressable onPress={() => navigation.navigate('Home', {
                    screen: 'Explore', 
                    params: {
                        screen: 'SearchResults',
                        params: {
                            guests: adults + children,
                        }},
                    }
                    )}
                style={{
                    marginBottom: 20, 
                    backgroundColor: '#f15454', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: 50, 
                    marginHorizontal: 20, 
                    borderRadius: 10,}}>
                    <Text style={{
                        fontSize: 20, 
                        color: 'white', 
                        fontWeight: 'bold'}}>Search</Text>
                </Pressable>
        </View>
    );
};

export default GuestsScreen;