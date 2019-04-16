import React from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image, BadgeTabIcon, ListView,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HeaderComponent from './Manhinhchinh/HeaderComponent'
import Search from './Search/Search';
import IconBadge from 'react-native-icon-badge';
import carticon from '../Access/src/media/appIcon/cart.png'
import global from './Api/Global'
import md5 from 'md5';
//import md5 to use md5()

const url = 'http://10.60.253.0/api/images/product/'

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arraycart: [],
            GoToPayMent: false,
        }

      //  console.log('______________',this.props)
    }

    static navigationOptions = ({ screenProps }) => ({
        tabBarLabel: 'Giỏ hàng',
        tabBarIcon: ({ tintColor }) =>
            (
                <Image source={carticon}
                    style={{ tintColor: tintColor, width: 40, height: 30 }} /> ,

                <IconBadge
                    MainElement={
                        <Image source={carticon}
                            style={{ tintColor: tintColor, width: 40, height: 30 }} />
                    }
                    BadgeElement={
                        <Text style={{ color: '#FFFFFF' }}>{screenProps.length}</Text>
                    }
                    IconBadgeStyle={
                        {
                            width: 20,
                            height: 20,
                            backgroundColor: '#ff5722'
                        }
                    }

                />

            ),
        tabBarOptions: { activeTintColor: '#42dff4' }


    })
    Failbuy() {
        Alert.alert(
            'Thông báo',
            'Tổng giá trị sản phẩm phải lớn hơn 0',
            [

                { text: 'OK', onPress: () => this.props.navigation.navigate('Tab1') },
            ],
            { cancelable: false }
        )
    }


    upquantity(id) {
        global.upquantity(id)
    }
    downquantitys(id) {
        global.downquantity(id)
    }
    removeproduct(id) {
        global.removeproduct(id)
    }


    gotopaymentss() {
        const cartArray = this.props.screenProps;
        const { navigation } = this.props
        navigation.navigate('GoToPayMent', { cartArray: cartArray, user: this.state.user })
    }

    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer, checkoutTitle2 } = styles;
        const cartArray = this.props.screenProps;
        const arrtotal = cartArray.map(e => e.product.price * e.quantity)
        const total = arrtotal.length ? arrtotal.reduce((a, b) => a + b) : 0
        c = total ? this.gotopaymentss.bind(this) : this.Failbuy.bind(this)
        const count = this.props.screenProps.length

        return (
            <View style={wrapper}>
                <HeaderComponent {...this.props} />
                <Search {...this.props} />
                <ListView
                    //contentContainerStyle={styles.main}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(cartArray)}
                    renderRow={(e) => (<View style={product} key={e}>
                        <Image source={{ uri: `${url}${e.product.images[0]}` }} style={productImage} />
                        <View style={[mainRight]}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={txtName}>{toTitleCase(e.product.name)}</Text>
                                <TouchableOpacity onPress={() => this.removeproduct(e.product.id)}>
                                    <Text style={{ color: '#969696' }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={txtPrice}>{e.product.price}$</Text>
                            </View>
                            <View style={productController}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity onPress={() => this.upquantity(e.product.id)}>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                    <Text>{e.quantity}</Text>
                                    <TouchableOpacity onPress={() => this.downquantitys(e.product.id)}>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={showDetailContainer} onPress={() => this.props.navigation.navigate('Detail', { product: e.product })}>
                                    <Text style={txtShowDetail}>Chi tiết</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>)}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#ff5722', }}>
                    <Text style={checkoutTitle}>Tổng tiền hàng {total}$</Text>
                    <TouchableOpacity style={checkoutButton} onPress={c} >
                        <Text style={checkoutTitle2}>Mua Hàng</Text>
                    </TouchableOpacity>
                </View>
               


            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF',

    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        marginTop:10
        //   textAlign: 'center'

    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',

    },
    checkoutTitle2: {
        color: '#ff5722',
        fontSize: 15,
        fontWeight: 'bold',
        //   textAlign:'center'

    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',

    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',

    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

/* <ScrollView style={main}>
                    {cartArray.map(e => (

                        <View style={product} key={e}>
                            <Image source={sp1} style={productImage} />
                            <View style={[mainRight]}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={txtName}>{toTitleCase('Tạ Xuân Anh')}</Text>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={txtPrice}>{100}$</Text>
                                </View>
                                <View style={productController}>
                                    <View style={numberOfProduct}>
                                        <TouchableOpacity>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                        <Text>{3}</Text>
                                        <TouchableOpacity>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={showDetailContainer} onPress={() => console.log(cartArray)}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                    ))}

                </ScrollView> */




