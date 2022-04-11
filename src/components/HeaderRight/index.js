import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const HeaderRight = () => {
  const navigation = useNavigation();
  const [ganti, setganti] = useState(false);
  const lasting = ganti => {
    setganti(true);
    console.log('isi pertama', ganti);
    navigation.navigate('Users', {ganti: ganti});
  };
  const lasting2 = ganti => {
    setganti(false);
    console.log('isi pertama', ganti);
    navigation.navigate('Users', {ganti: ganti});
  };
  console.log('tombol', ganti);

  return (
    <View>
      {ganti === true ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Icon
            name="format-list-bulleted"
            size={30}
            color="tomato"
            onPress={() => lasting2(false)}
          />
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Icon
            name="google-maps"
            size={30}
            color="tomato"
            onPress={() => lasting(true)}
          />
        </View>
      )}
    </View>
  );
};

export default HeaderRight;
