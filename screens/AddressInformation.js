import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Title from '../components/Title';
import { TextInput } from 'react-native-paper';
import DropDown from '../components/Dropdown';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
class AddressInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            Email: '',
            Phone: '',
            Address: '',
            City: '',
            Zipcode: '',
            Province: '',
            Country: '',
        }
    }
    Check = async () => {

        var user = await AsyncStorage.getItem('userData');
        var user_Data = JSON.parse(user);
        if (user) {
            this.setState({ name: user_Data.name })
            this.setState({ Address: user_Data.address })
            this.setState({ Phone: user_Data.phone })
            this.setState({ Email: user_Data.email })
            this.setState({ Country: user_Data.country })
            this.setState({ City: user_Data.city })

        }
        else {
            alert('Please Login')
        }
    }
    checkFields = async () => {
        var user = await AsyncStorage.getItem('userData');
        if (this.state.name == '' || this.state.Email == '' || this.state.Phone == '' || this.state.Address == '' || this.state.City == '' || this.state.Zipcode == '' || this.state.Province == '' || this.state.Country == '') {
            alert('Complete All Fields')
        }
        else {
            if (user) {
                this.props.navigation.navigate('OrderSummary', { Name: this.state.name, email: this.state.Email, PhoneNo: this.state.Phone, address: this.state.Address, city: this.state.City, zipcode: this.state.Zipcode, country: this.state.Country, province: this.state.Province })
            }
            else {
                alert('Please Login First')
            }
        }
    }
    componentDidMount() {
        this.Check();
    }
    render() {
        return (
            <View>
                <Title
                    title={'Address Information'}
                    navigation={this.props.navigation}
                    badge={this.props.totalItems + ''}
                    onPress={() => this.props.navigation.goBack()}
                />
                <ScrollView>
                    <View style={{ backgroundColor: '#fff', paddingBottom: 100, marginTop: 20, borderRadius: 10, width: '90%', alignSelf: 'center' }}>
                        <View style={{ marginTop: 15 }}><Text style={{ alignSelf: 'center', color: 'orange', fontSize: 20, fontWeight: 'bold' }}>PERSONAL DETAILS</Text></View>
                        <TextInput
                            value={this.state.name}
                            label="Full Name"
                            underlineColor={'transparent'}
                            style={{ width: '90%', height: 50, color: 'green', alignSelf: 'center', borderWidth: 0.5, borderTopEndRadius: 10, borderTopStartRadius: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderColor: 'green', marginTop: 15 }}
                            // right={<TextInput.Icon name="eye" />}
                            onChangeText={(value) => this.setState({ name: value })}
                        />

                        <TextInput
                            value={this.state.Email}
                            label="Email"
                            underlineColor={'transparent'}
                            style={{ width: '90%', height: 50, color: 'green', alignSelf: 'center', borderWidth: 0.5, borderTopEndRadius: 10, borderTopStartRadius: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderColor: 'green', marginTop: 15 }}
                            // right={<TextInput.Icon name="eye" />}
                            onChangeText={(value) => this.setState({ Email: value })}
                        />
                        <TextInput
                            value={this.state.Phone}
                            label="Phone No."
                            underlineColor={'transparent'}
                            style={{ width: '90%', height: 50, color: 'green', alignSelf: 'center', borderWidth: 0.5, borderTopEndRadius: 10, borderTopStartRadius: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderColor: 'green', marginTop: 15 }}
                            // right={<TextInput.Icon name="eye" />}
                            keyboardType={'numeric'}
                            onChangeText={(value) => this.setState({ Phone: value })}
                        />
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ alignSelf: 'center', color: 'orange', fontSize: 20, fontWeight: 'bold' }}>ADDRESS DETAILS</Text></View>
                        <View style={{ justifyContent: 'center', width: '90%', alignSelf: 'center', marginBottom: 15, marginTop: 15 }}>
                            <DropDown
                                Borderwidth={0.5}
                                // DefaultPlaceHolder={'Address'}
                                options={['DefaultAddress', 'Alternate Address',]}
                                onSelect={(index) => { console.log(index) }}
                                width={'98%'}
                            />
                        </View>
                        <TextInput
                            value={this.state.Address}
                            label="Address"
                            underlineColor={'transparent'}
                            style={{ width: '90%', height: 50, color: 'green', alignSelf: 'center', borderWidth: 0.5, borderTopEndRadius: 10, borderTopStartRadius: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderColor: 'green', }}
                            // right={<TextInput.Icon name="eye" />}
                            //keyboardType={'numeric'}
                            multiline={true}
                            onChangeText={(value) => this.setState({ Address: value })}
                        />
                        <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                            <View style={{ justifyContent: 'flex-start', width: '45%' }}>
                                <TextInput
                                    value={this.state.City}
                                    label="City"
                                    underlineColor={'transparent'}
                                    style={{ width: '98%', height: 50, color: 'green', alignSelf: 'center', borderWidth: 0.5, borderTopEndRadius: 10, borderTopStartRadius: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderColor: 'green', }}
                                    // right={<TextInput.Icon name="eye" />}
                                    //keyboardType={'numeric'}
                                    multiline={true}
                                    onChangeText={(value) => this.setState({ City: value })}
                                />

                            </View>
                            <View style={{ width: '45%' }}>
                                <TextInput
                                    label="Zip Code"
                                    underlineColor={'transparent'}
                                    style={{ width: '98%', height: 50, color: 'green', alignSelf: 'center', borderWidth: 0.5, borderTopEndRadius: 10, borderTopStartRadius: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderColor: 'green', }}
                                    // right={<TextInput.Icon name="eye" />}
                                    keyboardType={'numeric'}
                                    multiline={true}
                                    onChangeText={(value) => this.setState({ Zipcode: value })}
                                />

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                            <View style={{ justifyContent: 'flex-start', width: '45%' }}>
                                <TextInput
                                    label="Province"
                                    underlineColor={'transparent'}
                                    style={{ width: '98%', height: 50, color: 'green', alignSelf: 'center', borderWidth: 0.5, borderTopEndRadius: 10, borderTopStartRadius: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderColor: 'green', }}
                                    // right={<TextInput.Icon name="eye" />}
                                    //keyboardType={'numeric'}
                                    multiline={true}
                                    onChangeText={(value) => this.setState({ Province: value })}
                                />

                            </View>
                            <View style={{ width: '45%' }}>
                                <TextInput
                                    label="Country"
                                    underlineColor={'transparent'}
                                    style={{ width: '98%', height: 50, color: 'green', alignSelf: 'center', borderWidth: 0.5, borderTopEndRadius: 10, borderTopStartRadius: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderColor: 'green', }}
                                    // right={<TextInput.Icon name="eye" />}
                                    // keyboardType={'numeric'}
                                    multiline={true}
                                    onChangeText={(value) => this.setState({ Country: value })}
                                />

                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.checkFields()}>
                            <View style={{ backgroundColor: 'orange', width: '90%', justifyContent: 'center', alignSelf: 'center', marginTop: 10, height: 50, borderRadius: 10 }}><Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center' }}>Next</Text></View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    totalItems: state.cart.totalItems
})

const mapDispatchToProps = {

}
export default connect(mapStateToProps)(AddressInformation);