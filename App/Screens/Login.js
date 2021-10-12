import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


class LoginScreen extends React.Component {
    render() {

        return (
            <View style={{}}>
                <ImageBackground blurRadius={15}
                    style={{ height: hp('100%'), width: wp('100%'), alignSelf: 'center' }}
                    source={require("../Assets/rrr.jpg")}>


                    <View style={{ marginHorizontal: 30, marginTop:hp('20%') }}>
                        <Text style={{ fontSize: 20, marginVertical: 10, color: '#707070', fontWeight: 'bold' }}>UserName</Text>
                        <View style={Styles.v1}>
                            <TextInput placeholderTextColor='#70707069'
                                style={{ fontWeight: 'bold' }}
                                placeholder={'Enter Username'} />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 30 }}>
                        <Text style={{ fontSize: 20, marginVertical: 10, color: '#707070', fontWeight: 'bold' }}>Password</Text>
                        <View style={Styles.v1}>
                            <TextInput placeholderTextColor='#70707069'
                                style={{ fontWeight: 'bold' }}
                                placeholder={'Enter Password'} />
                        </View>
                    </View>

                    <TouchableOpacity style={{ alignSelf: 'center', top: 40 }}>
                        <Text style={{ fontSize: 18, color: '#12ACD9' }}>Forgot Password</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.touch}
                        onPress={() => this.props.navigation.navigate("Home")}>
                        <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Login</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}

export default LoginScreen;


const Styles = StyleSheet.create({
    v1: {
        height: hp('5%'), borderWidth: 0, borderRadius: 5, borderColor: '#00000029', paddingLeft: 15,
        elevation: 5, backgroundColor: 'white'
    }, touch: {
        height: hp('5%'), alignItems: 'center', marginVertical: hp('10%'),
        width: wp('50%'), borderRadius: 7, alignSelf: 'center', backgroundColor: '#12ACD9'
    }
});
