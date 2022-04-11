import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CardUsers = ({datas, navigation, namaAwal}) => {
  const goto = (id, nama, email, avatar, namaAwal) => {
    navigation.replace('Home', {
      id: id,
      nama: nama,
      email: email,
      avatar: avatar,
      namaAwal: namaAwal,
    });
  };
  const gabungNama = datas.first_name + ' ' + datas.last_name;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        goto(datas.id, gabungNama, datas.email, datas.avatar, namaAwal)
      }>
      <View style={styles.users}>
        <Image source={{uri: datas.avatar}} style={styles.gambar} />
        <View style={styles.desc}>
          <Text style={styles.nama}>{gabungNama}</Text>
          <Text style={styles.email}>{datas.email}</Text>
        </View>
      </View>
    </TouchableOpacity>

    // <View style={styles.page}>
    //   <TouchableOpacity style={styles.card}>
    //     <Image source={{uri: datas.avatar}} style={styles.gambar} />
    //     <Text style={styles.text1}>
    //       {datas.first_name + ' ' + datas.last_name + '\n'}{' '}
    //     </Text>
    //     <Text style={styles.text2}>{datas.email} </Text>
    //   </TouchableOpacity>
    // </View>
  );
};

export default CardUsers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  users: {
    flexDirection: 'row',
    marginTop: 10,
  },
  gambar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  desc: {marginLeft: 20, marginTop: 10},
  nama: {
    fontSize: 13,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 12,
  },
  // gambar: {
  //   width: 70,
  //   height: 70,
  //   borderRadius: 50,
  // },
  // card: {
  //   flexDirection: 'row',
  //   marginBottom: 40,
  // },
  // text1: {
  //   marginTop: 20,
  //   marginLeft: 20,
  //   fontWeight: 'bold',
  // },
  // text2: {
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-between',
  //   marginTop: 10,
  // },
  // jarak: {
  //   justifyContent: '',
  // },
});
