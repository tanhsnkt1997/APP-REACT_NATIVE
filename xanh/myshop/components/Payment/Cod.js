import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Alert, ImageBackground,
    Dimensions
} from 'react-native';
//import backSpecial from '../Access/src/media/appIcon/backs.png';
import gettoken from '../Api/gettoken'
import sentOder from '../Api/sentOrder'
import savecart from '../Api/saveCart'
import global from '../Api/Global'
import backgroundPayment from '../../Access/src/media/temp/payment.png'
import logo from '../../Access/src/media/temp/logoreact.png'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get('window');

export default class Cod extends Component {
    constructor(props) {
        super(props);
        const { arr } = this.props.navigation.state.params;

        this.state = {
            cartArray: this.props.screenProps,
            txtName: arr.user.name,
            txtAddress: arr.user.address,
            txtPhone: arr.user.phone,

        };
    }


    async onsentOrder() {
        try {
            const cartArray = this.props.screenProps;
            const token = await gettoken()
          //  console.log("thanh toan code",token)
            const arrdetail = cartArray.map(e => ({
                id: e.product.id,
                quantity: e.quantity,
            })
            )
            const kq = await sentOder(token, arrdetail)
            if (kq === 'THEM_THANH_CONG') {
                const deletess = cartArray.map(e =>
                    e.product.id,
                )
                await global.removeAllproduct(deletess)
                this.showAlertok()
                /////go to order history
                this.props.navigation.navigate('Orderhistory')
            }
            else {
                console.log('0')
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    showAlertok() {
        const { goBack } = this.props.navigation;
        Alert.alert(
            'Thông báo',
            'thành công',
            [
                { text: 'Ok', onPress: () => this.props.navigation.push('Tab1') },

            ],
            { cancelable: false }
        )
    }
    showAlertfail() {
        Alert.alert(
            'Thông báo',
            'Thất bại vui lòng thử lại',
            [
                { text: 'Ok', onPress: this.deleteemail.bind(this) },

            ],
            { cancelable: false }
        )
    }
    render() {
        // 
        //console.log('--------------',JSON.stringify(this.state.cartArray))
        //console.log('ste',this.state.id)
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput, imageicon, imputicon,
        } = styles;

        const { txtName, txtAddress, txtPhone } = this.state

        const cartArray = this.props.screenProps;
        // console.log(this.state.cartArray)
        return (
            <ImageBackground source={backgroundPayment} style={wrapper} >

                <Text style={headerTitle}>THÔNG TIN NHẬN HÀNG CỦA BẠN</Text>
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                    <Image source={logo} style={imageicon} />
                </View>
                <View>
                    <View>
                        <FAIcon name='user' size={28} color={'rgba(255,255,255,0.7)'} style={imputicon} />
                        <TextInput
                            style={textInput}
                            placeholder="Enter your name"
                            autoCapitalize="none"
                            value={txtName}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View>
                        <FAIcon name='address-book' size={28} color={'rgba(255,255,255,0.7)'} style={imputicon} />
                        <TextInput
                            style={textInput}
                            placeholder="Enter your address"
                            autoCapitalize="none"
                            onChangeText={(text) => this.setState({ txtAddress: text })}
                            value={txtAddress}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                   
                    <View>
                    <FAIcon name='phone' size={28} color={'rgba(255,255,255,0.7)'} style={imputicon} />
                        <TextInput
                            style={textInput}
                            placeholder="Enter your phone number"
                            autoCapitalize="none"
                            value={txtPhone}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <TouchableOpacity style={signInContainer} onPress={this.onsentOrder.bind(this)}>
                        <Text style={signInTextStyle}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: height, width: width, alignItems: 'center', justifyContent: 'center'
    },


    imputicon: {
        position: 'absolute',
        top: 10,
        left: 37
    },

    imageicon: {
        height: 150,
        width: 150,

    },

    headerTitle: { color: '#fff', fontSize: 20, alignItems: 'center', justifyContent: 'center', textAlign: 'center' },

    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },

    textInput: {
        height: 45,
        width: width - 45,
        borderRadius: 25,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
        marginBottom: 10


    },
    signInTextStyle: {
        color: '#FFF', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});
