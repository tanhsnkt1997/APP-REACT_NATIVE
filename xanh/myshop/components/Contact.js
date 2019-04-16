import React from 'react';
import { Button, View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import contacticon from '../Access/src/media/appIcon/contact.png'
import HeaderComponent from './Manhinhchinh/HeaderComponent'
import Search from './Search/Search';


import phoneIcon from '../Access/src/media/appIcon/phone.png';
import mailIcon from '../Access/src/media/appIcon/mail.png';
import messageIcon from '../Access/src/media/appIcon/message.png';
import locationIcon from '../Access/src/media/appIcon/location.png';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'

const { width, height } = Dimensions.get('window');

export default class Contact extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Liên hệ',
        title: 'Cart',
        tabBarIcon: ({ tintColor }) =>
            (<Image source={contacticon}
                style={{ tintColor: tintColor, width: 30, height: 30 }} />
            ),
        tabBarOptions: { activeTintColor: '#42dff4' },
      //  headerStyle: { backgroundColor: '#34B089', height: 90, },
        
    };
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        //933x465


        return (

            <View style={wrapper}>
                <View >
                    <HeaderComponent {...this.props} />
                    <Search {...this.props} />
                </View>
                <View style={mapContainer}>
                    <MapView
                        style={{ width: width - 20, height: 300 }}
                        initialRegion={{
                            latitude: 10.803017,
                            longitude: 106.714440,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >


                        <Marker
                            coordinate={{ latitude: 10.803017, longitude: 106.714440 }}
                            title="SHOP XANH"
                            description="SHOP BY XANH"
                        />

                    </MapView>
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <Image source={locationIcon} style={imageStyle} />
                        <Text style={infoText}>Kí túc xá khu B ĐHQG HCM</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={phoneIcon} style={imageStyle} />
                        <Text style={infoText}>(+84) 01694472176</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={mailIcon} style={imageStyle} />
                        <Text style={infoText}>tanhsnkt1997@gmail.com</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <Image source={messageIcon} style={imageStyle} />
                        <Text style={infoText}>xquynh98@gmail.com</Text>
                    </View>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: (width / 1260) * 662,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 20,
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {

        color: '#AE005E',
        fontWeight: '500'
    },

});