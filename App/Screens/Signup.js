import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ImageBackground, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


class Signup extends React.Component {
    render() {

        return (
            <View style={{ height: hp('100%') }}>
                <ImageBackground blurRadius={15}
                    style={{ height: hp('100%'), width: wp('100%'), alignSelf: 'center' }}
                    source={require("../Assets/rrr.jpg")}>
                    <View style={{ alignSelf: 'center' }}>

                    </View>
                    <View style={{ marginHorizontal: 30, marginTop: hp('15%') }}>
                        <Text style={{ fontSize: 20, marginVertical: 10, fontWeight: 'bold' }}>Enter your Email</Text>
                        <View style={Styles.v1}>
                            <TextInput placeholderTextColor='#70707069'
                                style={{ fontWeight: 'bold' }}
                                placeholder={'Enter Email'} />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 30 }}>
                        <Text style={{ fontSize: 20, marginVertical: 10, fontWeight: 'bold' }}>Password</Text>
                        <View style={Styles.v1}>
                            <TextInput placeholderTextColor='#70707069'
                                style={{ fontWeight: 'bold' }}
                                placeholder={'Enter Password'} />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 30 }}>
                        <Text style={{ fontSize: 20, marginVertical: 10, fontWeight: 'bold' }}> Re-enter Password</Text>
                        <View style={Styles.v1}>
                            <TextInput placeholderTextColor='#70707069'
                                style={{ fontWeight: 'bold' }}
                                placeholder={'Enter Password'} />
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly', margin:10, marginTop:50}}>
                        <Image
                            style={{ height: 50, width: 50, marginHorizontal:20 }}
                            source={require("../Assets/google.png")}
                        />
                        <Image
                            style={{ height: 50, width: 50, marginHorizontal:20  }}
                            source={require("../Assets/facebook.png")}
                        />
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                        <Text style={{width:75, textAlign:'center'}}>SignUp with Google</Text>
                        <Text style={{width:75, textAlign:'center'}}>SignUp with Facebook</Text>
                    </View>


                    <TouchableOpacity style={Styles.touch}
                        onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={{ marginVertical: 8, fontSize: 15, fontWeight: 'bold', color: 'white' }}>Signup</Text>
                    </TouchableOpacity>

                    <View style={{ alignSelf: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text>
                            Already have account
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Login")}>
                            <Text style={{ color: 'blue', left: 10 }}>
                                Login here
                            </Text>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>
            </View>
        )
    }
}

export default Signup;


const Styles = StyleSheet.create({
    v1: {
        height: hp('5%'), borderWidth: 0, borderRadius: 5, borderColor: '#00000029', paddingLeft: 15,
        elevation: 5, backgroundColor: 'white'
    }, touch: {
        height: hp('5%'), alignItems: 'center', marginVertical: hp('5%'),
        width: wp('50%'), borderRadius: 7, alignSelf: 'center', backgroundColor: '#12ACD9'
    }
});
