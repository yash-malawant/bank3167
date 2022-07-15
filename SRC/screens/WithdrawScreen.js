import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import RBSheet from "react-native-raw-bottom-sheet";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const WithdrawScreen = ({ navigation }) => {

    const refRBSheet = useRef();

    const BottomSheet = () => {
        return (
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    container: {
                        height: 450,
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        backgroundColor: '#F9FBF9'
                    },
                    draggableIcon: {
                        backgroundColor: "#D9D9D9"
                    }
                }}>
                <View style={styles.sheetAddressView}>
                    <Text style={styles.sheetAddressText}>Add Bank Account</Text>
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>Account Number</Text>
                    <TextInput
                        style={styles.CountrytextInput}
                        placeholder='51542545159856666'
                        placeholderTextColor={'#262C26'}
                    />
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>Sort Code</Text>
                    <TextInput
                        style={styles.CountrytextInput}
                        placeholder='Enter Sort Code'
                        placeholderTextColor={'#262C26'}
                    />
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>Post Code</Text>
                    <TextInput
                        style={styles.CountrytextInput}
                        placeholder='Enter Post Code'
                        placeholderTextColor={'#262C26'}
                    />
                </View>
                <View style={styles.AddbuttonView}>
                    <TouchableOpacity
                        style={styles.signinButton}>
                        <Text style={styles.signTextStyle}>Add Bank Account</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        )
    }

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
                    <Text style={styles.headerTextView}>Withdraw</Text>
                </View>
            </View>
            <ScrollView style={{ flexGrow: 1 }}>
                <View style={{ height: HEIGHT }}>
                    <View style={styles.firstContainer}>
                        <View style={styles.gbpView}>
                            <WithLocalSvg width="16" height="16" asset={require('../assets/images/flag.svg')} />
                            <Text style={styles.gbpText2}>Great British Pound - GBP</Text>
                            <WithLocalSvg width="8" height="8" asset={require('../assets/images/dropDown.svg')} />
                        </View>
                        <Text style={styles.ammountText}>£5,223.45</Text>
                        <Text style={styles.AvailableText}>Available Balance</Text>
                    </View>
                    <View style={styles.youSendView}>
                        <Text style={styles.youSendText}>You Withdraw</Text>
                    </View>
                    <View style={styles.youSendInputView}>
                        <View style={styles.youSendPlaceholder}>
                            <TextInput
                                placeholder='1000'
                                placeholderTextColor={'#262C26'}
                                style={styles.textInput}
                            />
                        </View>
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
                        <Text style={styles.youSendText}>You Gets</Text>
                    </View>
                    <View style={styles.SendInputView}>
                        <View style={styles.SendPlaceholder}>
                            <TextInput
                                placeholder='97,579.51'
                                placeholderTextColor={'#262C26'}
                                style={styles.textInput}
                            />
                        </View>
                        <View style={styles.SendSecondInput}>
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
                        <Text style={styles.bankText}>Should Arrive By</Text>
                        <Text style={styles.bankRightText}>Sep 12th</Text>
                    </View>
                    <View style={styles.selectBankMainView}>
                        <Text style={styles.transactionsText}>Select Bank</Text>
                        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                            <View style={styles.addBankView}>
                                <Text style={styles.allText}>Add Bank Account</Text>
                                <WithLocalSvg width="9" height="9" asset={require('../assets/images/green_arrow.svg')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.selectBankView}>
                        <WithLocalSvg width="21" height="21" asset={require('../assets/images/radio.svg')} />
                        <View style={{ paddingLeft: 20 }}>
                            <Text style={styles.CardText}>Card Holder Name: Cristina Martin</Text>
                            <Text style={styles.CardText}>Debit Card Number: ************* 7845</Text>
                        </View>
                    </View>
                    <View style={styles.selectBankView}>
                        <WithLocalSvg width="21" height="21" asset={require('../assets/images/radionull.svg')} />
                        <View style={{ paddingLeft: 20 }}>
                            <Text style={styles.CardText}>Card Holder Name: Cristina Martin</Text>
                            <Text style={styles.CardText}>Debit Card Number: ************* 7845</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('WithdrawSummeryScreen') }}
                        style={styles.signinButton}>
                        <Text style={styles.signTextStyle}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {BottomSheet()}
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
    firstContainer: {
        backgroundColor: '#FFFFFF',
        height: HEIGHT / 5,
        marginHorizontal: 18,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25
    },
    textInput: {
        paddingLeft: 21,
        fontSize: 17,
        color: '#262C26',
        fontWeight: '700'
    },
    youSendView: {
        paddingLeft: 23,
        marginTop: 25
    },
    youSendText: {
        color: '#000000',
        fontSize: 12,
        fontFamily: 'Spartan SemiBold 600',
    },
    youSendInputView: {
        paddingLeft: 23,
        paddingRight: 23,
        flexDirection: 'row',
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    youSendPlaceholder: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#5AAC4E',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    youSendSecondInput: {
        height: 50,
        borderWidth: 1,
        borderColor: '#E2D6D6',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    gbpText2: {
        color: '#87868D',
        fontSize: 10
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
        marginTop: 7,
        height: '4%',
        alignItems: 'center',
    },
    TotalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    gbpView: {
        height: 26,
        width: '50%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    ammountText: {
        fontSize: 45,
        fontFamily: 'Circular Std Bold',
        color: '#000000'
    },
    AvailableText: {
        fontSize: 12,
        fontFamily: 'Spartan-Regular',
        color: '#494C54',
        marginTop: 5
    },
    SendInputView: {
        paddingLeft: 23,
        paddingRight: 20,
        flexDirection: 'row',
        paddingTop: 5,
        justifyContent: 'space-between'
    },
    SendPlaceholder: {
        height: 50,
        width: WIDTH / 1.6,
        borderWidth: 1,
        borderColor: '#5AAC4E',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    SendSecondInput: {
        height: 50,
        width: WIDTH / 4,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#E2D6D6',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    allText: {
        color: '#5AAC4E',
        fontSize: 12,
        fontFamily: 'circular-std-medium-500'
    },
    transactionsText: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'circular-std-medium-500'
    },
    CardText: {
        color: '#000000',
        fontSize: 13,
        fontWeight: '600'
    },
    selectBankMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 23,
        marginTop: 10,
        height: '4%'
    },
    selectBankView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
        height: '8%',
        marginHorizontal: 20,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#E9E9E9'
    },
    buttonView: {
        height: '20%',
        paddingTop: 10,
        paddingBottom: 20,
    },
    AddbuttonView: {
        height: '20%',
        paddingTop: 25,
    },
    addBankView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sheetAddressView: {
        paddingTop: 10,
        paddingLeft: 20
    },
    sheetAddressText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '700'
    },
    sheetCountryView: {
        paddingHorizontal: 20,
        marginTop: 25
    },
    houseNameText: {
        fontSize: 12,
        color: '#000000',
        fontWeight: "600",
        marginLeft: 3
    },
    CountrytextInput: {
        height: 50,
        borderColor: '#E2D6D6',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 22,
        marginTop: 5
    },
});

export default WithdrawScreen;