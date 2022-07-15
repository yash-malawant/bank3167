import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions, StatusBar, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const WithdrawSuccessScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                barStyle="light-content"
                animated={true}
                backgroundColor="#3C444B"
            />
            <View style={styles.withdrawView}>
                <Text style={styles.withdrawText}>Successful</Text>
            </View>
            <View style={{
                height: HEIGHT / 1.8,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ImageBackground
                    style={{
                        height: HEIGHT / 1.8,
                        width: '100%',
                    }}
                    resizeMode='contain'
                    source={require('../assets/images/withdraw_Success.png')}
                >
                    <View style={{
                        height: HEIGHT / 5.5,
                        marginHorizontal: 15,
                        marginTop: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 35
                    }}>
                        <Image
                            style={{
                                height: 87,
                                width: 87,
                            }}
                            source={require('../assets/images/green_right.png')}
                        />
                    </View>
                    <View style={{
                        height: HEIGHT / 3,
                        marginTop: 10,
                        marginHorizontal: 15,
                        paddingTop: 10,
                    }}>
                        <View style={styles.bankView}>
                            <Text style={styles.bankText}>Withdraw Success</Text>
                            <Text style={styles.bankRightText}>Your Money has been successfuly withdraw</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('MyTabs') }}
                            style={styles.signinButton}>
                            <Text style={styles.signTextStyle}>Done</Text>
                        </TouchableOpacity>
                        <View style={styles.forgotViewStyle}>
                            <TouchableOpacity onPress={() => { navigation.navigate('WithdrawScreen') }}>
                                <Text style={styles.forgotTextStyle}>Withdraw More Money</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#3C444B',
    },
    withdrawView: {
        height: '15%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10
    },
    withdrawText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Spartan Bold 700',
    },
    ammountText: {
        fontSize: 35,
        fontFamily: 'Circular Std Bold',
        color: '#000000'
    },
    AvailableText: {
        fontSize: 12,
        fontFamily: 'Spartan-Regular',
        color: '#494C54',
        marginTop: 5
    },
    bankText: {
        color: '#000000',
        fontSize: 23,
        fontFamily: 'circular-std-medium-500',
    },
    bankRightText: {
        color: '#87868D',
        fontSize: 11,
        fontFamily: 'Spartan-Regular',
        marginTop: 10
    },
    bankView: {
        justifyContent: 'center',
        paddingHorizontal: 23,
        marginTop: 7,
        height: '30%',
        alignItems: 'center',
    },
    signTextStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },
    signinButton: {
        height: 52,
        backgroundColor: '#5AAC4E',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 333,
        marginTop: 30,
        marginHorizontal: 25
    },
    forgotTextStyle: {
        color: '#5AAC4E',
        fontSize: 15,
        fontWeight: '700'
    },
    forgotViewStyle: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: "center",
    },
})

export default WithdrawSuccessScreen;