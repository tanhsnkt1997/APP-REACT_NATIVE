import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, ImageBackground, Image } from 'react-native';
import register from './Api/register'
import Singin from './Authentication/Singin'
import Singup from './Authentication/Singup'
import imagebackground from '../Access/src/media/temp/components_react_native.jpg'
import logoreact from '../Access/src/media/temp/logoreact.png'

const { width, height } = Dimensions.get('window');

export default class Authentication extends React.Component {

    constructor(props) {
        super(props)
        //// true or false
        this.state = { isSignin: true }
    }

    //////////////TEST DANG KI
    //componentDidMount(){
    //  register('anhanh','xanha','123')
    //.then(res=>console.log(res))
    //}

    SignIn() {
        this.setState({ isSignin: true })
    }

    SignUp() {
        this.setState({ isSignin: false })
    }

    gotoSignin() {
        this.setState({ isSignin: true })
    }


    static navigationOptions = () => ({
        title: 'Tài khoản',

        headerStyle: {
            backgroundColor: '#fff',
        },

        headerTitleStyle: {
            textAlign: 'center', justifyContent: "center", alignSelf: "center", width: "80%", fontSize: 20
        },
    });
    render() {

        const { Wap, Control, SignUp, SignIn, inactivecolor,
            activecolor, imges, imgescontainer, input } = styles;
        ////////////////////////////////////////////

        ///////////////////////////////////////////////
        const mainjsx = (this.state.isSignin ? <Singin {...this.props} /> : <Singup {...this.props} gotoSignin={this.gotoSignin.bind(this)} />);
        const isSignin = this.state;
       // console.log(isSignin)
        return (

            <ImageBackground source={imagebackground} style={Wap}>
                <View style={imgescontainer} >

                    <Image source={logoreact} style={imges} />

                </View>

                <View>
                    {mainjsx}
                </View>
                <View style={Control}>
                    <TouchableOpacity style={SignIn} onPress={this.SignIn.bind(this)}>
                        <Text style={this.state.isSignin === true ? inactivecolor : activecolor} >Đăng nhập</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={SignUp} onPress={this.SignUp.bind(this)}>
                        <Text style={this.state.isSignin === false ? inactivecolor : activecolor} >Đăng kí</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    Wap: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imgescontainer: {

    },

    imges: {
        height: 120,
        width: 120
    },


    Control: {
        flexDirection: 'row',
        width: 250,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15


    },
    SignIn: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 40,
        marginRight: 2
    },
    SignUp: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 40,
        marginLeft: 2

    },
    inactivecolor: {
        color: '#3EBA77'
    },
    activecolor: {
        color: '#D7D7D7'
    },
    inputStyle: {
        backgroundColor: "#FFF",
        margin: 10,
        height: 40,
        borderRadius: 20,
        paddingLeft: 30
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





})

/*

            <View style={Wap}>

                {mainjsx}

                <View style={Control}>
                    <TouchableOpacity style={SignIn} onPress={this.SignIn.bind(this)}>
                        <Text style={this.state.isSignin === true ? inactivecolor: activecolor } >Đăng nhập</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={SignUp} onPress={this.SignUp.bind(this)}>
                        <Text style={this.state.isSignin === false ?  inactivecolor:activecolor} >Đăng kí</Text>
                    </TouchableOpacity>
                </View>
            </View>
*/