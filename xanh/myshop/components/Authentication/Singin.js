import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
import login from '../Api/login'
import global from '../Api/Global'
import savetoken from '../Api/savetoken'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const { width } = Dimensions.get('window');

export default class Singin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
        }
    }

    async loginxxxxxx() {
        const { email, password } = this.state
        if (email === null) {
            this.Fixnull()
        }
        else {
            await login(email, password)
                .then(res => {
                    if (res === 'saithongtin') {
                        this.Failsigin()
                    }
                    else {
                        global.onsignin(res.user)
                        //  global.arrayinfologin(res)

                        this.props.navigation.goBack()
                        savetoken(res.token)
                    }
                })
               
                .catch(err => console.log(err))
        }
    }

    Failsigin() {
        Alert.alert(
            'Thông báo',
            'Kiểm tra lại thông tin đăng nhập',
            [

                { text: 'OK', onPress: () => this.setState({ password: null }) },
            ],
            { cancelable: false }
        )
    }

    Fixnull() {
        Alert.alert(
            'Thông báo',
            'Vui lòng nhập đây đủ thông tin',
            [

                { text: 'OK' },
            ],
            { cancelable: false }
        )
    }

    render() {
        const { inputStyle, bigButton, buttonText, input, imputicon } = style
        //const check = this.state.email === null ? this.Fixnull() : this.loginxxxxxx.bind(this)
        return (
            <View >

                <FAIcon name='user' size={28} color={'rgba(255,255,255,0.7)'} style={imputicon} />

                <TextInput
                    style={input}
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />

                <View>
                    <FAIcon name='unlock' size={28} color={'rgba(255,255,255,0.7)'} style={imputicon} />
                    <TextInput
                        style={input}
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                        secureTextEntry
                    />

                    <TouchableOpacity style={bigButton} onPress={this.loginxxxxxx.bind(this)} >
                        <Text style={buttonText}>SIGN IN NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}


const style = StyleSheet.create(
    {

        bigButton: {
            height: 50,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonText: {

            color: '#fff',

        },
        input: {
            width: width - 45,
            height: 45,
            borderRadius: 25,
            // fontSize:16,
            paddingLeft: 45,
            backgroundColor: 'rgba(0,0,0,0.35)',
            color: 'rgba(255,255,255,0.7)',
            marginHorizontal: 25,
            marginBottom: 10

        },
        imputicon: {
            position: 'absolute',
            top: 10,
            left: 37
        }
    }
)