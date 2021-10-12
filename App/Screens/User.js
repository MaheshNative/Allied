import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


class User extends React.Component {
    render() {

        return (
            <View style={{}}>
                <ImageBackground blurRadius={15}
                    style={{ height: hp('100%'), width: wp('100%'), alignSelf: 'center' }}
                    source={require("../Assets/rrr.jpg")}>
                <View style={{ alignSelf: 'center' }}>
                    <Image
                        style={{ height: 50, width: 50, alignSelf: 'center', marginTop: hp('10%') }}
                        source={require("../Assets/user.png")}
                    />
                    <Text style={{ fontSize: 20, margin: 10, color: 'black', fontWeight: 'bold' }}>
                        Mahesh Bairi
                    </Text>

                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>EMail</Text>
                    <Text style={{ borderBottomWidth: 0.5 }}>maheshxyz@gmail.com</Text>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 50 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Phone</Text>
                    <Text style={{ borderBottomWidth: 0.5 }}>123456789</Text>
                </View>
                <TouchableOpacity style={Styles.touch}
                    onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>LogOut</Text>
                </TouchableOpacity>


</ImageBackground>

            </View>
        )
    }
}

export default User;


const Styles = StyleSheet.create({
    head: {
        fontSize: 20, fontWeight: 'bold', alignSelf: 'center'
    }, tt: {
        flexDirection: 'row'
        , height: hp('4.5%'), backgroundColor: 'white', width: wp('90%'),
        borderRadius: 5, alignSelf: 'center'
    },
    card: {
        height: hp('20%'), paddingTop: 30, width: wp('40%'), margin: 10, borderRadius: 5, elevation: 10, backgroundColor: 'white'
    },
    t1: {
        fontSize: 16, fontWeight: 'bold', color: '#343434', textAlign: 'center',
    }, img: {
        height: 50, width: 50, margin: 10, alignSelf: 'center'
    },
    touch: {
        height: hp('5%'), alignItems: 'center', marginVertical: hp('10%'),
        width: wp('50%'), borderRadius: 7, alignSelf: 'center', backgroundColor: '#12ACD9'
    }
});
