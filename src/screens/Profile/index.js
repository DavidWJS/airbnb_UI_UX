import { Auth } from 'aws-amplify';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const ProfileScreen = (props) => {

    const logout = () => {
        Auth.signOut();
    }
    return (
        <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Pressable 
            onPress={logout}
            style={{width: '100%', height: 40, backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center'}}>
                <Text>Log out</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;