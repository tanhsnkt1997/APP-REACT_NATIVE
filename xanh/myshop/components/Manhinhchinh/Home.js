import React from 'react';
import { Button, View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import Conlection from './Conlection'
import Category from './Category';
import Topproduct from './Topproduct';
import screen from '../../Access/src/media/temp/components_react_native.jpg'




export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topproducts: []
        }

    }

    componentWillReceiveProps(nextProps) {
        const { topproducts } = nextProps;
        this.setState({
            topproducts
        })

    }
    /*componentWillReceiveProps(nextProps){
            console.log('----------------IN HOME-------------------------------')
            console.log(nextProps.topproducts)
            console.log('----------------IN HOME-------------------------------')
            console.log(nextProps.types)
            
      }*/
    render() {
        const { types } = this.props;

        return (
            <View>


                <ScrollView >
                    <Category {...this.props} types={types} topproducts={this.state.topproducts} />
                    <Conlection {...this.props} />

                    <Topproduct {...this.props} topproducts={this.state.topproducts} />

                </ScrollView>

            </View>

        );
    }
}