import React from "react";
import {View, Text, Image, Pressable} from "react-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Post = (props) => {

    const post = props.post;
    const width = useWindowDimensions().width;

    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id});
    }

    return (
        <Pressable onPress={goToPostPage} style={[styles.container, {width: width * .8}]}>
            <View style={styles.innerContainer}>
            <Image style={styles.image}
            source={{uri: post.image}}>
            </Image>

            <View style={{marginHorizontal: 10, flex: 1}}>
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            <Text style={styles.prices}>
                <Text style={styles.newPrice}> ${post.newPrice}</Text>
                 / night
            </Text>
            </View>
            </View>
        </Pressable>
    );
};

export default Post;