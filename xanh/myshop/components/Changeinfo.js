import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Alert
} from 'react-native';
import backSpecial from '../Access/src/media/appIcon/backs.png';
import changeapi from './Api/chaneinfo'
import gettoken from './Api/gettoken'
import global from './Api/Global'
import logo from '../Access/src/media/temp/logoreact.png'

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        const { user } = this.props.navigation.state.params;
        this.state = {

            txtName: user.name,
            txtAddress: user.address,
            txtPhone: user.phone
        };
        //
       console.log(user)

    }
    

    change() {
        
        const { txtName, txtAddress, txtPhone } = this.state
        gettoken()
            .then(token => changeapi(token, txtName, txtAddress, txtPhone))
            .then(user => {
                this.setState({ user: user })
                global.onsignin(user)
            }



            )
            .then(() => this.showAlertok())
            .catch(err => console.log(err))
    }


    showAlertok() {
        const { goBack } = this.props.navigation;
        Alert.alert(
            'Thông báo',
            'Thêm thông tin thành công',
            [
                { text: 'Ok', onPress: () => this.props.navigation.goBack() },

            ],
            { cancelable: false }
        )
    } s
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

        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;

        const { txtName, txtAddress, txtPhone } = this.state
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>Thông tin tài khoản</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Authentication')}>
                        <Image source={backSpecial} style={backIconStyle} />
                    </TouchableOpacity>
                </View>
               <View style={{justifyContent:'center',alignItems:'center'}}>
                   <Image source={logo} style={{height:100,width:100}}/>
               </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Nhập tên của bạn"
                        autoCapitalize="none"
                        onChangeText={(text) => this.setState({ txtName: text })}
                        value={txtName}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Nhập địa chỉ của bạn"
                        autoCapitalize="none"
                        onChangeText={(text) => this.setState({ txtAddress: text })}
                        value={txtAddress}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Nhập số điện thoại của bạn"
                        autoCapitalize="none"
                        onChangeText={(text) => this.setState({ txtPhone: text })}
                        value={txtPhone}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={signInContainer} onPress={this.change.bind(this)}>
                        <Text style={signInTextStyle}>Thay đổi ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1,},
    header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
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

// goBackToMain() {
//     const { navigator } = this.props;
//     navigator.pop();
// }