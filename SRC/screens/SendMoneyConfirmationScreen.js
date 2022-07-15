import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions, StatusBar, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SendMoneyConfirmationScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                barStyle="light-content"
                animated={true}
                backgroundColor="#3C444B"
            />
            <View style={styles.withdrawView}>
                <Text style={styles.withdrawText}>Summary</Text>
            </View>
            <View style={{
                height: HEIGHT / 1.4,
                marginHorizontal: 10
            }}>
                <ImageBackground
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                    source={require('../assets/images/withdraw_summary.png')}
                >
                    <View style={{
                        height: HEIGHT / 5.5,
                        marginHorizontal: 15,
                        marginTop: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={styles.ammountText}>£5,223.45</Text>
                        <Text style={styles.AvailableText}>Withdraw Ammount</Text>
                    </View>
                    <View style={{
                        height: HEIGHT / 2.1,
                        marginTop: 10,
                        marginHorizontal: 15,
                        paddingTop: 10
                    }}>
                        <View style={styles.bankView}>
                            <Text style={styles.bankText}>Total Fee</Text>
                            <Text style={styles.bankRightText}>4.30 GBP</Text>
                        </View>
                        <View style={styles.bankView}>
                            <Text style={styles.bankText}>Amount We{'’'}ll Convert</Text>
                            <Text style={styles.bankRightText}>990.66 GBP</Text>
                        </View>
                        <View style={styles.bankView}>
                            <Text style={styles.bankText}>Guaranteed Rate (42 hrs)</Text>
                            <Text style={styles.bankRightGreenText}>48.6200</Text>
                        </View>
                        <View style={styles.bankView}>
                            <Text style={styles.bankText}>Should Arrive By</Text>
                            <Text style={styles.bankRightText}>By Sep 12th</Text>
                        </View>
                        <TouchableOpacity 
                        onPress={() => { navigation.navigate('TransferSuccessScreen')}}
                        style={styles.signinButton}>
                            <Text style={styles.signTextStyle}>Pay Now</Text>
                        </TouchableOpacity>
                        <View style={styles.forgotViewStyle}>
                            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                                <Text style={styles.forgotTextStyle}>Cancel</Text>
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
        color: '#87868D',
        fontSize: 13,
        fontFamily: 'Spartan-Regular',
    },
    bankRightText: {
        color: '#000000',
        fontSize: 13,
        fontFamily: 'Spartan SemiBold 600',
    },
    bankRightGreenText: {
        color: '#5AAC4E',
        fontSize: 13,
        fontFamily: 'Spartan SemiBold 600',
    },
    bankView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 23,
        marginTop: 7,
        height: '13%',
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
        marginTop: 30
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

export default SendMoneyConfirmationScreen; 