import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, SafeAreaView, Image, FlatList, StatusBar, ScrollView } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const MoneyRecievedScreen = () => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                barStyle="dark-content"
                animated={true}
                backgroundColor="#E6F4E9"
            />
            <View style={styles.headerStyle}>
                <View>
                    <View style={styles.morningView}>
                        <WithLocalSvg width="14" height="14" asset={require('../assets/images/back_arrow.svg')} />
                        <Text style={styles.headerTextView}>Money Recieved</Text>
                    </View>
                </View>
                <Text style={{
                    color: '#5AAC4E',
                    fontSize: 12,
                    fontFamily: 'circular-std-medium-500',
                }}>Share</Text>
            </View>
            <View style={styles.whiteBox}>
                <View style={{
                    flexDirection: 'row',
                    height: '7%',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: '#000000',
                        fontSize: 35.22,
                        fontFamily: 'Circular Std Bold',
                    }}>£5,223.45</Text>
                    <Image
                        style={{ height: 27, width: 27, marginLeft: 5, marginTop: 5 }}
                        source={require('../assets/images/recieved.png')}
                    />
                </View>
                <Text style={{
                    color: '#494C54',
                    fontSize: 12,
                    fontFamily: 'Spartan-Regular',
                }}>Recieved Ammount</Text>
                <View style={styles.whiteInsideView}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.leftText}>From : </Text>
                            <Text style={styles.rightText}>Cristina Martin</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={styles.leftText}>Linked Bank : </Text>
                            <Text style={styles.rightText}>ICBC (London) plc</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Text style={styles.leftText}>A/c Number : </Text>
                            <Text style={styles.rightText}>************* 7452</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <WithLocalSvg width="71.5" height="15" asset={require('../assets/images/chat_now.svg')} />
                        </View>
                    </View>
                    <Image
                        style={{ height: 38, width: 38 }}
                        source={require('../assets/images/female.png')}
                    />
                </View>
                <View style={styles.white2InsideView}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.leftText}>In your :  </Text>
                            <Text style={styles.rightText}>ICBC (London) plc</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={styles.leftText}>A/c Number :  </Text>
                            <Text style={styles.rightText}>************* 7452</Text>
                        </View>                    
                    </View>
                    <Image
                        style={{ height: 31, width: 31.46 }}
                        source={require('../assets/images/red_circle.png')}
                    />
                </View>
                <View style={styles.white3InsideView}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.leftText}>Recieved at 07:56 AM, 18 May 2022</Text>
                            </View>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Text style={styles.leftText}>Transaction ID : 215485CV15487LV</Text>
                            </View>                    
                    </View>                    
                </View>
                <TouchableOpacity
                    style={styles.signinButton}>
                    <Text style={styles.signTextStyle}>Having An Issue?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E6F4E9',
    },
    headerStyle: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    morningView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTextView: {
        marginLeft: 10,
        color: '#3C444B',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Spartan SemiBold 600',
    },
    whiteBox: {
        backgroundColor: '#FFFFFF',
        height: HEIGHT / 1.1,
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 18,
        paddingTop: 24,
        paddingLeft: 23
    },
    whiteInsideView: {
        flexDirection: 'row',
        height: '20%',
        justifyContent: 'space-between',       
        paddingRight: 20,
        paddingTop: 30
    },
    white2InsideView: {
        flexDirection: 'row',
        height: '12%',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingTop: 30
    },
    white3InsideView: {
        flexDirection: 'row',
        height: '10%',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingTop: 30
    },
    leftText: {
        color: '#87868D',
        fontSize: 11,
        fontFamily: 'Spartan-Regular',
    },
    rightText: {
        color: '#000000',
        fontSize: 11,
        fontFamily: 'Spartan SemiBold 600',
    },
    signTextStyle: {
        color: '#3C444B',
        fontSize: 14.53,
        fontFamily: 'circular-std-medium-500'
    },
    signinButton: {
        height: 52,
        backgroundColor: '#F9FBF9',
        borderColor: '#3C444B',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 333,
        marginTop: 40,
        marginHorizontal: 21,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginBottom: 20
    },
});

export default MoneyRecievedScreen;