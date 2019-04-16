import React from 'react';
import { Button, View, Text, Image, TouchableOpacity, TouchableHighlight, Title } from 'react-native';
//import { SearchBar, Header } from 'react-native-elements';
import { Container, Header, Left, Body, Right, Icon } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome'
//import { Icon } from 'react-native-elements';
import txtsearch from '../Search/Search'


export default class HeaderComponent extends React.Component {
    render() {


        return (

            <Header style={{ backgroundColor: '#ff5722', height: 90, borderBottomColor: '#757575', borderBottomWidth: 3 }}>
                <Left style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='md-menu'
                            style={{ color: 'white', marginRight: 15 }} />
                    </TouchableOpacity>

                    <FAIcon name='amazon' style={{ fontSize: 32, color: 'white' }} />

                </Left>

                <Right>
                    <TouchableOpacity >
                    <FAIcon name='truck' style={{ fontSize: 32, color: 'white' }} />

                    </TouchableOpacity>

                </Right>
            </Header>

        );
    }

};