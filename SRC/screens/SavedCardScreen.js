import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, SafeAreaView, Image, FlatList, StatusBar, ScrollView, ImageBackground } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import ReactNativeSwipeableViewStack from 'react-native-swipeable-view-stack';
import RBSheet from "react-native-raw-bottom-sheet";
import RadioForm from 'react-native-radio-form';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const dataArray = [
    {
        id: 0,
        title: 'hello'
    },
    {
        id: 1,
        title: 'hello'
    },
    {
        id: 2,
        title: 'hello'
    },
    {
        id: 3,
        title: 'hello'
    },
    {
        id: 4,
        title: 'hello'
    }
]

const mockData = [
    {
        label: 'Debit',
        value: 'Debit'
    },
    {
        label: 'Credit',
        value: 'Credit'
    }
];

const SavedCardScreen = ({ navigation }) => {

    const refRBSheet = useRef();
    const bankSheet = useRef();
    const editSheet = useRef();

    const _onSelect = (item) => {
        console.log(item);
    };

    const editCardSheet = () => {
        return (
            <RBSheet
                ref={editSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    container: {
                        height: 600,
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        backgroundColor: '#F9FBF9'
                    },
                    draggableIcon: {
                        backgroundColor: "#D9D9D9"
                    }
                }}>
                <View style={styles.sheetAddressView}>
                    <Text style={styles.sheetAddressText}>Edit Card</Text>
                </View>
                <View style={[styles.sheetCountryView, {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }]}>
                    <Text style={styles.houseNameText}>Card Type</Text>
                    <RadioForm
                        style={{ width: 350 - 30 }}
                        dataSource={mockData}
                        itemShowKey="label"
                        itemRealKey="value"
                        circleSize={20}
                        initial={1}
                        outerColor='#3C444B'
                        innerColor='#5AAC4E'
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(item) => _onSelect(item)}
                    />
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>Card Number</Text>
                    <TextInput
                        style={styles.CountrytextInput}
                        placeholder='51542545159856666'
                        placeholderTextColor={'#262C26'}
                    />
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>Expiry Date</Text>
                    <TextInput
                        style={styles.CountrytextInput}
                        placeholder='mm/yy'
                        placeholderTextColor={'#262C26'}
                    />
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>CVV</Text>
                    <TextInput
                        style={styles.CountrytextInput}
                        placeholder='Enter CVV'
                        placeholderTextColor={'#262C26'}
                    />
                </View>
                <View style={styles.deletebuttonView}>
                    <TouchableOpacity
                        style={styles.deleteButton}>
                        <Text style={styles.deleteTextStyle}>Delete</Text>
                        <WithLocalSvg width="18" height="18" asset={require('../assets/images/trash.svg')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.AddbuttonView}>
                    <TouchableOpacity
                        style={styles.signinButton}>
                        <Text style={styles.signTextStyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        )
    }

    const BottomSheet = () => {
        return (
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    container: {
                        height: 510,
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        backgroundColor: '#F9FBF9'
                    },
                    draggableIcon: {
                        backgroundColor: "#D9D9D9"
                    }
                }}>
                <View style={styles.sheetAddressView}>
                    <Text style={styles.sheetAddressText}>Add New Card</Text>
                </View>
                <View style={[styles.sheetCountryView, {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }]}>
                    <Text style={styles.houseNameText}>Card Type</Text>
                    <RadioForm
                        style={{ width: 350 - 30 }}
                        dataSource={mockData}
                        itemShowKey="label"
                        itemRealKey="value"
                        circleSize={20}
                        initial={1}
                        outerColor='#3C444B'
                        innerColor='#5AAC4E'
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(item) => _onSelect(item)}
                    />
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>Card Number</Text>
                    <TextInput
                        style={styles.CountrytextInput}
                        placeholder='51542545159856666'
                        placeholderTextColor={'#262C26'}
                    />
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>Expiry Date</Text>
                    <TextInput
                        style={styles.CountrytextInput}
                        placeholder='mm/yy'
                        placeholderTextColor={'#262C26'}
                    />
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>CVV</Text>
                    <TextInput
                        style={styles.CountrytextInput}
                        placeholder='Enter CVV'
                        placeholderTextColor={'#262C26'}
                    />
                </View>
                <View style={styles.AddbuttonView}>
                    <TouchableOpacity
                        style={styles.signinButton}>
                        <Text style={styles.signTextStyle}>Submitt</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        )
    }

    const addBankSheet = () => {
        return (
            <RBSheet
                ref={bankSheet}
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
                        <Text style={styles.signTextStyle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        )
    }

    // const renderViewItem = (items) => {
    //     <View style={{ height: HEIGHT / 3, width: '100%', backgroundColor: 'blue' }}>
    //         <Text>{items.title}</Text>
    //     </View>
    // }

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
                        <Text style={styles.headerTextView}>Saved Card/Bank</Text>
                    </View>
                </View>
            </View>
            <View style={styles.saveAddressView}>
                <Text style={styles.ContactText}>Saved Cards</Text>
                <TouchableOpacity
                    onPress={() => refRBSheet.current.open()}
                >
                    <Text style={styles.newAddressText}>+ Add Card</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                    onPress={() => editSheet.current.open()}
                 style={{
                height: HEIGHT / 2
            }}>
                
                <ImageBackground
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        bottom: 60
                    }}
                    resizeMode='contain'
                    source={require('../assets/images/blue_card.png')}
                />
                <ImageBackground
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        bottom: -5
                    }}
                    resizeMode='contain'
                    source={require('../assets/images/yellow_card.png')}
                />
                <ImageBackground
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        bottom: -70
                    }}
                    resizeMode='contain'
                    source={require('../assets/images/light_blue_card.png')}
                />
                <ImageBackground
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        bottom: -120
                    }}
                    resizeMode='contain'
                    source={require('../assets/images/red_card.png')}
                />
                {/* <ReactNativeSwipeableViewStack
                    //onSwipe={(swipedIndex) => this.onCardSwipe(swipedIndex)}
                    initialSelectedIndex={1}
                    data={dataArray}
                    renderItem={(element) => renderViewItem(element)}
                    //onItemClicked={(element) => this.onClick(element)}
                    stackSpacing={20}
                /> */}
                {/* </TouchableOpacity> */}
            </TouchableOpacity>
            <View style={styles.saveAddressView}>
                <Text style={styles.ContactText}>Bank Accounts</Text>
                <TouchableOpacity
                    onPress={() => bankSheet.current.open()}
                >
                    <Text style={styles.newAddressText}>+ Bank Account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.profileListMainView}>
                <View style={styles.amazonMainView}>
                    <View style={styles.amazonView}>
                        <View style={styles.profileListView}>
                            <Image
                                style={{ height: 19, width: 28, resizeMode: 'contain' }}
                                source={require('../assets/images/red_envelop.png')}
                            />
                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.amazonText}>HSBC Bank Plc</Text>
                            <Text style={styles.dateText}>*********** 5682</Text>
                        </View>
                    </View>
                    <WithLocalSvg width="18" height="18" asset={require('../assets/images/trash.svg')} />
                </View>
                <View style={styles.amazonMainView}>
                    <View style={styles.amazonView}>
                        <View style={styles.profileListView}>
                            <Image
                                style={{ height: 19, width: 28, resizeMode: 'contain' }}
                                source={require('../assets/images/red_circle.png')}
                            />
                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.amazonText}>ICBC (London) plc</Text>
                            <Text style={styles.dateText}>*********** 5682</Text>
                        </View>
                    </View>
                    <WithLocalSvg width="18" height="18" asset={require('../assets/images/trash.svg')} />
                </View>
            </View>
            {BottomSheet()}
            {addBankSheet()}
            {editCardSheet()}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        height: HEIGHT / 10
    },
    amazonView: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        fontFamily: 'Circular Std Bold'
    },
    dateText: {
        color: '#87868D',
        fontSize: 11,
        fontFamily: 'Spartan-Regular',
    },
    profileListMainView: {
        backgroundColor: '#FFF',
        borderRadius: 18,
        marginHorizontal: 20,
        marginTop: 10
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
    deleteTextStyle: {
        color: '#3C444B',
        fontSize: 18,
        fontWeight: '600',
        marginRight: 5
    },
    deleteButton: {
        height: 52,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 333,
        marginHorizontal: 21,
        borderWidth: 1,
        borderColor: '#3C444B',
        flexDirection: 'row',
        paddingLeft: 5
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
        height: '15%',
        paddingTop: 25,
    },
    deletebuttonView: {
        height: '12%',
        paddingTop: 30,
    },
});

export default SavedCardScreen;