import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      namaAwal: this.props.route.params.namaAwal,
    };
  }

  masukWeb = () => {
    this.props.navigation.navigate('WebView');
  };

  componentDidMount() {}
  render() {
    const {namaAwal} = this.state;
    const nama = this.props.route.params.nama;
    const email = this.props.route.params.email;
    const avatar = this.props.route.params.avatar;
    // console.log(nama);
    const {navigation} = this.props;
    // console.log('isi', ganti);
    return (
      <View style={styles.pages}>
        <View>
          <Text>Welcome</Text>
          <Text>{namaAwal}</Text>
        </View>
        <View style={styles.gambar}>
          {avatar ? (
            <Image style={styles.profile} source={{uri: avatar}} />
          ) : (
            <Image
              style={styles.profile}
              source={require('../../images/Profile.png')}
            />
          )}
          <Text style={styles.text}>
            {nama ? nama : 'Select a user to show the profile'}
          </Text>
          <Text style={styles.email}>{email}</Text>

          <Text style={styles.hyperlinkStyle} onPress={() => this.masukWeb()}>
            {email ? 'Website' : ''}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.tombolCek}
          onPress={() => navigation.navigate('Users', {namaAwal: namaAwal})}>
          <Text style={styles.cek}>Choose a User</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  gambar: {
    alignItems: 'center',
    marginTop: -50,
  },
  profile: {
    resizeMode: 'stretch',
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  tombolCek: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    marginVertical: 30,
  },
  text: {
    alignItems: 'center',
    marginTop: 30,
  },
  email: {
    marginTop: 10,
  },
  cek: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'PublicSans-Bold',
  },
  hyperlinkStyle: {
    color: 'blue',
    marginTop: 20,
  },
});
