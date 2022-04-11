import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      polindrome: '',
      cekPoli: false,
    };
  }

  palindrome = str => {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    var cekpoli = true;
    for (var i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        cekpoli = false;
        Alert.alert('not palindrome');
        break;
      }
    }
    if (cekpoli) {
      Alert.alert('isPalindrome');
    }
  };

  cek = () => {
    const {nama, polindrome} = this.state;
    if (nama && polindrome) {
      this.palindrome(this.state.polindrome);
    } else {
      Alert.alert('Error', 'nama dan polindrome harus diisi');
    }
  };
  masuk = () => {
    const {nama} = this.state;
    if (nama) {
      this.props.navigation.navigate('Home', {namaAwal: this.state.nama});
    } else {
      Alert.alert('Error', 'nama harus diisi');
    }
  };

  render() {
    const {nama, polindrome} = this.state;
    return (
      <View style={styles.pages}>
        <View style={styles.gambar}>
          <Image
            style={styles.profile}
            source={require('../../images/Profile.png')}
          />
        </View>
        <View style={styles.login}>
          <TextInput
            style={styles.inputNama}
            placeholder="Name"
            value={nama}
            onChangeText={nama => this.setState({nama})}
          />
          <TextInput
            style={styles.inputPoli}
            placeholder="Polindrome"
            value={polindrome}
            onChangeText={polindrome => this.setState({polindrome})}
          />
          <TouchableOpacity style={styles.tombolCek} onPress={() => this.cek()}>
            <Text style={styles.cek}>CHECK</Text>
          </TouchableOpacity>
          {/* {cekPoli && (
            <Text style={{marginTop: 20}}>
              {' '}
              Selamat Berhassil Login : {cekPoli}
            </Text>
          )} */}
          <TouchableOpacity
            style={styles.tombolNext}
            onPress={() => this.masuk()}>
            <Text style={styles.next}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputNama: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  inputPoli: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,

    marginVertical: 10,
    borderRadius: 5,
  },
  login: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  gambar: {
    alignItems: 'center',
    marginTop: 50,
  },
  tombolCek: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
  },
  tombolNext: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
  },
  cek: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'PublicSans-Bold',
  },
  next: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'PublicSans-Bold',
  },
  profile: {
    resizeMode: 'stretch',
    width: 150,
    height: 150,
  },
});

// const fonts = {
//   primary: {
//     light: 'PublicSans-Light',
//     regular: 'PublicSans-Regular',
//     semibold: 'PublicSans-SemiBold',
//     bold: 'PublicSans-Bold',
//   },
// };
