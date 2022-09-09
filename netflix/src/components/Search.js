import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const moveList = [
  {
    id: 1,
    firstName: 'Avatar',
    lastName: '',
    username: '',
    bio: '2009',
    imageUrl:
      'https://img-s1.onedio.com/id-52d7c61f43516df04300005f/rev-0/w-620/f-jpg/s-7e6fc834f8f00c3ed9de49ca0d5686798cd9d88b.jpg',
  },
  {
    id: 2,
    firstName: 'Yenilmezler',
    lastName: '',
    username: '',
    bio: '2017',
    imageUrl:
      'https://ares.shiftdelete.net/800x450/original/2021/09/marvel-izleme-sirasi-hangi-sirayla-izlenmeli.jpg',
  },
  {
    id: 3,
    firstName: 'John Wick 2',
    lastName: '',
    username: '',
    bio: '2020',
    imageUrl:
      'https://i.pinimg.com/236x/2a/4c/82/2a4c827fbdb3d4620a70a0e99be5cb39--john-wick-originals.jpg',
  },
  {
    id: 4,
    firstName: 'Winchester',
    lastName: '',
    username: '',
    bio: '2022',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiT1IeFoG_X8WVgovh4z5qnbeOG-FG3f50dfG5Xfd4m4bAIcueRI95GkqrE8ljWvsK2gQ&usqp=CAU',
  },
  {
    id: 5,
    firstName: 'Avatar',
    lastName: '',
    username: '',
    bio: '2009',
    imageUrl:
      'https://img-s1.onedio.com/id-52d7c61f43516df04300005f/rev-0/w-620/f-jpg/s-7e6fc834f8f00c3ed9de49ca0d5686798cd9d88b.jpg',
  },
  {
    id: 6,
    firstName: 'Yenilmezler',
    lastName: '',
    username: '',
    bio: '2017',
    imageUrl:
      'https://ares.shiftdelete.net/800x450/original/2021/09/marvel-izleme-sirasi-hangi-sirayla-izlenmeli.jpg',
  },
  {
    id: 7,
    firstName: 'John Wick 2',
    lastName: 'Bayan',
    username: 'poncikbayn',
    bio: '2020',
    imageUrl:
      'https://i.pinimg.com/236x/2a/4c/82/2a4c827fbdb3d4620a70a0e99be5cb39--john-wick-originals.jpg',
  },
  {
    id: 8,
    firstName: 'Winchester',
    lastName: '',
    username: '',
    bio: '2022',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiT1IeFoG_X8WVgovh4z5qnbeOG-FG3f50dfG5Xfd4m4bAIcueRI95GkqrE8ljWvsK2gQ&usqp=CAU',
  },
];

const UserChatButton = ({user}) => {
  const {navigate} = useNavigation();

  return (
    <Pressable
      style={styles.Pressable}
      onPress={() => {
        navigate('Chat', {
          User: user,
        });
      }}>
      <View style={styles.view}>
        <View style={styles.view2}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={{
                uri: user.imageUrl,
              }}
            />
            <View style={styles.column}>
              <Text style={styles.nickname}>{`${
                user.firstName + ' ' + user.lastName
              }`}</Text>
              <Text style={styles.lastMessage}>{`${user.bio}`}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const Chats = () => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{paddingBottom: 10}}
        style={styles.scrollView}>
        <View style={styles.card}>
          <TextInput
            placeholder="Search movie .."
            // onChangeText={newText => setFirstName(newText)}
            marginHorizontal={11}
            height={'100%'}
            width={'100%'}
            // keyboardType="number-pad"
            placeholderTextColor={'white'}
            fontSize={14}
            label="SearchMovie"
          />
        </View>
        <UserChatButton user={moveList[0]} />
        <UserChatButton user={moveList[1]} />
        <UserChatButton user={moveList[2]} />
        <UserChatButton user={moveList[3]} />
        <UserChatButton user={moveList[4]} />
        <UserChatButton user={moveList[5]} />
        <UserChatButton user={moveList[6]} />
        <UserChatButton user={moveList[7]} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    borderWidth: 1,
    width: 360,
    height: 50,
    borderColor: '#393939',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  Pressable: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  view: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  view2: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 18,
    paddingLeft: 18,
    marginHorizontal: 2,
    justifyContent: 'space-between',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  row2: {
    paddingLeft: 12,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  image: {
    alignSelf: 'center',
    width: 75,
    height: 120,
    // borderRadius: 32,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginRight: 8,
  },
  nickname: {
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
  },
  lastMessage: {
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 14,
    color: 'gray',
  },
  view13: {
    fontWeight: '600',
    fontSize: 19,
    backgroundColor: '#282828',
  },
});

export default Chats;
