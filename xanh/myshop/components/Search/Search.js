import React from 'react';
import { Button, View, Text, Image, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import search from '../Api/search'
import global from '../Api/Global'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const { width } = Dimensions.get('window')

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: '',


        };
    };
    onSearch() {
        const { txtSearch } = this.state
        //  this.setState({ txtSearch: '' })
        search(txtSearch)
            .then(products => global.setArraySearch(products))
            .catch(err => console.log('loi r', err))
    }
    search_realtime(e) {
        this.setState({ txtSearch: e.nativeEvent.text })
        const { txtSearch } = this.state
        search(txtSearch)
            .then(products => global.setArraySearch(products))
            .catch(err => console.log('loi r', err))
    }


    render() {
        const { product } = this.state
        return (
            <View style={{ backgroundColor: '#3a455c', height: 57, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={style.text}
                        placeholder='Nhập nội dung cần tìm kiếm'
                        underlineColorAndroid='transparent'
                        onChange={this.search_realtime.bind(this)}
                        onSubmitEditing={this.onSearch.bind(this)}
                        onFocus={() => this.props.navigation.navigate('Tab3')}
                        value={this.state.txtSearch}

                    />
                    <View style={{ alignItems: 'center', padding: 4 }}>
                        <TouchableOpacity onPress={this.onSearch.bind(this)}>
                            <FAIcon name='search' style={{ fontSize: 30, color: 'white' }} />
                        </TouchableOpacity>
                    </View>


                </View>

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
            width: (width - 35),
            borderRadius: 15,



        }
    }

)
