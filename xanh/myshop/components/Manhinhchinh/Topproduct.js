import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ListView } from 'react-native';
import StarRating from 'react-native-star-rating';





const { width } = Dimensions.get('window');
const produtWidth = (width - 90) / 2;
const productImageHeight = (produtWidth / 450) * 451;

export default class Topproduct extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
    }
    componentWillReceiveProps(nextProps) {
        const { topproducts } = nextProps;
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(topproducts) })
    }
    render() {
        //const { topProducts } = this.props;
        const { navigation } = this.props;
        const { cartArray } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.tittle}>
                    <Text style={styles.text}>SẢN PHẨM BÁN CHẠY</Text>
                </View>



                <ListView
                    contentContainerStyle={styles.body}
                    enableEmptySections
                    dataSource={this.state.dataSource}
                    renderRow={(e) => (
                        //   <View style={styles.body}>
                        <TouchableOpacity style={styles.productcontainer} onPress={() => navigation.push('Detail', {
                            product: e
                        })} key={e.id}  >
                            <Image source={{ uri: `http://10.60.253.0/api/images/product/${e.images[0]}` }} style={styles.imgedit} />

                            <Text style={styles.productname}>{e.name}</Text>
                            <Text style={styles.productprice}>{e.price} $</Text>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    starSize={10}
                                    rating={this.props.rating}
                                    //selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    fullStarColor='orange'
                                    emptyStarColor='orange'
                                />
                            </View>

                        </TouchableOpacity>


                    )}
                    renderSeparator={(sectionId, rowId) => {
                        if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />
                        return null
                    }}
                />



            </View>




        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FFF',
        margin: 5,
        paddingBottom: 10,
        borderRadius: 20,
        elevation: 2,



    },
    tittle: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    text: {
        fontSize: 20,
        color: '#D3D3CF',
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10,
    },
    productcontainer: {
        width: produtWidth,
        paddingBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginBottom: 15

    },
    imgedit: {
        width: produtWidth,
        height: productImageHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    productname: {
        textAlign: 'center',
        color: "#FFF",
        fontWeight: '800',
        marginTop: 5,
    },
    productprice: {
        paddingLeft: 10,
        color: '#662F90',
        textAlign: 'center',

    },



});
/*

                <View style={styles.body}>
                    {topproducts.map(e => (
                        <TouchableOpacity style={styles.productcontainer} onPress={() => navigation.navigate('Detail', {
                            id: e.id, name: e.name, price: e.price, color: e.color,
                            material: e.material, description: e.description, images: e.images
                        })} key={e.id}  >
                            <Image source={{ uri: `http://192.168.0.181:8080/api/images/product/${e.images[0]}` }} style={styles.imgedit} />
                            <Text style={styles.productname}>{e.name}</Text>
                            <Text style={styles.productprice}>{e.price} $</Text>
                        </TouchableOpacity>

                    )
                    )}
                </View>
*/