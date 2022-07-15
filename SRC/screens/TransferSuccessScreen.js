import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions, StatusBar, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const TransferSuccessScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                barStyle="light-content"
                animated={true}
                backgroundColor="#3C444B"
            />
            <View style={styles.withdrawView}>
                <Text style={styles.withdrawText}>Transfer Receipt</Text>
            </View>
            <View style={{
                height: HEIGHT / 1.4,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <ImageBackground
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                    resizeMode='contain'
                    source={require('../assets/images/transfer_receipt.png')}
                >
                    <View style={{
                        height: HEIGHT / 2.8,
                        marginHorizontal: 15,
                        marginTop: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image
                            style={{
                                height: 87,
                                width: 87,
                                marginTop: 18
                            }}
                            source={require('../assets/images/green_right.png')}
                        />
                        <View style={styles.bankView}>
                            <Text style={styles.bankText}>Transfer Success</Text>
                            <Text style={styles.bankRightText}>Your Money has been successfuly sent to {'\n'}
                                Edward Methews</Text>
                        </View>
                        <View style={styles.bank2View}>
                            <Text style={styles.TotalText}>Total Transfer</Text>
                            <Text style={styles.TotalAmountText}>£1,23.45 </Text>
                        </View>
                    </View>
                    <View style={{
                        height: HEIGHT / 3.2,
                        marginTop: 10,
                        marginHorizontal: 15,
                        paddingTop: 10,
                    }}>
                        <View style={{
                            backgroundColor: 'red',
                            height: '40%',
                            marginHorizontal: 30,
                            borderRadius: 14,
                            backgroundColor: '#F9FBF9',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 15
                        }}>
                            <View>
                            <Image
                                style={{
                                    height: 56,
                                    width: 56,
                                }}
                                source={require('../assets/images/edw.png')}
                            />
                            </View>
                            <View style={{marginLeft: 15}}>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#000000',
                                    fontFamily: 'Circular Std Bold'
                                }}>Edward Methews</Text>
                                <Text style={{
                                    fontSize: 11,
                                    color: '#2F2F2F',
                                    fontFamily: 'Spartan-Regular',
                                    marginTop: 5
                                }}>************* 7452</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('MyTabs') }}
                            style={styles.signinButton}>
                            <Text style={styles.signTextStyle}>Done</Text>
                        </TouchableOpacity>
                        <View style={styles.forgotViewStyle}>
                            <TouchableOpacity onPress={() => { navigation.navigate('SendMoneyPaymentScreen') }}>
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
        marginTop: 10,
        textAlign: 'center'
    },
    TotalText: {
        color: '#87868D',
        fontSize: 11,
        fontFamily: 'Spartan-Regular',
        marginTop: 10,
    },
    TotalAmountText: {
        color: '#000000',
        fontSize: 23,
        fontFamily: 'circular-std-medium-500',
    },
    bankView: {
        justifyContent: 'center',
        paddingHorizontal: 23,
        height: '30%',
        alignItems: 'center',
    },
    bank2View: {
        justifyContent: 'center',
        paddingHorizontal: 23,
        height: '20%',
        marginTop: 12,
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
        marginTop: 20,
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

export default TransferSuccessScreen;