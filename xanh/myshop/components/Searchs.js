import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Dimensions, ListView, ImageBackground } from 'react-native';
//import searchicon0 from '../Access/src/media/appIcon/search.png'
import HeaderComponent from './Manhinhchinh/HeaderComponent'
import Search from './Search/Search';
import carticon0 from '../Access/src/media/appIcon/search.png'
import global from '../components/Api/Global'
import screen from '../Access/src/media/temp/components_react_native.jpg'


const url = 'http://10.60.253.0/api/images/product/'
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}


export default class Searchs extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            product: ds
        }
        global.setArraySearch = this.setSteateCartArrray.bind(this)
        // console.log(this.state.product)
    }





    static navigationOptions = {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) =>
            (<Image source={carticon0}
                style={{ tintColor: tintColor, width: 30, height: 30 }} />
            ),
        tabBarOptions: { activeTintColor: '#42dff4' }

    };


    setSteateCartArrray(arrProduct) {
        this.setState({ product: this.state.product.cloneWithRows(arrProduct) })
    }

    render() {
        const {
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage,
            txtShowDetail, showDetailContainer, wrapper
        } = styles;
        return (
            <View style={{ flex: 1 }}>

                <HeaderComponent {...this.props} />
                <Search {...this.props} />

                <ListView
                    enableEmptySections
                    removeClippedSubviews={false}
                    dataSource={this.state.product}
                    renderRow={e => (
                        <View style={product}>
                            <Image source={{ uri: `${url}${e.images[0]}` }} style={productImage} />
                            <View style={mainRight}>
                                <Text style={txtName}>{toTitleCase(e.name)}</Text>
                                <Text style={txtPrice}>{e.price} $</Text>
                                <Text style={txtMaterial}>Material: {e.material}</Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={txtColor}>{e.color}</Text>
                                    <View style={{ backgroundColor: e.color.toLowerCase(), height: 16, width: 16, borderRadius: 8, marginHorizontal: 30 }} />
                                    <View
                                        style={{
                                            height: 15,
                                            width: 15,
                                            backgroundColor: 'white',
                                            borderRadius: 15,
                                            marginLeft: 10
                                        }}
                                    />
                                </View>
                                <TouchableOpacity style={showDetailContainer} onPress={() => this.props.navigation.navigate('Detail', { product: e })}>
                                    <Text style={txtShowDetail}>Chi tiết</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )

                    }
                />
            </View>

        )
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F6F6F6',
        flex: 1
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
        borderRadius: 20,
        elevation: 2,
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
        fontSize: 15,
        fontWeight: '400',

    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',

    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',

    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 25,
        fontWeight: '400',

        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});


/*
<ScrollView style={wrapper}>
                <HeaderComponent {...this.props} />
                <Search {...this.props} />
                <View style={product}>
                    <Image source={sp1} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('black dress')}</Text>
                        <Text style={txtPrice}>100$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color white</Text>
                            <View
                                style={{
                                    height: 15,
                                    width: 15,
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    marginLeft: 10
                                }}
                            />
                        </View>
                        <TouchableOpacity style={showDetailContainer} onPress={() => this.props.navigation.navigate('Detail')}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            */