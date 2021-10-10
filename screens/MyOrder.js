import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Title from '../components/Title';
import { connect } from 'react-redux';
import { BallIndicator } from 'react-native-indicators';
import AsyncStorage from '@react-native-community/async-storage';
const image = require('../backgroundImage.png');
class MyOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: '',
            OrderData: '',
            loading: false,
        }
    }
    CheckOrder = async () => {
        var j = await AsyncStorage.getItem('userData');
        var userId = JSON.parse(j);
        this.setState({ userID: userId.id })
        // console.log(this.state.userID);
        let formData = new FormData();
        formData.append('user_id', this.state.userID);
        this.setState({ loading: true });
        const response = await fetch('https://duaacollection.com/b2b/api/orders',
            {
                method: 'POST',
                body: formData
            }
        );
        const responseJson = await response.json();
        this.setState({ loading: false });
        console.log(responseJson[0].product_id)
        this.setState({ OrderData: responseJson })
    }
    componentDidMount() {
        this.CheckOrder();
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Title
                    title={'My Orders'}
                    navigation={this.props.navigation}
                    badge={this.props.totalItems + ''}
                    onPress={() => this.props.navigation.goBack()}
                />
                    {this.state.loading ? <BallIndicator color='orange' /> : null
                    }
                <FlatList
                    data={this.state.OrderData}
                    renderItem={({ item, index }) => (          
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetails', { OrderId: item.id, OrderDataa: item })}>
                            <View style={{ marginTop: 20, backgroundColor: '#fff', alignSelf: 'center', borderRadius: 15, width: '90%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                    <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Order #{item.id}</Text></View>
                                    <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15, color: 'orange', fontWeight: 'bold' }}>Pending</Text></View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                    <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, }}>51:15</Text></View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginBottom: 10 }}>
                                    <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, }}>2021-20-15</Text></View>
                                    <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 18, color: 'gray', fontWeight: 'bold' }}>PKR {item.total_bill}</Text></View>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    total: state.cart.total,
    totalItems: state.cart.totalItems
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);