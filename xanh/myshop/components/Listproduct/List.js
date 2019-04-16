import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet,
    Image, ScrollView, ListView, RefreshControl, ActivityIndicator, Dimensions
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome'
import { Container, Header, Content, Picker, Form } from "native-base";
import Listproductapi from '../../components/Api/getlistproduct'




const url = 'http://10.60.253.0/api/images/product/'
const { width, height } = Dimensions.get('window');
export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            listproduct: ds,
            ///////////////////////
            refreshing: false,
            page: 1,
            loading: true,
            sort1: null,
            sort2: null,
            up: null,
            selected: "key1"
            //newpage: 1


        }
        this.arr = []
        this.brr = []
    }

    componentWillMount() {
        setTimeout(() =>
            this.setState({ loading: false }), 3000
        )
    }


    componentDidMount() {
        const { cc } = this.props.navigation.state.params
        const id_type = cc ? 4 : this.props.navigation.state.params.e.id

        Listproductapi(id_type, 1)
            .then(arrproduct => {

                this.arr = arrproduct
                this.brr = arrproduct
                this.setState({ sort1: arrproduct, sort2: arrproduct })
                this.setState({ listproduct: this.state.listproduct.cloneWithRows(this.arr) })
            })
            .catch(err => console.log('loi r', err))
        //  console.log(id_type)
    }






    godetail() {

        const { navigation } = this.props
        navigation.navigate('Detail')
    }



    loadmore() {

        const { cc } = this.props.navigation.state.params
        const id_type = cc ? cc : this.props.navigation.state.params.e.id

        Listproductapi(id_type, this.state.page)
            .then(arrproduct => {
                if (this.state.up === true) {
                    this.setState({ page: this.state.page + 1 })
                    this.arr = arrproduct.concat(this.arr)
                    this.arr.sort((a, b) => a.price - b.price)

                    this.setState({
                        listproduct: this.state.listproduct.cloneWithRows(this.arr),
                        refreshing: false

                    })
                }

                else {

                    if (this.state.up === false) {
                        this.setState({ page: this.state.page + 1 })
                        this.arr = arrproduct.concat(this.arr)
                        this.arr.sort((a, b) => b.price - a.price)
                        this.setState({
                            listproduct: this.state.listproduct.cloneWithRows(this.arr),
                            refreshing: false

                        })
                    }
                    else {

                        this.setState({ page: this.state.page + 1 })
                        this.arr = arrproduct.concat(this.arr)
                        //  this.setState({ sort2: arrproduct.concat(this.arr) })

                        this.setState({
                            listproduct: this.state.listproduct.cloneWithRows(this.arr),
                            refreshing: false

                        })

                    }

                }

            })
            .catch(err => console.log('loi r', err))
    }

    sortupprice() {
        sort = this.state.sort1.sort((a, b) => a.price - b.price)
        this.setState({
            listproduct: this.state.listproduct.cloneWithRows(sort), up: true, page: 1
        })
    }

    sortdownprice() {
        const sort = this.state.sort2.sort((a, b) => b.price - a.price)
        this.setState({
            listproduct: this.state.listproduct.cloneWithRows(sort), up: false, page: 1
        })
    }

    //console.log('loc mang', this.state.listproduct)

    onValueChange(value) {
        this.setState(
            {
                "selected": value
            },
            () => {
                // here is our callback that will be fired after state change.
                if (this.state.selected === 'key3') {
                    sort = this.state.sort1.sort((a, b) => a.price - b.price)
                    this.setState({
                        listproduct: this.state.listproduct.cloneWithRows(sort), up: true, page: 1
                    })
                }
                else {
                    if (this.state.selected === 'key4') {
                        sort = this.state.sort1.sort((a, b) => b.price - a.price)
                        this.setState({
                            listproduct: this.state.listproduct.cloneWithRows(sort), up: false, page: 1
                        })
                    }
                    else return ''
                }

            }
        );

    }


    render() {
        const {
            container, header, wrapper, backStyle, titleStyle,
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
        const { e } = this.props.navigation.state.params
        const { bb } = this.props.navigation.state.params
   
        return (

            <View style={container}>


                <View style={wrapper}>

                    <View style={header}>

                        <Text style={titleStyle}>{bb ? bb : e.name}</Text>
                        <Picker
                            note
                            mode="dropdown"
                            style={{ width: 120 }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Giá" value="" />
                            <Picker.Item label="Từ thấp lên cao" value="key3" />
                            <Picker.Item label="Từ cao xuống thấp" value="key4" />

                        </Picker>

                    </View>
                </View>

                {
                    this.state.loading === true ? <ActivityIndicator size="large" color="red" /> : null
                }
                <ListView
                    removeClippedSubviews={false}
                    dataSource={this.state.listproduct}
                    onEndReached={this.loadmore.bind(this)}
                    contentContainerStyle={wrapper}

                    renderRow={e => (

                        <View style={productContainer}>
                            <Image style={productImage} source={{ uri: `${url}${e.images[0]}` }} />
                            <View style={productInfo}>
                                <Text style={txtName}>{e.name}</Text>
                                <Text style={txtPrice}>{e.price} $</Text>
                                <Text style={txtMaterial}>{e.material} </Text>
                                <View style={lastRowInfo}>
                                    <Text style={txtColor}>color: {e.color}</Text>
                                    <View style={{ backgroundColor: e.color.toLowerCase(), height: 16, width: 16, borderRadius: 8 }} />
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {
                                        product: e
                                    })}>
                                        <Text style={txtShowDetail}>Chi tiết</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    )}


                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({ refreshing: true })
                                const { cc } = this.props.navigation.state.params
                                const id_type = cc ? cc : this.props.navigation.state.params.e.id
                                const newpage = this.state.page + 1
                                Listproductapi(id_type, newpage)
                                    .then(arrproduct => {
                                        this.arr = arrproduct.concat(this.arr)
                                        this.setState({
                                            listproduct: this.state.listproduct.cloneWithRows(this.arr),
                                            refreshing: false

                                        })
                                    })
                                    .catch(err => console.log('loi r', err))
                            }
                            }

                        />
                    }
                />



            </View>





        );
    }
}



/*

  loadmore() {

        const { cc } = this.props.navigation.state.params
        const id_type = cc ? cc : this.props.navigation.state.params.e.id
        const newpage = this.state.page + 1
        Listproductapi(id_type, newpage)
            .then(arrproduct => {
                if (this.state.up === true) {

                    this.arr = arrproduct.concat(this.arr)
                    this.setState({ sort: this.arr.sort((a, b) => a.price - b.price) })
                    this.setState({
                        listproduct: this.state.listproduct.cloneWithRows(this.arr),
                        refreshing: false

                    })
                }

                else {

                    if (this.state.up === false) {

                        this.arr = arrproduct.concat(this.arr)
                        this.setState({ sort1: this.arr.sort((a, b) => b.price - a.price) })
                        this.setState({
                            listproduct: this.state.listproduct.cloneWithRows(this.arr),
                            refreshing: false

                        })
                    }
                    else {
                        this.setState({ sort2: arrproduct.concat(this.arr) })
                        this.arr = arrproduct.concat(this.arr)
                        this.setState({
                            listproduct: this.state.listproduct.cloneWithRows(this.arr),
                            refreshing: false

                        })
                    }

                }

            })
            .catch(err => console.log('loi r', err))
    }
*/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        justifyContent: 'center',
        // alignItems:'center',
        width: width,
        height: height
    },
    header: {
        // flexDirection: 'row',
        //  justifyContent: 'center',
        // alignItems: 'center',
        //   height: 1 / 8 * height,
        //  padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        // margin: 10,
        paddingHorizontal: 10,
    },
    backStyle: {
        width: 30,
        height: 30
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
        textAlign: 'center',
        color: '#B10D65',
        fontSize: 20,
        // paddingTop: 80
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {

        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {

        color: '#B10D65',
    },
    txtMaterial: {

    },
    txtColor: {
        color: '#B10D65'
    },
    txtShowDetail: {

        color: '#B10D65',
        fontSize: 11
    }
});



/*
<ScrollView style={wrapper}>
            <View style={header}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Image source={backList} style={backStyle} />
                </TouchableOpacity>
                <Text style={titleStyle}>{category.name}</Text>
                <View style={{ width: 30 }} />
            </View>
            <View style={productContainer}>
                <Image style={productImage} source={sp1} />
                <View style={productInfo}>
                    <Text style={txtName}>Lace Sleeve Si</Text>
                    <Text style={txtPrice}>117$</Text>
                    <Text style={txtMaterial}>Material silk</Text>
                    <View style={lastRowInfo}>
                        <Text style={txtColor}>Colo RoyalBlue</Text>
                        <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                        <TouchableOpacity>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        */