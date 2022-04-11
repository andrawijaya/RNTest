import {Text, StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import React, {Component} from 'react';
import {CardUsers, Maps} from '../../components';
import {useRoute} from '@react-navigation/native';

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      namaAwal: this.props.route.params.namaAwal,
      refreshing: false,
      // ganti: this.props.route.params.ganti,
    };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1&per_page=4')
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json.data,
        });
      });
  }
  render() {
    const {data, namaAwal, refreshing} = this.state;
    const ganti = this.props.route.params.ganti;
    // const data1 = data.data;
    const {navigation} = this.props;
    const onRefresh = async () => {
      this.setState({refreshing: true});
      if (data.length < 5) {
        try {
          let response = await fetch(
            'https://reqres.in/api/users?page=1&per_page=12',
          );
          let responseJson = await response.json();
          console.log(responseJson.data);
          this.setState({data: responseJson.data});
          this.setState({refreshing: false});
          // console.log('apa:', data1);
        } catch (error) {
          console.error(error);
        }
      } else {
        this.setState({refreshing: false});
      }
    };
    console.log('isi kdua:', ganti);
    return (
      <View style={styles.page}>
        {ganti === true ? (
          <Maps />
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={styles.container}>
              {data &&
                data.map(datas => (
                  <CardUsers
                    key={datas.id}
                    datas={datas}
                    navigation={navigation}
                    namaAwal={namaAwal}
                  />
                ))}
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
