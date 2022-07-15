import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView, Dimensions, Image, FlatList, ScrollView, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import ProgressCircle from 'react-native-progress-circle';
import RBSheet from "react-native-raw-bottom-sheet";
import RadioForm from 'react-native-radio-form';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const mockData = [
    {
      label: 'Last 30Days',
      value: 'Last 30Days'
    },
    {
      label: 'Last 90Days',
      value: 'Last 90Days'
    },
    {
      label: 'Current Year',
      value: 'Current Year'
    },
    {
      label: '2021',
      value: '2021'
    },
    {
      label: '2020',
      value: '2020'
    },
    {
      label: 'Custom Date Range',
      value: 'Custom Date Range'
    }
  ];

const Recepients = [
    {
        id: 0,
        image: require('../assets/images/Group_684.png'),
        title: 'Jacob Black',
        accountName: 'Account ending 2548'
    },
    {
        id: 1,
        image: require('../assets/images/Group_684_1.png'),
        title: 'Martin Hussy',
        accountName: 'Account ending 2548'
    },
    {
        id: 2,
        image: require('../assets/images/Group_684.png'),
        title: 'Mike Andeesal',
        accountName: 'Account ending 2548'
    },
    {
        id: 3,
        image: require('../assets/images/Group_684_1.png'),
        title: 'Cristina Martin',
        accountName: 'Account ending 2548'
    },
    {
        id: 4,
        image: require('../assets/images/Group_684.png'),
        title: 'Samntha Batichya',
        accountName: 'Account ending 2548'
    },
    {
        id: 5,
        image: require('../assets/images/Group_684_1.png'),
        title: 'Aron Fincl',
        accountName: 'Account ending 2548'
    },
    {
        id: 6,
        image: require('../assets/images/Group_684.png'),
        title: 'Andrew Smith',
        accountName: 'Account ending 2548'
    },
    {
        id: 7,
        image: require('../assets/images/Group_684_1.png'),
        title: 'Livingston Martin',
        accountName: 'Account ending 2548'
    },
]

const AllTransactionsScreen = ({ navigation }) => {

    const refRBSheet = useRef();

    const _onSelect = (item) => {
        console.log(item);
      };

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
                    <Text style={styles.sheetAddressText}>Filter</Text>
                </View>
                <View style={styles.sheetCountryView}>
                    <RadioForm
                        style={{ width: 350 - 30 }}
                        dataSource={mockData}
                        itemShowKey="label"
                        itemRealKey="value"
                        circleSize={20}
                        initial={1}
                        outerColor='#3C444B'
                        innerColor='#5AAC4E'
                        formHorizontal={false}
                        labelHorizontal={true}
                        onPress={(item) => _onSelect(item)}
                    />
                </View>
                <View style={styles.sheetCountryView}>
                    <Text style={styles.houseNameText}>Category</Text>
                    <TextInput
                        style={styles.CountrytextInput}
                        placeholder='Return'
                        placeholderTextColor={'#262C26'}
                    />
                </View>                
                <View style={styles.AddbuttonView}>
                    <TouchableOpacity
                    onPress={() => refRBSheet.current.close()}
                        style={styles.signinButton}>
                        <Text style={styles.signTextStyle}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        )
    }

    const firstContainer = () => {
        return (
            <View style={styles.firstContainer}>
                <ProgressCircle
                    percent={80}
                    radius={100}
                    borderWidth={15}
                    color="#F94B14"
                    shadowColor="#D7EAFF"
                    bgColor="#fff"
                >
                    <ProgressCircle
                        percent={65}
                        radius={85}
                        borderWidth={15}
                        color="#E58F0D"
                        shadowColor="#E3F0FF"
                        bgColor="#fff"
                    >
                        <ProgressCircle
                            percent={45}
                            radius={70}
                            borderWidth={15}
                            color="#4D7DFA"
                            shadowColor="#E9F3FF"
                            bgColor="#E0EBE2"
                        >
                            <Text style={{
                                color: '#2A2A2A',
                                fontSize: 23,
                                fontFamily: 'Circular Std Bold'
                            }}>£5,223.45</Text>
                        </ProgressCircle>
                    </ProgressCircle>
                </ProgressCircle>

            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
            onPress={() => { navigation.navigate('MoneyRecievedScreen') }}
            style={styles.amazonMainView}>
                <View style={styles.amazonView}>
                    <Image
                        source={item.image}
                        style={{ height: 31, width: 31 }}
                    />
                    <View style={{ marginLeft: 7 }}>
                        <Text style={styles.amazonText}>Amazon</Text>
                        <Text style={styles.dateText}>Monday, 12 sep</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.redText}>-£11.22</Text>
                    <Text style={styles.dateText}>£5,223.45</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const secondContainer = () => {
        return (
            <View style={styles.secondContainer}>
                <View style={{
                    backgroundColor: '#FFF',
                    height: HEIGHT / 7,
                    marginHorizontal: 20,
                    borderRadius: 18,
                    top: -50,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: 'absolute',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 15
                }}>
                    <View style={styles.incomeView}>
                        <WithLocalSvg width="37" height="37" asset={require('../assets/images/income.svg')} />
                        <Text style={styles.ammountFont}>£255.15</Text>
                        <Text style={styles.incomeFont}>Income</Text>
                    </View>
                    <View style={styles.incomeView}>
                        <WithLocalSvg width="37" height="37" asset={require('../assets/images/expense.svg')} />
                        <Text style={styles.ammountFont}>£125.15</Text>
                        <Text style={styles.incomeFont}>Expense</Text>
                    </View>
                    <View style={styles.incomeView}>
                        <WithLocalSvg width="37" height="37" asset={require('../assets/images/return.svg')} />
                        <Text style={styles.ammountFont}>£195.15</Text>
                        <Text style={styles.incomeFont}>Return</Text>
                    </View>
                </View>
                <View style={{
                    height: '10%',
                    marginTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    //paddingHorizontal: 25
                    paddingLeft: 23,
                    paddingRight: 15
                }}>
                    <Text style={{
                        color: '#000000',
                        fontSize: 16,
                        fontFamily: 'circular-std-medium-500'
                    }}>Last Transections</Text>
                    <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                        <WithLocalSvg width="70" height="70" asset={require('../assets/images/filter.svg')} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={Recepients}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                barStyle="dark-content"
                animated={true}
                backgroundColor="#E0EBE2"
            />
            <View style={styles.headerStyle}>
                <View>
                    <View style={styles.morningView}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <WithLocalSvg width="18" height="18" asset={require('../assets/images/back_arrow.svg')} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.headerTextView}>All transactions</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView>
                {firstContainer()}
                {secondContainer()}
            </ScrollView>
            {BottomSheet()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E0EBE2',
    },
    firstContainer: {
        height: HEIGHT / 2.5,
        width: '100%',
        backgroundColor: '#E0EBE2',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 45
    },

    headerStyle: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    headerTextView: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Spartan Bold 700',
    },
    morningView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondContainer: {
        //height: HEIGHT,
        width: '100%',
        backgroundColor: '#F9FBF9',
        borderTopLeftRadius: 39,
        borderTopRightRadius: 39,
        paddingTop: 20,
        marginTop: 10
    },
    incomeView: {
        height: '100%',
        width: WIDTH / 4,
        alignItems: 'center',
        paddingTop: 15
        // justifyContent: 'center'
    },
    ammountFont: {
        color: '#000000',
        fontSize: 18,
        fontFamily: 'circular-std-medium-500',
        marginTop: 7
    },
    incomeFont: {
        color: '#9B9B9B',
        fontSize: 11,
        fontFamily: 'circular-std-medium-500'
    },
    amazonMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        //height: "50%",
        marginTop: 15,
    },
    amazonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    amazonText: {
        color: '#494C54',
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Spartan-Regular',
    },
    dateText: {
        color: '#87868D',
        fontSize: 9,
        fontWeight: '400',
        fontFamily: 'Spartan-Regular',
    },
    redText: {
        marginTop: 5,
        color: '#FD6363',
        fontSize: 14,
        //fontWeight: '700',
        fontFamily: 'circular-std-medium-500'
    },
    greenText: {
        marginTop: 5,
        color: '#5AAC4E',
        fontSize: 14,
        //fontWeight: '700'
        fontFamily: 'circular-std-medium-500'
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
        paddingHorizontal: 10,
        //marginTop: 20
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

});

export default AllTransactionsScreen;