import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native';
import ForgetPassword from './ForgetPassword';
const image = require('../backgroundImage.png');
class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            Address: '',
            phone_no: '',
            email: '',
            country: '',
            city: ''
        }
    }
    Check = async () => {

        var user = await AsyncStorage.getItem('userData');
        var user_Data = JSON.parse(user);
        if (user) {
            this.setState({ name: user_Data.name })
            this.setState({ Address: user_Data.address })
            this.setState({ phone_no: user_Data.phone })
            this.setState({ email: user_Data.email })
            this.setState({ country: user_Data.country })
            this.setState({ city: user_Data.city })

        }
        else {
            alert('Please Login')
        }
        // await AsyncStorage.removeItem('userId');
        this.props.navigation.closeDrawer();

    }
    componentDidMount() {
        this.Check();
    }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}>
                    <Image
                        source={image}
                        style={{ flex: 1, height: '100%', width: '100%', position: 'absolute' }}
                    />
                    <View style={{ backgroundColor: '#84c708', width: '100%', height: 70 }}>

                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                            <View style={{ padding: 20, justifyContent: 'flex-start' }}><Icon name='keyboard-backspace' size={28} color='#fff' onPress={() => { this.props.navigation.goBack() }} /></View>
                            <Text style={{ color: '#fff', fontSize: 20 }}>My Account</Text>
                            <View style={{ padding: 20, justifyContent: 'flex-end' }}></View>
                        </View>

                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20, paddingBottom: 20, backgroundColor: '#fff', width: '90%', alignSelf: 'center', borderRadius: 10 }}>
                        <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 15, marginTop: 20 }}>Full Name</Text>
                        <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 17, color: 'gray' }}>{this.state.name}</Text>
                        <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 15, marginTop: 20 }}>Email</Text>
                        <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 17, color: 'gray' }}>{this.state.email}</Text>
                        <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 15, marginTop: 20 }}>Phone Number</Text>
                        <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 17, color: 'gray' }}>{this.state.phone_no}</Text>
                        <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 15, marginTop: 20 }}>Default Address</Text>

                        <TextInput
                            style={{ fontSize: 17, alignSelf: 'center', paddingLeft: 15, paddingRight: 15, borderWidth: 1, borderRadius: 14, width: '95%', marginTop: 5, color: 'black' }}
                            onChangeText={'hgjngv'}
                            onChangeText={(value) => { console.log(value) }}
                            multiline={true}
                            placeholderTextColor={'gray'}
                            placeholder="Street"

                        />
                        {/* <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 15, marginTop: 20 }}>City/Country</Text>
                        <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 17, color: 'gray' }}>{this.state.Address}/{this.state.country}</Text> */}
                        <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 15, marginTop: 20 }}>Alternative Address</Text>
                        <TextInput
                            style={{ fontSize: 17, alignSelf: 'center', paddingLeft: 15, paddingRight: 15, borderWidth: 1, borderRadius: 14, width: '95%', marginTop: 5, color: 'black' }}
                            onChangeText={(value) => { console.log(value) }}
                            multiline={true}
                            placeholderTextColor={'gray'}
                            placeholder="Street"
                        />
                        {/* <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 15, marginTop: 20 }}>City/Country</Text>
                        <Text style={{ paddingLeft: 14, paddingRight: 14, fontSize: 17, color: 'gray' }}>{this.state.Address}/{this.state.country}</Text> */}
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ForgetPassword')}>
                            <View style={{ backgroundColor: 'orange', width: '95%', height: 50, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 14, marginTop: 20 }}><Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Reset Password</Text></View>
                        </TouchableOpacity>


                        {/* <View style={{ backgroundColor: '#fff', width: '95%', height: 50, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 14, borderWidth: 1, borderColor: 'orange', marginTop: 20 }}><Text style={{ fontSize: 16, color: 'orange', fontWeight: 'bold' }}>Logout</Text></View> */}

                    </View>

                </View>

            </ScrollView>

        );
    }
}

export default MyAccount;