import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AddMoneyPaymentScreen = ({ navigation }) => {

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
                    <Text style={styles.headerTextView}>Payments</Text>
                </View>
            </View>
            <View style={styles.saveAddressView}>
                <Text style={styles.ContactText}>Select Account</Text>
                <TouchableOpacity>
                    <Text style={styles.newAddressText}>+ New Account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contactDetailsView}>
                <View style={styles.addressInsideView}>
                    <View style={styles.accountMainView}>
                        <WithLocalSvg width="21" height="21" asset={require('../assets/images/green_radio.svg')} />
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={styles.accountHeading}>HSBC Bank Plc</Text>
                            <Text style={styles.addressText}>*********** 5852</Text>
                        </View>
                    </View>
                    <View style={styles.circleView}>
                    <Image
                            style={styles.imageStyle}
                            source={require('../assets/images/red_envelop.png')}
                        />
                    </View>
                </View>
                <View style={styles.addressInsideView}>
                    <View style={styles.accountMainView}>
                        <WithLocalSvg width="21" height="21" asset={require('../assets/images/radionull.svg')} />
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={styles.accountHeading}>ICBC (London) plc</Text>
                            <Text style={styles.addressText}>*********** 5852</Text>
                        </View>
                    </View>
                    <View style={styles.circleView}>
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/images/Mask_group.png')}
                        />
                    </View>
                </View>
                <View style={styles.addressInsideView}>
                    <View style={styles.accountMainView}>
                        <WithLocalSvg width="21" height="21" asset={require('../assets/images/radionull.svg')} />
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={styles.accountHeading}>ICBC (London) plc</Text>
                            <Text style={styles.addressText}>*********** 5852</Text>
                        </View>
                    </View>
                    <View style={styles.circleView}>
                    <Image
                            style={styles.imageStyle}
                            source={require('../assets/images/Mask_group.png')}
                        />
                    </View>
                </View>
                <View style={styles.addressInsideView}>
                    <View style={styles.accountMainView}>
                        <WithLocalSvg width="21" height="21" asset={require('../assets/images/radionull.svg')} />
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={styles.accountHeading}>Paypal</Text>
                            <Text style={styles.addressText}>Creativetwelve@Example.com</Text>
                        </View>
                    </View>
                    <View style={styles.circleView}>
                    <Image
                            style={styles.imageStyle}
                            source={require('../assets/images/pp.png')}
                        />
                    </View>
                </View>
                <View style={styles.addressInsideView}>
                    <View style={styles.accountMainView}>
                        <WithLocalSvg width="21" height="21" asset={require('../assets/images/radionull.svg')} />
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={styles.accountHeading}>Cash Balance</Text>
                            <Text style={styles.addressText}>*********** 5852</Text>
                        </View>
                    </View>
                    <View style={styles.circleView}>
                    <Image
                            style={styles.imageStyle}
                            source={require('../assets/images/316_payment.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={{
                height: '30%',
                justifyContent: 'flex-end'
            }}>
                <View style={{ height: '20%', }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('AddMoneySummaryScreen') }}
                        style={styles.signinButton}>
                        <Text style={styles.signTextStyle}>Confirm</Text>
                    </TouchableOpacity>
                </View>
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
    ContactText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '700'
    },
    sheetAddressText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '700'
    },
    newAddressText: {
        color: '#5AAC4E',
        fontSize: 12,
        fontWeight: '700'
    },
    addressText: {
        color: '#87868D',
        fontSize: 11,
        fontWeight: '400'
    },
    editText: {
        color: '#5AAC4E',
        fontSize: 12,
        fontWeight: '500',
        marginLeft: 3
    },
    helloText: {
        color: '#87868D',
        fontSize: 10
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
        fontWeight: '600'
    },
    contactDetailsView: {
        backgroundColor: '#FFFFFF',
        height: HEIGHT / 2.5,
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 18,
        paddingTop: 20,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 20,
        justifyContent: 'space-between'
    },
    addressInsideView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    saveAddressView: {
        paddingHorizontal: 20,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sheetAddressView: {
        paddingTop: 10,
        paddingLeft: 20
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
        marginTop: 40,
        marginHorizontal: 21
    },
    textInput: {
        height: 50,
        width: 159,
        borderColor: '#E2D6D6',
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 22,
        marginTop: 5,
        fontSize: 17,
        color: '#262C26',
        fontWeight: '700'
    },
    CountrytextInput: {
        height: 50,
        borderColor: '#E2D6D6',
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 22,
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    houseNameText: {
        fontSize: 12,
        color: '#000000',
        fontWeight: "600",
        marginLeft: 3
    },
    sheetDetailView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 25
    },
    sheetCountryView: {
        paddingHorizontal: 20,
        marginTop: 25
    },
    EnglandText: {
        fontSize: 17,
        color: '#262C26',
        fontWeight: "700",
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
    circleView: {
        height: 38,
        width: 38,
        borderWidth: 1,
        borderRadius: 19,
        borderColor: '#EBEBEB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    accountHeading: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Circular Std Bold'
    },
    accountMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: 19,
        width: 28,
        resizeMode: 'contain'
    }
});

export default AddMoneyPaymentScreen;