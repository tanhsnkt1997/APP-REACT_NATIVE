import React, { Component } from 'react';

import {
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import Global from '../Api/Global'
import { Button } from 'native-base';

////const back = require('../../../../media/appIcon/back.png');
const cart = require('../../Access/src/media/appIcon/cart.png');

const url = 'http://10.60.253.0/api/images/product/'

export default class ProductDetail extends Component {
    addThisProductToCart() {
        const { product } = this.props.navigation.state.params;
        //console.log(product)
        Global.addProductToCart(product);

    }


    render() {



        const { navigation } = this.props;
        const { product } = navigation.state.params;



        const {
            wrapper, cardStyle, header,
            footer, backStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, productImageStyle, descStyle, txtMaterial, txtColor, aa, bb, buttonbuy
        } = styles;
        return (
            <View style={wrapper}>
                <View style={cardStyle}>

                    <View style={imageContainer}>
                        <Swiper showsButtons={true} autoplay={true} >
                            <View style={aa}>
                                <Image source={{ uri: `${url}${product.images[0]}` }} style={productImageStyle} />
                            </View>
                            <View style={bb}>
                                <Image source={{ uri: `${url}${product.images[1]}` }} style={productImageStyle} />
                            </View>

                        </Swiper>
                    </View>
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{product.name.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>{product.price} $</Text>
                            </Text>

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>

                            <TouchableOpacity style={buttonbuy} onPress={this.addThisProductToCart.bind(this)} >
                                <Text style={{ textAlign: 'center', color: '#FFF' }}>Mua Ngay</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={descContainer}>
                            <Text style={descStyle}>{product.description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={txtMaterial}>Chất liệu: {product.material}</Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={txtColor}>Màu: {product.color}</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: product.color.toLowerCase(), borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70' }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },


    buttonbuy: {
        width: 100,
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 9,
        marginTop: 5,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'blue'

    },

    aa: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#9DD6EB',
    },
    bb: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //   backgroundColor: 'red',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 45
    },
    cartStyle: {
        width: 50,
        height: 50,
        marginLeft: 10,
        //backgroundColor:'red'


    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 0,
        marginVertical: 10
    },
    textBlack: {

        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {

        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {

        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 3,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5,
        //  flexDirection:'row'
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',

    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',

    }
});


/*
<View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                            <Image source={{ uri: `${url}${product.images[0]}` }} style={productImageStyle} />
                            <Image source={{ uri: `${url}${product.images[1]}` }} style={productImageStyle} />
                        </ScrollView>
                    </View>
*/


/*
 <View style={header}>
                        <TouchableOpacity onPress={this.addThisProductToCart.bind(this)}>
                            <Image style={cartStyle} source={cart} />
                        </TouchableOpacity>
                    </View>

*/