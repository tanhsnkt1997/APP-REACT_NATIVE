import React from 'react';
import { Button, View, Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';




const { height, width } = Dimensions.get('window');
const { url } = 'http://192.168.0.181:8080/api/images/type/';

export default class Category extends React.Component {
    gotolistpoduct() {
        const { navigation } = this.props;
        navigation.navigate('List', {})
    }
    render() {
        const { types } = this.props;
        const swiper = (
            <Swiper autoplay={true} >
                {types.map(e => (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('List', { e: e })} key={e.id}>
                        <ImageBackground source={{ uri: `http://10.60.253.0/api/images/type/${e.image}` }} style={styles.Imagestyle} >
                         
                        </ImageBackground>
                    </TouchableOpacity>
                )
                )}
            </Swiper>
        )
        return (
            <View style={styles.Wap}>
                <View >
                    <Text style={styles.Textedit}>
                        DANH SÁCH MẶT HÀNG
                    </Text>
                </View>
                {types.length ? swiper : null}
            </View>
        );
    }
}


//933x465
const imageWidth = width - 15;
const imageHeight = (imageWidth / 1242) * 373;

const styles = StyleSheet.create({
    Wap: {
        flex:1,
        height: height * 0.36,
        backgroundColor: '#FFF',
        margin: 8,
    },
    Textedit: {
        fontSize: 18,
        color: "#AFAEAF",
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',

    },
    Imagestyle: {
        height: imageHeight,
        width: imageWidth,
        alignItems: 'center',
        justifyContent: 'center',
     //   position: 'absolute',
    //  resizeMode: 'contain',

    },
    textedit: {
        fontSize: 20,
        color: '#9A9A9A'
    }




})