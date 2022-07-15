import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import RBSheet from "react-native-raw-bottom-sheet";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const EditAddressScreen = ({ navigation }) => {

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
                        borderTopRightRadius: 50
                    },
                    draggableIcon: {
                        backgroundColor: "#D9D9D9"
                    }
                }}>
                <View style={styles.sheetAddressView}>
                    <Text style={styles.sheetAddressText}>Address</Text>
                </View>
                <View style={styles.sheetDetailView}>
                    <View>
                        <Text style={styles.houseNameText}>House Name/Number</Text>
                        <TextInput
                            placeholder='133'
                            placeholderTextColor={'#262C26'}
                            style={styles.textInput}
                        />
                    </View>
                    <View>
                        <Text style={styles.houseNameText}>Street</Text>
                        <TextInput
                            placeholder='Loards street'
                            placeholderTextColor={'#262C26'}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={styles.sheetDetailView}>
                    <View>
                        <Text style={styles.houseNameText}>City</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='London'
                            placeholderTextColor={'#262C26'}
                        />
                    </View>
                    <View>
                        <Text style={styles.houseNameText}>Postal Code</Text>
                        <TextInput
                            placeholder='176025'
                            placeholderTextColor={'#262C26'}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>Country Name</Text>
                    <View style={styles.CountrytextInput}>
                        <Text style={styles.EnglandText}>England</Text>
                        <WithLocalSvg width="17" height="17" asset={require('../assets/images/dropDown.svg')} />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.signinButton}>
                    <Text style={styles.signTextStyle}>Save Address</Text>
                </TouchableOpacity>
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
                    <Text style={styles.headerTextView}>Edit Address</Text>
                </View>
            </View>
            <View style={styles.saveAddressView}>
                <Text style={styles.ContactText}>Saved Addresses</Text>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                    <Text style={styles.newAddressText}>+ New Address</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.workView}>
                <View style={styles.addressInsideView}>
                    <View style={styles.greenView}>
                        <WithLocalSvg width="52" height="19" asset={require('../assets/images/work.svg')} />
                        <Text style={styles.addressText}>192, Ardgown Road, London, SE6 1UZ, GB</Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/images/lock_circle.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contactDetailsView}>
                <View style={styles.addressInsideView}>
                    <View style={styles.greenView}>
                        <View style={{
                            flexDirection: 'row', 
                            justifyContent: 'space-between',
                            width: WIDTH/5
                            }}>                
                        <WithLocalSvg width="52" height="19" asset={require('../assets/images/home.svg')} />
                        <WithLocalSvg width="17" height="17" asset={require('../assets/images/box.svg')} />
                        </View>
                        <Text style={styles.addressText}>192, Ardgown Road, London, SE6 1UZ, GB</Text>
                    </View>
                    <TouchableOpacity>
                        <WithLocalSvg width="26" height="8" asset={require('../assets/images/three_dot.svg')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.addressInsideView}>
                    <View style={styles.greenView}>
                        <WithLocalSvg width="52" height="19" asset={require('../assets/images/other.svg')} />
                        <Text style={styles.addressText}>192, Ardgown Road, London, SE6 1UZ, GB</Text>
                    </View>
                    <TouchableOpacity>
                        <WithLocalSvg width="26" height="8" asset={require('../assets/images/three_dot.svg')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.addressInsideView}>
                    <View style={styles.greenView}>
                        <WithLocalSvg width="68" height="19" asset={require('../assets/images/home_2.svg')} />
                        <Text style={styles.addressText}>192, Ardgown Road, London, SE6 1UZ, GB</Text>
                    </View>
                    <TouchableOpacity>
                        <WithLocalSvg width="26" height="8" asset={require('../assets/images/three_dot.svg')} />
                    </TouchableOpacity>
                </View>
            </View>
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
        height: HEIGHT / 3.5,
        marginHorizontal: 20,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        paddingTop: 20,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 20,
        justifyContent: 'space-between'
    },
    workView: {
        marginTop: 24,
        backgroundColor: '#F6F6F6',
        marginHorizontal: 20,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
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
    greenView: {
        height: 40,
        justifyContent: 'space-between'
    },
    imageStyle: {
        height: 26,
        width: 36,
        resizeMode: 'contain'
    }
});

export default EditAddressScreen;