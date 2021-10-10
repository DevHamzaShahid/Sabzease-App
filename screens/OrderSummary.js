import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Title from '../components/Title';
import { connect } from 'react-redux';
import { BallIndicator } from 'react-native-indicators';
import ToggleSwitch from 'toggle-switch-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {emptyCart} from '../container/actions/CartActions';
class OrderSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            loading: false,
            userID: ''
        }
    }
    completeOrder = async () => {
        console.log('API request')

        let formData = new FormData();
        formData.append('user_id', this.state.userID);
        formData.append('product_id', JSON.stringify(this.props.cartItems));
        // formData.append('totalQty', this.props.cartItems.quantity);
        formData.append('total_bill', this.props.total);
        // formData.append('method', 'Cash On Delivery');
        // formData.append('shipping', this.props.route.params.city);
        // formData.append('pickup_location', '');
        formData.append('email', this.props.route.params.email);
        formData.append('username', this.props.route.params.FirstName);
        // formData.append('shipping_cost','200');
        // formData.append('packing_cost','');
        // formData.append('tax','');
        formData.append('phone', this.props.route.params.PhoneNo);
        formData.append('address', this.props.route.params.address);
        // formData.append('customer_country',this.props.route.params.country);
        // formData.append('customer_city',this.props.route.params.city);
        // formData.append('customer_zip', this.props.route.params.zipcode);
        // formData.append('shipping_email',this.props.route.params.email);
        // formData.append('shipping_name',this.props.route.params.FirstName);
        // formData.append('shipping_phone',this.props.route.params.PhoneNo);
        // formData.append('shipping_address',this.props.route.params.address);
        // formData.append('shipping_country',this.props.route.params.country);
        // formData.append('shipping_city',this.props.route.params.city);
        // formData.append('shipping_zip',this.props.route.params.zipcode);
        // formData.append('order_note','');
        // formData.append('coupon_code','');
        // formData.append('coupon_discount','');
        // formData.append('dp','');
        // formData.append('currency_sign','');
        // formData.append('currency_value','');
        // formData.append('vendor_shipping_id','');
        // formData.append('vendor_packing_id','');
        this.setState({ loading: true });
        const response = await fetch('https://duaacollection.com/b2b/api/OrderSave',
            {
                method: 'POST',
                body: formData
            }
        );
        var user = await AsyncStorage.getItem('userData');
        const responseJson = await response.json();
        if (responseJson.status == 'sucess') {
            if(user){
                this.setState({ loading: false })
                alert(responseJson.message)
                console.log(responseJson.message);
                this.props.emptyCart();
                this.props.navigation.navigate('Home')
            }
            else{
                alert('Please Login First')
                
            }
        }
        else {
            this.setState({ loading: false })
            alert('Error')
        }
    }
    checkUser = async () => {
        var j = await AsyncStorage.getItem('userData');
        var userId = JSON.parse(j);
        this.setState({ userID: userId.id })
        console.log(this.state.userID);
    }
    componentDidMount() {
        this.checkUser();
    }
    render() {
        return (
           
           <View style={{}}>
           
                <Title
                    title={'Order Summary'}
                    navigation={this.props.navigation}
                    badge={this.props.totalItems + ''}
                    onPress={() => this.props.navigation.goBack()}
                />
                <View style={{ marginTop: 20, backgroundColor: '#fff', alignSelf: 'center', borderRadius: 15, width: '90%' }}>
                    <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10, color: 'orange' }}>PRODUCT NAMES</Text>
                    <FlatList
                        data={this.props.cartItems}
                        renderItem={({ item, index }) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text></View>
                                <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15 }}>RS {item.price * item.quantity}</Text></View>
                            </View>
                        )}
                    />
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>{this.props.cartItems[0].name}</Text></View>
                        <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15 }}>{this.props.cartItems[0].price * this.props.cartItems[0].quantity}</Text></View>
                    </View> */}
                    <View style={{ borderBottomColor: '#f2eded', width: '90%', marginTop: 10, alignSelf: 'center', borderBottomWidth: 2 }} />
                    <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10, color: 'orange' }}>SHIPPING TO</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Name</Text></View>
                        <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15 }}>{this.props.route.params.Name} {this.props.route.params.LastName}</Text></View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Email</Text></View>
                        <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15 }}>{this.props.route.params.email}</Text></View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Phone No.</Text></View>
                        <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15 }}>{this.props.route.params.PhoneNo}</Text></View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Address</Text></View>
                        <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15 }}>{this.props.route.params.address}</Text></View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>City</Text></View>
                        <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15 }}>{this.props.route.params.city}</Text></View>
                    </View>

                    <View style={{ borderBottomColor: '#f2eded', width: '90%', marginTop: 10, alignSelf: 'center', borderBottomWidth: 2 }} />

                    <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10, color: 'orange' }}>PRICE INFO</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Subtotal</Text></View>
                        <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15 }}>{this.props.total}</Text></View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Shipping</Text></View>
                        <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15 }}>RS 0</Text></View>
                    </View>
                    <View style={{ borderBottomColor: '#f2eded', width: '90%', marginTop: 10, alignSelf: 'center', borderBottomWidth: 2 }} />

                    <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10, color: 'orange' }}>TOTAL</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Total Amount</Text></View>
                        <View style={{ justifyContent: 'flex-end' }}><Text style={{ paddingRight: 15, fontSize: 15 }}>{this.props.total + 0}</Text></View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ justifyContent: 'flex-start' }}><Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Apply Discount Code</Text></View>
                        <View style={{ justifyContent: 'flex-end' }}><ToggleSwitch
                            isOn={this.state.toggle}
                            onColor="#84c708"
                            offColor="gray"
                            style={{ paddingRight: 15 }}
                            //label="Example label"
                            //labelStyle={{ color: "black", fontWeight: "900" }}
                            size="Small"
                            onToggle={isOn => this.setState({ toggle: !this.state.toggle })}
                        />
                        </View>
                    </View>
                    {this.state.loading ? <BallIndicator color='orange' /> : null 
                    }
                    <View style={{ marginBottom: 15, flexDirection: 'row', marginTop: 20, alignSelf: 'center', justifyContent: 'space-between', }}>

                        <TouchableOpacity onPress={() => this.completeOrder()} style={{ justifyContent: 'center', width: '90%', backgroundColor: 'orange', borderRadius: 10, height: 45 }}>
                            <View>
                                <Text style={{ alignSelf: 'center', color: '#fff' }}>Complete Order</Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    total: state.cart.total,
    totalItems: state.cart.totalItems
})

const mapDispatchToProps = {
    emptyCart
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);