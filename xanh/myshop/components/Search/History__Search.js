import React from 'react';
import { Button, View, Text, Image, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import searrch from '../Search'

const { width } = Dimensions.get('window')

export default class History_Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: '',


        };
    };



    render() {
        const { product } = this.state
        return (
            <View style={{ backgroundColor: '#3a455c', justifyContent: 'center', alignItems: 'center' }}>
                <Search {...this.props}/>
                    



            </View>
    
    
            );
        }
    }
    
    const style = StyleSheet.create(
    {
                    text: {
                    backgroundColor: '#FFF',
                borderColor: '#F0FC',
                borderWidth: 2,
                height: 37,
                width: (width - 35)
    
            }
        }
    
    )
