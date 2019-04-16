import React from 'react';
import { Button, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Baner from '../../Access/src/media/temp/banner.jpg'

const { height, width } = Dimensions.get('window');

export default class Conlection extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            name: 'xanh',
            id: 'Dacbiet'
        }
    }

    render() {
        return (
            <View style={styles.Wap}>
                <View >
                    <Text style={styles.Textedit}>
                        SẢN PHẨM THU ĐÔNG
                    </Text>
                </View>
                <View style={{ flex: 4 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('List', { bb: this.state.name ,cc:this.state.id})}>
                        <Image source={Baner} style={styles.Imagestyle} />
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

//933x465
const imageWidth = width - 15;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    Wap: {

        height: height * 0.31,
        backgroundColor: '#FFF',
        margin: 8,
        borderRadius: 25,
        elevation: 2,
        backgroundColor:'#a6ddff'
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
    }


})