import React, { Component } from 'react';
import { View, Image, TouchableOpacity,Text } from 'react-native';
import Home from './Manhinhchinh/Home';
import Search from './Search/Search';
import homeicon from '../Access/src/media/appIcon/home.png'
import inputfetch from './Api/inputfetch'
import gettoken from './Api/gettoken'
import checklogin from './Api/checklogin'
import global from './Api/Global'
//const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IkFhYWEiLCJpYXQiOjE1NDI0MjYwNjYsImV4cGlyZSI6MTU0MjU5ODg2Nn0.fdlNVS01N7o0h-6toichD--Ju49-1lX7zN0LIiN8VEc'
import refreshtoken from './Api/refreshtoken'
import savetoken from './Api/savetoken';
import imageslogo from '../Access/src/media/temp/images.png'
import { Button } from 'react-native-elements';



export default class AssetExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      types: [],
      topproducts: [],

    }

  }
  componentDidMount() {
    inputfetch()
      .then(resJson => {
        const { type } = resJson;
        const { product } = resJson;
        this.setState({ types: type, topproducts: product })
        //  console.log(resJson)
        gettoken()
          .then(token => checklogin(token))

          .then(res => global.onsignin(res.user))
          // .then(a => console.log('thong tin moi nhan duoc', a))
          .catch(err => console.log('loi', err))


        setInterval(refreshtoken, 30000)

      }

      )

    //test

  }
  static navigationOptions= ({ screenProps }) => ({
    tabBarLabel: 'Trang chủ',

    tabBarIcon: ({ tintColor }) =>
      (<Image source={homeicon}
        style={{ tintColor: tintColor, width: 30, height: 30 }} />
      ),

  })


  render() {
    const { types } = this.state;
    const { topproducts } = this.state;
   // Expo.SplashScreen.preventAutoHide()
    return (
      <View style={{ flex: 1 }}>
        <Search {...this.props} />
        <Home {...this.props} types={types} topproducts={topproducts} />

      </View>
    );
  }
}


