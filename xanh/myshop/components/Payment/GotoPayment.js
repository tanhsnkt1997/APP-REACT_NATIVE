import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, Dimensions, TouchableOpacity, ListView, Button, Alert, ImageBackground } from 'react-native';
import HeaderComponent from '../Manhinhchinh/HeaderComponent'
import Search from '../Search/Search'
import gettoken from '../Api/gettoken'
import checklogin from '../Api/checklogin'
import screen from '../../Access/src/media/temp/components_react_native.jpg'



const url = 'http://10.60.253.0/api/images/product/'

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class GoToPayMent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }

    };

    componentDidMount() {

        gettoken()
            .then(token => checklogin(token))

            .then(user => this.setState({ user: user }))

            .catch(err => console.log('loi', err))
    }

    gotocod() {
        if (this.state.user === null) {
            // this.showAlertfail()
            this.showAlertfail()
        }
        else {

            const { user } = this.state
            const { navigation } = this.props
            navigation.navigate('Cod', { arr: user })
        }

    }

    showAlertfail() {
        Alert.alert(
            'Thông báo',
            'Đăng nhập để tiếp tục mua hàng',
            [
                { text: 'Ok', onPress: () => this.props.navigation.navigate('Authentication') },

            ],
            { cancelable: false }
        )
    }


    paypalPayment() {
        PayPal.paymentRequest({
            clientId: 'AbyfNDFV53djg6w4yYgiug_JaDfBSUiYI7o6NM9HE1CQ_qk9XxbUX0nwcPXXQHaNAWYtDfphQtWB3q4R',
            environment: PayPalAndroid.SANDBOX,
            price: '42.00',
            currency: 'USD',
            description: 'PayPal Test'
        }).then((confirm, payment) => console.log('Paid'))/* At this point you should verify payment independently */
          .catch ((error_code) => console.error('Failed to pay through PayPal'))
    }

    render() {

        const { main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer, checkoutTitle2 } = styles;
        const { cartArray } = this.props.navigation.state.params;
        const arrtotal = cartArray.map(e => e.product.price * e.quantity)
        const total = arrtotal.length ? arrtotal.reduce((a, b) => a + b) : 0
        const { user } = this.state

        //const check = user ? this.gotocod.bind(this) : this.showAlertfail()
        //  const a = user ? console.log('0') : console.log('1')
        // console.log('-------------------------------------',user)
        return (

            <View style={wrapper}>


                <ListView
                    //contentContainerStyle={styles.main}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(cartArray)}
                    renderRow={(e) => (<View style={product} key={e}>
                        <Image source={{ uri: `${url}${e.product.images[0]}` }} style={productImage} />
                        <View style={[mainRight]}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={txtName}>{toTitleCase(e.product.name)}</Text>

                            </View>
                            <View>
                                <Text style={txtPrice}>{e.product.price}$</Text>
                            </View>
                            <View style={productController}>
                                <View style={numberOfProduct}>

                                    <Text>Số lượng:{e.quantity}</Text>

                                </View>
                                <TouchableOpacity style={showDetailContainer} onPress={() => this.props.navigation.navigate('Detail', { product: e.product })}>
                                    <Text style={txtShowDetail}>Chi tiết</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>)}
                />

                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={this.gotocod.bind(this)} style={{ backgroundColor: '#FF5722', height: 45, justifyContent: 'center', borderRadius: 20 }}><Text style={{ color: '#fff' }}>Thanh toán khi nhận hàng</Text></TouchableOpacity>
                    <TouchableOpacity  style={{ backgroundColor: '#FF5722', height: 40, justifyContent: 'center', borderRadius: 20 }}><Text style={{ color: '#fff' }}>Thanh toán qua PayPal</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Baokimpayment', { arrproduct: cartArray, total: total })} style={{ backgroundColor: '#FF5722', height: 40, justifyContent: 'center', borderRadius: 20 }}><Text style={{ color: '#fff' }}>Thanh toán qua bảo kim</Text></TouchableOpacity>
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
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#FF5722',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100

    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FF5722',
        fontSize: 15,
        fontWeight: 'bold',

    },
    checkoutTitle2: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',

    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        opacity: 0.9
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