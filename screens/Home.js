import React, { Component } from 'react';
import { FlatList, Text, Image, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Title from '../components/Title';
import { SliderBox } from '../components/SliderBox';
import { LinearTextGradient } from "react-native-text-gradient";
import { BASE_URL, IMG_BASE_URL } from '../Global';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
const image = require('../backgroundImage.png');

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            category: [],
            images: [],
            sliderImageUrl: '',
        }
    }
    // checkUser = async () => {
    //     var id = await AsyncStorage.getItem('id');
    //     console.log(id);
    //     // if (user) {
    //     //     this.props.navigation.navigate('Home');
    //     // }
    //     // else {
    //     //     this.props.navigation.navigate('Login')
    //     // }
    // }
    componentDidMount() {
        this.getCategoryData();
        // this.checkUser();
    }
    async getCategoryData() {
        let responseSlider = await fetch(`${BASE_URL}getsliders`, {
            method: 'POST',
        });
        let responseJsonSlider = await responseSlider.json();
        responseJsonSlider.data.map((val) => {
            this.state.images.push(responseJsonSlider.base_url_galleries + val.photo);
        });
        let response = await fetch(`${BASE_URL}categories`, {
            method: 'POST',
        });
        let responseJson = await response.json();
        this.setState({
            loading: false,
            category: responseJson.data
        });
    }
    renderItem(item) {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Products', { 'cat_id': item.id, cat_name: item.name })}>
                <View style={{ backgroundColor: '#ebe9e6', elevation: 3, paddingLeft: 30, justifyContent: 'center', height: 210, width: '92%', alignSelf: 'center', marginTop: 15, borderRadius: 12 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{}}>
                            <Image
                                style={{ height: 130, width: 130 }}
                                source={{ uri: `${IMG_BASE_URL}categories/${item.image}` }}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                            <LinearTextGradient
                                style={{ fontWeight: "bold", fontSize: 23, }}
                                locations={[0, 1]}
                                colors={["orange", "green"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0.4, y: 0 }}
                            >
                                <Text style={{}}>{item.name}</Text>
                            </LinearTextGradient>

                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar
                    animated={true}
                    backgroundColor="#84c708"
                />
                <Image
                    source={image}
                    style={{ flex: 1, height: '100%', width: '100%', position: 'absolute' }}
                />
                <Title
                    title={'Home'}
                    drawer={true}
                    badge={this.props.totalItems + ''}
                    navigation={this.props.navigation}
                    onPress={() => this.props.navigation.openDrawer()}
                />

                <SliderBox
                    // ImageComponent={FastImage}
                    images={this.state.images}
                    // sliderBoxHeight={200}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    paginationBoxStyle={{
                        position: 'absolute',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                    }}
                    autoplay
                    circleLoop
                    ImageComponentStyle={{ width: '100%', }}
                    imageLoadingColor="#2196F3"
                />
                {this.state.loading ? <Loading /> :
                    <FlatList
                        data={this.state.category}
                        renderItem={({ item }) => this.renderItem(item)}
                    />
                }
            </View>
        );
    }

}

const mapStateToProps = (state) => ({
    totalItems: state.cart.totalItems
})
const mapDispatchToProps = {
}
export default connect(mapStateToProps)(Home);