import React, {useEffect, useState} from "react";
import {View, Text, Image, FlatList} from "react-native";
import Post from '../../components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';
import {useRoute} from '@react-navigation/native';

const SearchResultsScreen = (props) => {

    const {guests} = props;

    const [posts, setPosts] = useState([]);    

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts)
                )

                    setPosts(postsResult.data.listPosts.items);
            } catch (e) {
                console.log(e);
            }
        }

        fetchPosts();
    }, [])

    return (
        <View>
            <FlatList
            data={posts}
            renderItem={({item}) => <Post post={item} />}
            />
        </View>
    );
};

export default SearchResultsScreen;