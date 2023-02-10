import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from 'react-native';
import {Appbar} from 'react-native-paper';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
};

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetchPosts().then(_ => setPosts(_));
    console.log('POSTS fetched');
  }, []);

  return (
    <>
      <Appbar.Header mode={'center-aligned'} elevated>
        <Appbar.Content title="Posts" />
      </Appbar.Header>

      {/*<VirtualizedList*/}
      {/*  style={{flex: 1}}*/}
      {/*  renderItem={({item}) => <PostItem post={item} />}*/}
      {/*  data={posts}*/}
      {/*  getItemCount={() => posts.length}*/}
      {/*  getItem={(data, index) => data[index]}*/}
      {/*/>*/}

      <FlatList
        data={posts}
        renderItem={({item}) => <PostItem post={item} />}
        keyExtractor={item => item.id.toString()}
      />

      {/*<ScrollView>*/}
      {/*  */}
      {/*  */}
      {/*  {posts.map(post => (*/}
      {/*    <PostItem post={post} />*/}
      {/*  ))}*/}
      {/*</ScrollView>*/}
    </>
  );
};

export default Posts;

const PostItem = ({post}: {post: IPost}) => {
  return (
    <View style={postItemStyles.postItemView}>
      <Text style={postItemStyles.title}>{post.title}</Text>
      <Text style={postItemStyles.body}>{post.body}</Text>
    </View>
  );
};

const postItemStyles = StyleSheet.create({
  postItemView: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
});
