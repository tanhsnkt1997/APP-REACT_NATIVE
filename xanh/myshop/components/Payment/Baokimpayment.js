import React from 'react';
import {  View, Dimensions, WebView } from 'react-native';


const { width } = Dimensions.get('window')

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrname: '',
        };
    };
    render() {
        //  console.log('sssssssssssssskkk',this.state.product)
        // const { product } = this.state
        const { arrproduct } = this.props.navigation.state.params;
        const a= arrproduct.map(e=>e.product.name)
        const b= arrproduct.map(e=>e.quantity)
        const c= b.length? b.reduce((a,b)=>a+b) : 0
        const {total}=this.props.navigation.state.params
       // console.log('dang o trong bao kim',c)
        return (
            <View style={{ flex: 1}}>
                <WebView
                    source={{ uri: `https://www.baokim.vn/payment/product/version11?business=tanhsnkt1997%40gmail.com&id=&order_description=&product_name=${a}&product_price=100000&product_quantity=${c}&total_amount=${total}&url_cancel=&url_detail=&url_success=` }}
                    style={{ width: width }}
                />
            </View>

        );
    }
}

