import React, { Component } from 'react'
import { View, Image, TouchableOpacity, TextInput } from 'react-native'
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation'
import AsetExample from './components/AssetExample'
import Searchs from './components/Searchs'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Changeinfo from './components/Changeinfo'
import Authentication from './components/Authentication'
import Orderhistory from './components/Orderhistory'
import homeicon from './Access/src/media/appIcon/home.png'
import Menu from '../myshop/components/Menu/Menu'
import List from './components/Listproduct/List'
import Detail from './components/ProductDetail/Detail'
import Category from './components/Manhinhchinh/Category'
import Topproduct from './components/Manhinhchinh/Topproduct'
import GoToPayMent from '../myshop/components/Payment/GotoPayment'
import global from './components/Api/Global'
import Savecart from './components/Api/saveCart'
import Getcart from './components/Api/getCart'
import { Icon } from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Cod from './components/Payment/Cod'
import Baokimpayment from './components/Payment/Baokimpayment'
import changepassword from '../myshop/components/Authentication/changepassword'
import Paypalpayment from '../myshop/components/Payment/Paypalpayment'

const MainStackNavigator = createStackNavigator({
  Shop: {
    screen: AsetExample,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'SHOPEE',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%',
        color: '#FF5722'
      },

      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10, flexDirection: 'row' }}>
            <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 40, color: '#FFF' }}
            />
            <FAIcon name='500px' style={{ fontSize: 40, color: '#FFF' }} />
          </View>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity>
          <View style={{ paddingHorizontal: 10 }}>

            <FAIcon name='shirtsinbulk' style={{ fontSize: 40, color: '#FFF', }} />

          </View>
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#ff5722',


      },

    })
  },

  Orderhistory: { screen: Orderhistory },
  Authentication: { screen: Authentication },
  Changeinfo: { screen: Changeinfo },
  Category: { screen: Category },
  Detail: { screen: Detail },
  Topproduct: { screen: Topproduct },
  List: { screen: List },
  GoToPayMent: { screen: GoToPayMent },
  Cod: { screen: Cod },
  Baokimpayment: { screen: Baokimpayment },
  changepassword: { screen: changepassword },
  Paypalpayment: { screen: Paypalpayment }
},
  {
    initialRouteName: 'Shop',

  }
)

const MainTabNavigator = createBottomTabNavigator(
  {
    Tab1: {
      screen: MainStackNavigator,
      navigationOptions:
      {
        title: 'Trang chủ',
        tabBarLabel: 'Trang chủ',
        activeTintColor: 'red',
        tabBarIcon: ({ tintColor }) =>
          (<Image source={homeicon}
            style={{ tintColor: tintColor, width: 30, height: 30 }} />
          ),
        tabBarOptions: { activeTintColor: '#42dff4' }
      }
    },
    Tab2: {
      screen: Cart,

    }
    ,
    Tab3: { screen: Searchs, },
    Tab4: { screen: Contact, }
  },
  {
    tabBarPosition: 'bottom',
    showIcon: true,
  },

)


const MainDrawerNavigator = createDrawerNavigator({
  Menu: {
    screen: MainTabNavigator,
  },
},
  {
    contentComponent: Menu,
    drawerBackgroundColor: '#93e4f0',

    contentOptions: {
      activeTintColor: 'orange',
      activeBackgroundColor: '#FFF',

    },
  }
)

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartArray: [],
    }
    global.addProductToCart = this.addProductToCart.bind(this)
    global.upquantity = this.upquantity.bind(this)
    global.downquantity = this.downquantity.bind(this)
    global.removeproduct = this.removeproduct.bind(this)
    global.removeAllproduct = this.removeAllproduct.bind(this)
  }


  componentDidMount() {
    Getcart()
      .then(cartArrays => this.setState({ cartArray: cartArrays }))

  }


  addProductToCart(product) {
    const isExit = this.state.cartArray.some(e => e.product.id === product.id)//// some tra ve true va flase
    if (isExit === true) {
      const newCart = this.state.cartArray.map(e => {
        if (e.product.id === product.id) {
          return ({ product: e.product, quantity: e.quantity + 1 })
        }
        else
        {
          return e
        }

      })
      this.setState({ cartArray: newCart },
        () => Savecart(this.state.cartArray)
      )
    }
    else {
      this.setState({ cartArray: this.state.cartArray.concat({ product: product, quantity: 1, count: this.state.cartArray.length }) },
        () => Savecart(this.state.cartArray)
      )
    }

  }

  upquantity(productId) {
    // const index = this.state.cartArray.findIndex(e => e.product.id === productId)
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id !== productId)
        return e
      return ({ product: e.product, quantity: e.quantity + 1 })
    })
    this.setState({ cartArray: newCart },
      () => Savecart(this.state.cartArray)
    )
  }

  downquantity(productId) {
    const newCart = this.state.cartArray.map(e => {

      if (e.product.id === productId && e.quantity > 1)
        return ({ product: e.product, quantity: e.quantity - 1 })
      return ({ product: e.product, quantity: 1 })
    })
    this.setState({ cartArray: newCart },
      () => Savecart(this.state.cartArray)
    )
  }

  removeproduct(productId) {
    const newCart = this.state.cartArray.filter(e => (e.product.id !== productId))
    this.setState({ cartArray: newCart },
      () => Savecart(this.state.cartArray)
    )
  }

  removeAllproduct(productId) {
    const newCart = this.state.cartArray.filter(e => (e.product.id === productId))
    this.setState({ cartArray: newCart },
      () => Savecart(this.state.cartArray)
    )
  }

  render() {
    const { cartArray } = this.state;
    //console.log('dem count', cartArray.length)
    return (
      <MainDrawerNavigator screenProps={cartArray} />
    );
  }
}

