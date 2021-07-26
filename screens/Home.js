import React, { Component } from 'react';
import { FlatList, Text, Image, View, StatusBar, ScrollView, GradientText } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FastImage from 'react-native-fast-image';
import { SliderBox } from '../components/SliderBox';
import { LinearTextGradient } from "react-native-text-gradient";

const images = [
    'https://source.unsplash.com/random'
    , 'https://source.unsplash.com/random/fruits'
    , 'https://source.unsplash.com/random/vegetables'
    , 'https://source.unsplash.com/random/herbs'
    , 'https://source.unsplash.com/random/mint'
    , 'https://source.unsplash.com/random/jungle'
    , 'https://source.unsplash.com/random/green'
];
export default function Home({navigation}) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar
                animated={true}
                backgroundColor="#84c708"
            />

            <View style={{ backgroundColor: '#84c708', width: '100%', height: 70 }}>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                    <View style={{ padding: 20, justifyContent: 'flex-start' }}><Icon name='menu' size={28} color='#fff' onPress={()=>navigation.openDrawer()} /></View>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Home</Text>
                    <View style={{ padding: 20, justifyContent: 'flex-end' }}><Icon name="cart" size={30} color="#fff" onPress={()=>{alert('cart')}} /></View>
                </View>

            </View>
            <SliderBox
                // ImageComponent={FastImage}
                images={images}
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
            <ScrollView>
                <View style={{ backgroundColor: '#ebe9e6', elevation: 3, paddingLeft: 30, justifyContent: 'center', height: 210, width: '92%', alignSelf: 'center', marginTop: 15, borderRadius: 12 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{}}>
                            <Image
                                style={{ height: 130, width: 110 }}
                                source={require('../vegetables.png')}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>

                            <LinearTextGradient
                                style={{ fontWeight: "bold", fontSize: 24 }}
                                locations={[0, 1]}
                                colors={["orange", "green"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0.4, y: 0 }}
                            >
                                <Text>VEGETABLES</Text>
                            </LinearTextGradient>

                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: '#ebe9e6', elevation: 3, paddingLeft: 30, justifyContent: 'center', height: 210, width: '92%', alignSelf: 'center', marginTop: 15, borderRadius: 12 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{}}>
                            <Image
                                style={{ height: 130, width: 110 }}
                                source={require('../fruits.png')}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>

                            <LinearTextGradient
                                style={{ fontWeight: "bold", fontSize: 24 }}
                                locations={[0, 1]}
                                colors={["#c40f06", "purple"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text>FRUITS</Text>
                            </LinearTextGradient>

                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: '#ebe9e6', elevation: 3, paddingLeft: 30, justifyContent: 'center', height: 210, width: '92%', alignSelf: 'center', marginTop: 15, borderRadius: 12 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{}}>
                            <Image
                                style={{ height: 130, width: 110 }}
                                source={require('../salad.png')}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>

                            <LinearTextGradient
                                style={{ fontWeight: "bold", fontSize: 24 }}
                                locations={[0, 1]}
                                colors={["yellow", "green"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text>SALAD & HERBS</Text>
                            </LinearTextGradient>

                        </View>
                    </View>

                </View>
                <View style={{ backgroundColor: '#ebe9e6', elevation: 3, paddingLeft: 30, justifyContent: 'center', height: 210, width: '92%', alignSelf: 'center', marginTop: 15, borderRadius: 12 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{}}>
                            <Image
                                style={{ height: 130, width: 110 }}
                                source={require('../mushrooms.png')}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>

                            <LinearTextGradient
                                style={{ fontWeight: "bold", fontSize: 24 }}
                                locations={[0, 1]}
                                colors={["#debb10", "#faa84b"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text>MUSHROOMS</Text>
                            </LinearTextGradient>

                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: '#ebe9e6', elevation: 3, paddingLeft: 30, justifyContent: 'center', height: 210, width: '92%', alignSelf: 'center', marginTop: 15, borderRadius: 12 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{}}>
                            <Image
                                style={{ height: 130, width: 110 }}
                                source={require('../premium.png')}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>

                            <LinearTextGradient
                                style={{ fontWeight: "bold", fontSize: 24 }}
                                locations={[0, 1]}
                                colors={["#e8701a", "#faa84b"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text>PREMIUM{'\n'}</Text>
                                <Text>PRODUCTS</Text>
                            </LinearTextGradient>

                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: '#ebe9e6', elevation: 3, paddingLeft: 30, justifyContent: 'center', height: 210, width: '92%', alignSelf: 'center', marginTop: 15, borderRadius: 12 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{}}>
                            <Image
                                style={{ height: 130, width: 130 }}
                                source={require('../specialdeals.png')}
                            />

                        </View>
                        <View style={{ justifyContent: 'center', paddingLeft: 15 }}>

                            <LinearTextGradient
                                style={{ fontWeight: "bold", fontSize: 24 }}
                                locations={[0, 1]}
                                colors={["#e64515", "#e6152a"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text>SPECIAL DEALS</Text>
                            </LinearTextGradient>

                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}