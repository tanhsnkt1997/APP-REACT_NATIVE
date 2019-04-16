import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import profileicon from '../../Access/src/media/temp/profile.png'
import global from '../Api/Global'
import saveToken from '../Api/savetoken'
import { Icon, Button } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome'
import { ImagePicker } from 'expo';
import uphinh from '../Api/uphinh'
import gettoken from "../Api/gettoken"
import md5 from 'md5';
//import md5 to use md5()

const urlImage = 'http://10.60.253.0/api/images/user/'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        //// true or false
        this.state = {
            user: null,
            image: null,
            nameimages: null,


        }
        global.onsignin = this.onsignin.bind(this)

    }

    onsignin(user) {
        if(user===null)
        {
            this.setState({ user: user })
            saveToken('')
        }
        this.setState({ user: user })
    }

    onsignout() {
        this.setState({ user: null })
        saveToken('')
    }

    async takePhotoAndUpload() {

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16, 9],
        });


        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }

        let localUri = result.uri;
        let filename = localUri.split('/').pop();


        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        //console.log('-----------------', type)
        let formData = new FormData();
        formData.append('photo', { uri: localUri, name: filename, type });

        return await fetch('http://10.60.253.0/api/testupload.php', {
            method: 'POST',
            body: formData,
            header: {
                'content-type': 'multipart/form-data',
            },
        })
            .then(res => res.text())
            .then(a => {
                if (a === 'YES') {
                    gettoken()
                        .then(a =>
                            uphinh(a, filename)
                                .then(res =>this.setState({ nameimages: res.ImagesUser })
                                )
                        )
                }
                else console.log(1)
            })
    }

    render() {

        const { user } = this.state

        const logoutjsx = (
            <View style={{ marginTop: 10 }}>
                <FAIcon name='sign-in' size={28} color={'black'} style={{
                    position: 'absolute',
                    top: 10,
                    left: 37,
                }} />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Authentication')}
                    style={{
                        alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.37)',
                        height: 50, borderRadius: 20, paddingHorizontal: 70
                    }}>

                    <Text style={{ color: '#FFF', fontSize: 15 }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        );

        const loginjsx = (

            <View  >
                <   Text style={{ color: '#FFF', textAlign: "center", marginBottom: 10 }}>{user ? user.name : ''}</Text>

                <View style={style.space}>
                    <FAIcon name='info' size={28} color={'black'} style={{
                        position: 'absolute',
                        top: 10,
                        left: 37
                    }} />
                    <TouchableOpacity style={style.btnout} onPress={() => this.props.navigation.navigate('Changeinfo', { user: this.state.user })}>
                        <Text style={{ color: '#FFF', textAlign: "center" }}>Thay đổi thông tin</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.space}>
                    <FAIcon name='exchange' size={28} color={'black'} style={{
                        position: 'absolute',
                        top: 10,
                        left: 37
                    }} />
                    <TouchableOpacity style={style.btnout} onPress={() => this.props.navigation.navigate('Orderhistory')}>
                        <Text style={{ color: '#FFF', textAlign: "center" }}>Lịch sử mua hàng</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.space}>
                    <FAIcon name='user-circle' size={28} color={'black'} style={{
                        position: 'absolute', top: 10, left: 37
                    }} />
                    <TouchableOpacity style={style.btnout}

                        onPress={this.takePhotoAndUpload.bind(this)}
                    >
                        <Text style={{ color: '#FFF', textAlign: "center" }}>Thay đổi avatar</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.space}>
                    <FAIcon name='key' size={28} color={'black'} style={{
                        position: 'absolute', top: 10, left: 37
                    }} />
                    <TouchableOpacity style={style.btnout}

                        onPress={() => this.props.navigation.navigate('changepassword', { user: this.state.user })}
                    >
                        <Text style={{ color: '#FFF', textAlign: "center" }}>Thay đổi mật khẩu</Text>
                    </TouchableOpacity>
                </View>


                <View style={style.space}>
                    <FAIcon name='sign-out' size={28} color={'black'} style={{
                        position: 'absolute', top: 10, left: 37
                    }} />
                    <TouchableOpacity style={style.btnout}
                        onPress={this.onsignout.bind(this)}
                    >
                        <Text style={{ color: '#FFF', textAlign: "center" }}>Đăng xuất</Text>
                    </TouchableOpacity>


                </View>

            </View>

        );

        ///////////////////////////////
        const mainjsx = this.state.user ? loginjsx : logoutjsx;
        const loadimages = user ? user.ImagesUser : ""
        const { nameimages } = this.state
        haveImages = (
            <Image source={nameimages === null ? { uri: `${urlImage}${loadimages}` } : { uri: `${urlImage}${nameimages}` }} style={{ width: 100, height: 100, borderRadius: 100, borderWidth: 1, borderColor: '#DC143C' }} />
        )


        console.log(this.state.nameimages)
        donthaveImages = (
            <Image source={nameimages === null ? profileicon : { uri: `${urlImage}${nameimages}` }} style={{ width: 100, height: 100, borderRadius: 100, borderWidth: 1, borderColor: '#DC143C' }} />
        )
        const check = loadimages === "" ? donthaveImages : haveImages

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 26 }}>
                    {check}
                </View>
                {mainjsx}
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create(
    {
        btnout: {
            alignItems: 'center', justifyContent: 'center',
            height: 50, borderRadius: 20, paddingHorizontal: 70
        },

        space: {
            marginBottom: 10,
           
        }
    }
)

/* <DrawerItems {...this.props} />*/  /////hien cac screen cua drawer


/*
 <Image source={{ uri: `${urlImage}${loadimages}` }} style={{ width: 100, height: 100, borderRadius: 100, borderWidth: 1, borderColor: '#DC143C' }} />

*/

