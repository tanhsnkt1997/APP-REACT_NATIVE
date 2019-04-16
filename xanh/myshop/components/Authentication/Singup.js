import React from 'react';
import { Button, View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert,Dimensions } from 'react-native';
import register from '../Api/register'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const { width } = Dimensions.get('window');

export default class Singup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            repass: '',
        }
    }
    deleteemail() {
        this.setState({ email: '' })
    }




    showAlertok() {
        Alert.alert(
            'Thông báo',
            'Đăng kí thành công đăng nhập ngay ',
            [
                { text: 'Ok', onPress: this.props.gotoSignin() },

            ],
            { cancelable: false }
        )
    } s
    showAlertfail() {
        Alert.alert(
            'Thông báo',
            'Đăng kí không thành công email đã tồn tại',
            [
                { text: 'Ok', onPress: this.deleteemail.bind(this) },

            ],
            { cancelable: false }
        )
    }
    showAlertcheck() {
        Alert.alert(
            'Thông báo',
            'password vả repass phải có giá trị bằng nhau',
            [
                { text: 'Ok', onPress: this.setState({repass:null})},

            ],
            { cancelable: false }
        )
    }

     registeruser() {
         if (this.state.password===this.state.repass )
         {
            const { name, email, password } = this.state;
            register(name, email, password)
                .then(res => {
                    if (res === 'THANH_CONG')
                        return this.showAlertok()
    
    
                    this.showAlertfail()
                });
         }
         else{
             this.showAlertcheck()
         }
        
    }


    render() {
        const { input, bigButton, buttonText,imputicon } = style
        return (
            <View>
                <View>
                    <FAIcon name='user' size={28} color={'rgba(255,255,255,0.7)'} style={imputicon} />
                    <TextInput
                        style={input}
                        placeholder="Enter your Name"
                        value={this.state.name}
                        onChangeText={text => this.setState({ name: text })}
                    />
                </View>
                <View>
                    <FAIcon name='envelope' size={28} color={'rgba(255,255,255,0.7)'} style={imputicon} />
                    <TextInput
                        style={input}
                        placeholder="Enter your email"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </View>
                <View>
                    <FAIcon name='unlock' size={28} color={'rgba(255,255,255,0.7)'} style={imputicon} />
                    <TextInput
                        style={input}
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })}

                        secureTextEntry
                    />
                </View>
                <View>
                    <FAIcon name='unlock' size={28} color={'rgba(255,255,255,0.7)'} style={imputicon} />
                    <TextInput
                        style={input}
                        placeholder="Enter your Re-password"
                        value={this.state.repass}
                        onChangeText={text => this.setState({ repass: text })}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={bigButton} onPress={this.registeruser.bind(this)} >
                    <Text style={buttonText}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create(
    {
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
        imputicon: {
            position: 'absolute',
            top: 10,
            left: 37
        }
    }
)