import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, SafeAreaView, Image, FlatList, StatusBar, ScrollView } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import ReactNativeSwipeableViewStack from 'react-native-swipeable-view-stack';
import RBSheet from "react-native-raw-bottom-sheet";
import RadioForm from 'react-native-radio-form';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const TicketScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                barStyle="dark-content"
                animated={true}
                backgroundColor="#F9FBF9"
            />
            <View style={styles.headerStyle}>
                <View>
                    <View style={styles.morningView}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <WithLocalSvg width="18" height="18" asset={require('../assets/images/back_arrow.svg')} />
                        </TouchableOpacity>
                        <Text style={styles.headerTextView}>Tickets</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('AddNewTicket') }}>
                <Text style={{
                    color: '#5AAC4E',
                    fontSize: 12,
                    fontFamily: 'circular-std-medium-500',
                }}>+ Add Ticket</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.profileListMainView}>
                    <View style={styles.amazonMainView}>
                        <View style={styles.amazonView}>
                            {/* <View style={styles.profileListView}> */}
                            <Image
                                style={{ height: 38, width: 38, resizeMode: 'contain' }}
                                source={require('../assets/images/ticket_1.png')}
                            />
                            {/* </View> */}
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.amazonText}>Edward Methews</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.leftText}>Subject : </Text>
                                    <Text style={styles.rightText}>Here will be subject name</Text>
                                </View>
                            </View>
                            <WithLocalSvg width="26" height="8" asset={require('../assets/images/three_dot.svg')} />
                        </View>
                        <View style={{
                            height: HEIGHT / 10,
                            paddingLeft: 52,
                            marginTop: 5,
                        }}>
                            <Text style={[styles.leftText, { alignSelf: 'center' }]}>
                                Ut aliquip ex ea commodo consequat. {'\n'}
                                Duis aute irure dolor in reprehenderit in {'\n'}
                                volupta velit esse cillum dolore eu</Text>
                            <View style={{
                                paddingLeft: 10,
                                marginTop: 10,
                            }}>
                                <WithLocalSvg width="112" height="15" asset={require('../assets/images/view_attach.svg')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.amazonMainView}>
                        <View style={styles.amazonView}>
                            {/* <View style={styles.profileListView}> */}
                            <Image
                                style={{ height: 38, width: 38, resizeMode: 'contain' }}
                                source={require('../assets/images/female.png')}
                            />
                            {/* </View> */}
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.amazonText}>Edward Methews</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.leftText}>Subject : </Text>
                                    <Text style={styles.rightText}>Here will be subject name</Text>
                                </View>
                            </View>
                            <WithLocalSvg width="26" height="8" asset={require('../assets/images/three_dot.svg')} />
                        </View>
                        <View style={{
                            height: HEIGHT / 10,
                            paddingLeft: 52,
                            marginTop: 5,
                        }}>
                            <Text style={[styles.leftText, { alignSelf: 'center' }]}>
                                Ut aliquip ex ea commodo consequat. {'\n'}
                                Duis aute irure dolor in reprehenderit in {'\n'}
                                volupta velit esse cillum dolore eu</Text>
                            <View style={{
                                paddingLeft: 10,
                                marginTop: 10,
                            }}>
                                <WithLocalSvg width="112" height="15" asset={require('../assets/images/view_attach.svg')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.amazonMainView}>
                        <View style={styles.amazonView}>
                            {/* <View style={styles.profileListView}> */}
                            <Image
                                style={{ height: 38, width: 38, resizeMode: 'contain' }}
                                source={require('../assets/images/ticket_1.png')}
                            />
                            {/* </View> */}
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.amazonText}>Edward Methews</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.leftText}>Subject : </Text>
                                    <Text style={styles.rightText}>Here will be subject name</Text>
                                </View>
                            </View>
                            <WithLocalSvg width="26" height="8" asset={require('../assets/images/three_dot.svg')} />
                        </View>
                        <View style={{
                            height: HEIGHT / 10,
                            paddingLeft: 52,
                            marginTop: 5,
                        }}>
                            <Text style={[styles.leftText, { alignSelf: 'center' }]}>
                                Ut aliquip ex ea commodo consequat. {'\n'}
                                Duis aute irure dolor in reprehenderit in {'\n'}
                                volupta velit esse cillum dolore eu</Text>
                            <View style={{
                                paddingLeft: 10,
                                marginTop: 10,
                            }}>
                                <WithLocalSvg width="112" height="15" asset={require('../assets/images/view_attach.svg')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.amazonMainView}>
                        <View style={styles.amazonView}>
                            {/* <View style={styles.profileListView}> */}
                            <Image
                                style={{ height: 38, width: 38, resizeMode: 'contain' }}
                                source={require('../assets/images/female.png')}
                            />
                            {/* </View> */}
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.amazonText}>Edward Methews</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.leftText}>Subject : </Text>
                                    <Text style={styles.rightText}>Here will be subject name</Text>
                                </View>
                            </View>
                            <WithLocalSvg width="26" height="8" asset={require('../assets/images/three_dot.svg')} />
                        </View>
                        <View style={{
                            height: HEIGHT / 10,
                            paddingLeft: 52,
                            marginTop: 5,
                        }}>
                            <Text style={[styles.leftText, { alignSelf: 'center' }]}>
                                Ut aliquip ex ea commodo consequat. {'\n'}
                                Duis aute irure dolor in reprehenderit in {'\n'}
                                volupta velit esse cillum dolore eu</Text>
                            <View style={{
                                paddingLeft: 10,
                                marginTop: 10,
                            }}>
                                <WithLocalSvg width="112" height="15" asset={require('../assets/images/view_attach.svg')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.amazonMainView}>
                        <View style={styles.amazonView}>
                            {/* <View style={styles.profileListView}> */}
                            <Image
                                style={{ height: 38, width: 38, resizeMode: 'contain' }}
                                source={require('../assets/images/ticket_1.png')}
                            />
                            {/* </View> */}
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.amazonText}>Edward Methews</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.leftText}>Subject : </Text>
                                    <Text style={styles.rightText}>Here will be subject name</Text>
                                </View>
                            </View>
                            <WithLocalSvg width="26" height="8" asset={require('../assets/images/three_dot.svg')} />
                        </View>
                        <View style={{
                            height: HEIGHT / 10,
                            paddingLeft: 52,
                            marginTop: 5,
                        }}>
                            <Text style={[styles.leftText, { alignSelf: 'center' }]}>
                                Ut aliquip ex ea commodo consequat. {'\n'}
                                Duis aute irure dolor in reprehenderit in {'\n'}
                                volupta velit esse cillum dolore eu</Text>
                            <View style={{
                                paddingLeft: 10,
                                marginTop: 10,
                            }}>
                                <WithLocalSvg width="112" height="15" asset={require('../assets/images/view_attach.svg')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.amazonMainView}>
                        <View style={styles.amazonView}>
                            {/* <View style={styles.profileListView}> */}
                            <Image
                                style={{ height: 38, width: 38, resizeMode: 'contain' }}
                                source={require('../assets/images/female.png')}
                            />
                            {/* </View> */}
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.amazonText}>Edward Methews</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.leftText}>Subject : </Text>
                                    <Text style={styles.rightText}>Here will be subject name</Text>
                                </View>
                            </View>
                            <WithLocalSvg width="26" height="8" asset={require('../assets/images/three_dot.svg')} />
                        </View>
                        <View style={{
                            height: HEIGHT / 10,
                            paddingLeft: 52,
                            marginTop: 5,
                        }}>
                            <Text style={[styles.leftText, { alignSelf: 'center' }]}>
                                Ut aliquip ex ea commodo consequat. {'\n'}
                                Duis aute irure dolor in reprehenderit in {'\n'}
                                volupta velit esse cillum dolore eu</Text>
                            <View style={{
                                paddingLeft: 10,
                                marginTop: 10,
                            }}>
                                <WithLocalSvg width="112" height="15" asset={require('../assets/images/view_attach.svg')} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height: HEIGHT / 22}}/>
            </ScrollView>
        </SafeAreaView>
    );
};

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
        color: '#3C444B',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Spartan SemiBold 600',
    },
    saveAddressView: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ContactText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '700'
    },
    newAddressText: {
        color: '#5AAC4E',
        fontSize: 12,
        fontWeight: '700'
    },
    amazonMainView: {
        padding: 15,
        height: HEIGHT / 6,
    },
    amazonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileListView: {
        height: 38,
        width: 38,
        borderRadius: 19,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    amazonText: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Circular Std Bold',
    },
    dateText: {
        color: '#87868D',
        fontSize: 11,
        fontFamily: 'Spartan-Regular',
    },
    profileListMainView: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 18,
        marginHorizontal: 20
    },
    sheetAddressView: {
        paddingTop: 10,
        paddingLeft: 20
    },
    sheetAddressText: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'circular-std-medium-500'
    },
    sheetCountryView: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    houseNameText: {
        fontSize: 12,
        color: '#000000',
        fontFamily: 'Spartan SemiBold 600',
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
    AddbuttonView: {
        height: '20%',
        paddingTop: 25,
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
});

export default TicketScreen;