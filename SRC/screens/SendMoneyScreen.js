import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SendMoneyScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                barStyle="dark-content"
                animated={true}
                backgroundColor="#F9FBF9"
            />
            <View style={styles.headerStyle}>
                <View style={styles.morningView}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <WithLocalSvg width="18" height="18" asset={require('../assets/images/back_arrow.svg')} />
                    </TouchableOpacity>
                    <Text style={styles.headerTextView}>Send Money</Text>
                </View>
            </View>
            <View style={styles.youSendView}>
                <Text style={styles.youSendText}>You Send</Text>
            </View>
            <View style={styles.youSendInputView}>
                <View style={styles.youSendPlaceholder}>
                    <TextInput
                        placeholder='1000'
                        placeholderTextColor={'#262C26'}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.youSendSecondInput}>
                    <WithLocalSvg width="23" height="23" asset={require('../assets/images/flag.svg')} />
                    <Text style={styles.gbpText}>GBP</Text>
                    <WithLocalSvg width="14" height="14" asset={require('../assets/images/dropDown.svg')} />
                </View>
            </View>
            <View style={styles.bankView}>
                <Text style={styles.bankText}>Bank Dbit (ACH)  Fee</Text>
                <Text style={styles.bankRightText}>2.65 GBP</Text>
            </View>
            <View style={styles.bankView}>
                <Text style={styles.bankText}>Our Fee</Text>
                <Text style={styles.bankRightText}>1.85 GBP</Text>
            </View>
            <View style={styles.TotalView}>
                <Text style={styles.bankText}>Total Fee</Text>
                <Text style={styles.bankRightText}>4.30 GBP</Text>
            </View>
            <View style={styles.bankView}>
                <Text style={styles.bankText}>Amount We{'’'}ll Convert</Text>
                <Text style={styles.bankRightText}>4.30 GBP</Text>
            </View>
            <View style={styles.bankView}>
                <Text style={styles.bankText}>Guaranteed Rate (42 hrs)</Text>
                <Text style={styles.GuaranteedRightText}>48.6200</Text>
            </View>
            <View style={styles.youSendView}>
                <Text style={styles.youSendText}>Recipient Gets</Text>
            </View>
            <View style={styles.youSendInputView}>
                <View style={styles.youSendPlaceholder}>
                    <TextInput
                        placeholder='97,579.51'
                        placeholderTextColor={'#262C26'}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.youSendSecondInput}>
                    <WithLocalSvg width="23" height="23" asset={require('../assets/images/indFlag.svg')} />
                    <Text style={styles.gbpText}>INR</Text>
                    <WithLocalSvg width="14" height="14" asset={require('../assets/images/dropDown.svg')} />
                </View>
            </View>
            <View style={styles.bankView}>
                <Text style={styles.bankText}>You Could Save Vs Bank</Text>
                <Text style={styles.bankRightText}>16.85 GBP</Text>
            </View>
            <View style={styles.bankView}>
                <Text style={styles.bankText}>Should Arrive By By</Text>
                <Text style={styles.bankRightText}>Sep 12th</Text>
            </View>
            <View style={{ height: '20%', paddingTop: 60 }}>
                <TouchableOpacity
                onPress={() => { navigation.navigate('SendMoneyPaymentScreen') }}
                    style={styles.signinButton}>
                    <Text style={styles.signTextStyle}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F9FBF9',
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
        color: '#000000',
        fontSize: 15,
        fontFamily: 'Spartan SemiBold 600',
    },
    textInput: {
        paddingLeft: 21,
        fontSize: 17,
        color: '#262C26',
        fontWeight: '700'
    },
    youSendView: {
        paddingLeft: 23,
        marginTop: 39
    },
    youSendText: {
        color: '#000000',
        fontSize: 12,
        fontFamily: 'Spartan SemiBold 600',
    },
    youSendInputView: {
        paddingLeft: 23,
        paddingRight: 20,
        flexDirection: 'row',
        paddingTop: 5,
        justifyContent: 'space-between'
    },
    youSendPlaceholder: {
        height: 50,
        width: WIDTH / 1.6,
        borderWidth: 1,
        borderColor: '#5AAC4E',
        borderRadius: 16,
    },
    youSendSecondInput: {
        height: 50,
        width: WIDTH / 4,
        borderWidth: 1,
        borderColor: '#E2D6D6',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    gbpText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000000'
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
    bankView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 23,
        paddingTop: 10,
        marginTop: 7,
        height: '4%',
        alignItems: 'center'
    },
    TotalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        marginTop: 7,
        height: '4%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#DADDDA',
        marginHorizontal: 23
    },
    GuaranteedRightText: {
        color: '#5AAC4E',
        fontSize: 13,
        fontWeight: '600'
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
        marginHorizontal: 21
    },
});

export default SendMoneyScreen;