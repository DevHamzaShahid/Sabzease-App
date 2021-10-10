import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Title from '../components/Title';
import DropDown from '../components/Dropdown'
import NumericInput from 'react-native-numeric-input';
import { connect } from 'react-redux';
import { addToCart } from '../container/actions/CartActions';

const image = require('../backgroundImage.png');
class AddCart extends Component {
    constructor(props) {
        super(props);
        this.product = this.props.route.params.product;
        this.img_base_url = this.props.route.params.img_url;
        this.state = {
            counterQuantity: ""
        }
    }
    addToCart(product) {
        if (this.state.counterQuantity == 0) {
            alert('please select quantity')
        } else {
            const tempProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: this.state.counterQuantity,
                total: product.price * this.quantity,
                thumbnail: this.img_base_url + product.thumbnail,
            }

            this.props.addToCart(tempProduct);
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Title
                        title={this.product.name}
                        navigation={this.props.navigation}
                        badge={this.props.totalItems + ''}
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <View style={{ height: '100%' }}>
                        <Image
                            source={image}
                            style={{ flex: 1, height: '100%', width: '100%', position: 'absolute' }}
                        />
                        <View style={{ backgroundColor: '#fff', height: 380, width: '92%', alignSelf: 'center', marginTop: 15, borderRadius: 12 }}>
                            <Image
                                source={{ uri: this.img_base_url + this.product.thumbnail }}
                                style={{ height: 260, width: 350, alignSelf: 'center', marginTop: 5 }}
                            />
                            <Text style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10, fontSize: 22, marginTop: 20, alignSelf: 'center', color: 'orange', fontWeight: 'bold' }}>
                                {this.product.name}
                            </Text>
                            <Text style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10, fontSize: 16, color: '#000', alignSelf: 'center' }}>
                                PKR - {this.product.price}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                            <View style={{ justifyContent: 'flex-start', paddingLeft: 25, alignSelf: 'center' }}>
                                {/* <DropDown
                                options={['1 kg', '1.5 kg', '2 kg']}
                                width={170}
                                Borderwidth={1}
                                DefaultPlaceHolder={'Select Quantity'}
                            /> */}
                            </View>
                            <View style={{ justifyContent: 'flex-end', paddingRight: 25 }}>

                                <NumericInput
                                    // value={0}
                                    onChange={(value) => this.setState({ counterQuantity: value })}
                                    onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                                    totalWidth={150}
                                    minValue={0}
                                    totalHeight={50}
                                    iconSize={25}
                                    step={1}
                                    valueType='real'
                                    rounded
                                    textColor='green'
                                    iconStyle={{ color: 'white' }}
                                    rightButtonBackgroundColor='#84c708'
                                    leftButtonBackgroundColor='#84c708' />
                            </View>

                        </View>
                        <TouchableOpacity onPress={() => { this.addToCart(this.product) }}>
                            <View style={{ backgroundColor: 'orange', width: '90%', justifyContent: 'center', alignSelf: 'center', marginTop: 15, height: 50, borderRadius: 10 }}><Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center' }}>Add to Cart</Text></View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    total: state.cart.total,
    totalItems: state.cart.totalItems
})

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCart);