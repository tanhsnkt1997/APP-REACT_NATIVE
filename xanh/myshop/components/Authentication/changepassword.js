import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Alert
} from 'react-native';
//import backSpecial from '../Access/src/media/appIcon/backs.png';
import gettoken from '../Api/gettoken'
import global from '../Api/Global'
import logo from '../../Access/src/media/temp/logoreact.png'
import changePass from '../Api/changePass'
import md5 from 'md5';
//import md5 to use md5()

export default class changepassword extends Component {
    constructor(props) {
        super(props);
        const { user } = this.props.navigation.state.params;
        this.state = {
            txtPass: '',
            txtNewpass: '',
            txtrePass: ''
        }
    }


    async logoutuser() {

        await global.onsignin(null)
        const { navigation } = this.props
        navigation.navigate('Authentication')
    }

    alearOk() {
        Alert.alert(
            'Thông báo',
            'Thay đổi thông tin thành công ấn OK để đăng nhập lại',
            [

                { text: 'OK', onPress: this.logoutuser.bind(this) },
            ],
            { cancelable: false }
        )
    }

    getandchangepass() {
        const oldpass = this.props.navigation.state.params.user.password
        const pass = md5(this.state.txtPass)
        const passnews = md5(this.state.txtNewpass)
        gettoken()
            .then(
                token => {

                    if (pass === oldpass) {
                        changePass(token, passnews)
                            .then(a => {
                                if (a === 'THANH_CONG') {
                                    this.alearOk()


                                }
                                else {

                                }
                            })
                    }
                    else {
                        console.log('LoI R __________')
                    }
                }
            )
    }


    render() {


        console.log('lol', this.state.txtPass)
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;

        const { txtPass, txtNewpass, txtrePass } = this.state
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>Thay đổi mật khẩu</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Authentication')}>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={logo} style={{ height: 100, width: 100 }} />
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Nhập mật khẩu cũ"
                        autoCapitalize="none"
                        onChangeText={(text) => this.setState({ txtPass: text })}
                        value={txtPass}
                        underlineColorAndroid="transparent"
                        secureTextEntry
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Nhập mật khẩu mới"
                        autoCapitalize="none"
                        onChangeText={(text) => this.setState({ txtNewpass: text })}
                        value={txtNewpass}
                        underlineColorAndroid="transparent"
                        secureTextEntry
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Xác nhận lại mật khẩu mới"
                        autoCapitalize="none"
                        onChangeText={(text) => this.setState({ txtrePass: text })}
                        value={txtrePass}
                        underlineColorAndroid="transparent"
                        secureTextEntry
                    />
                    <TouchableOpacity style={signInContainer} onPress={this.getandchangepass.bind(this)}>
                        <Text style={signInTextStyle}>Thay đổi ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, },
    header: { flex: 1, backgroundColor: '#F57223', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
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
        backgroundColor: '#F57223',
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