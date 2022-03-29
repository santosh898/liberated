import React, { useCallback, useState, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { Avatar } from 'native-base';
import { auth, db } from '../../firebase';
// import {signOut} from 'firebase/auth';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);
  // const signOutNow = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       navigation.replace('Login');
  //     })
  //     .catch(error => {
  //       // An error happened.
  //     });
  // };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar rounded="sm" />
        </View>
      ),
    });

    const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        })),
      ),
    );

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSend = useCallback((newMessages = []) => {
    const { _id, createdAt, text, user } = newMessages[0];

    addDoc(collection(db, 'chats'), { _id, createdAt, text, user });
  }, []);

  const avatarURL =
    'https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x';
  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={onSend}
      user={{
        _id: 'Pf0qiywfFGMi4ABFoJFbJo4Dn7v1',
        name: 'auth?.currentUser?.displayName',
        avatar: avatarURL,
      }}
    />
  );
};

export default Chat;
