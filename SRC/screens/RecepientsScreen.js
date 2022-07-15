import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, SafeAreaView, Image, FlatList, StatusBar, ScrollView } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import RBSheet from "react-native-raw-bottom-sheet";
import RadioForm from 'react-native-radio-form';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Recepients = [
  {
    id: 0,
    image: require('../assets/images/edw.png'),
    title: 'Jacob Black',
    accountName: 'Account ending 2548'
  },
  {
    id: 1,
    image: require('../assets/images/edw2.png'),
    title: 'Martin Hussy',
    accountName: 'Account ending 2548'
  },
  {
    id: 2,
    image: require('../assets/images/edw.png'),
    title: 'Mike Andeesal',
    accountName: 'Account ending 2548'
  },
  {
    id: 3,
    image: require('../assets/images/edw2.png'),
    title: 'Cristina Martin',
    accountName: 'Account ending 2548'
  },
  {
    id: 4,
    image: require('../assets/images/edw.png'),
    title: 'Samntha Batichya',
    accountName: 'Account ending 2548'
  },
  {
    id: 5,
    image: require('../assets/images/edw2.png'),
    title: 'Aron Fincl',
    accountName: 'Account ending 2548'
  },
  {
    id: 6,
    image: require('../assets/images/edw.png'),
    title: 'Andrew Smith',
    accountName: 'Account ending 2548'
  },
  {
    id: 7,
    image: require('../assets/images/edw2.png'),
    title: 'Livingston Martin',
    accountName: 'Account ending 2548'
  },
]

const mockData = [
  {
    label: 'Myself',
    value: 'Myself'
  },
  {
    label: 'Someone Else',
    value: 'Someone Else'
  },
  {
    label: 'Bussiness',
    value: 'Bussiness'
  }
];

const RecepientsScreen = () => {

  const refRBSheet = useRef();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.amazonMainView}>
        <View style={{
          height: '68%',
          alignItems: 'center',
          // paddingTop: 20
        }}>
          <View style={{
          alignSelf: 'flex-end',
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
        }}>
          <WithLocalSvg width="30" height="20" asset={require('../assets/images/vertical_dot.svg')} />
          </View>
          <Image
            source={item.image}
            style={{ height: 58, width: 58 }}
          />
          <Text style={{
            fontSize: 14,
            color: '#000000',
            fontFamily: 'Circular Std Bold',
            marginTop: 10
          }}>Edward Methews</Text>
          <Text style={{
            fontSize: 9,
            color: '#87868D',
            fontFamily: 'Spartan-Regular',

          }}>Account ending 2548</Text>
        </View>
        <View style={{
          height: '32%',
          backgroundColor: '#5AAC4E',
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 25
        }}>
          <WithLocalSvg width="26" height="37" asset={require('../assets/images/send.svg')} />
          <WithLocalSvg width="26" height="37" asset={require('../assets/images/line.svg')} />
          <WithLocalSvg width="40" height="37" asset={require('../assets/images/request.svg')} />
        </View>
        {/* <View style={styles.amazonView}>
          <Image
            source={item.image}
          />
          <View style={{ marginLeft: 7 }}>
            <Text style={styles.amazonText}>{item.title}</Text>
            <Text style={styles.dateText}>{item.accountName}</Text>
          </View>
        </View>
        <WithLocalSvg width="26" height="8" asset={require('../assets/images/three_dot.svg')} /> */}
      </View>
    )
  }

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
            height: 700,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: '#F9FBF9'
          },
          draggableIcon: {
            backgroundColor: "#D9D9D9"
          }
        }}>
        <View style={styles.sheetAddressView}>
          <Text style={styles.sheetAddressText}>Add New Recipient</Text>
        </View>
        <View style={styles.sheetCountryView}>
          <Text style={styles.houseNameText}>Who{'’'}s your recipient</Text>
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
          <Text style={styles.houseNameText}>Their Email</Text>
          <TextInput
            style={styles.CountrytextInput}
            placeholder='Jacobblack@example.com'
            placeholderTextColor={'#262C26'}
          />
        </View>
        <View style={styles.sheetCountryView}>
          <Text style={styles.houseNameText}>Country</Text>
          <TextInput
            style={styles.CountrytextInput}
            placeholder='United Kingdom'
            placeholderTextColor={'#262C26'}
          />
        </View>
        <View style={styles.sheetCountryView}>
          <Text style={styles.houseNameText}>Account  holder name</Text>
          <TextInput
            style={styles.CountrytextInput}
            placeholder='Enter name'
            placeholderTextColor={'#262C26'}
          />
        </View>
        <View style={styles.sheetCountryView}>
          <Text style={styles.houseNameText}>Account Number</Text>
          <TextInput
            style={styles.CountrytextInput}
            placeholder='Enter account Number'
            placeholderTextColor={'#262C26'}
          />
        </View>
        <View style={styles.sheetCountryView}>
          <Text style={styles.houseNameText}>Sort Code</Text>
          <TextInput
            style={styles.CountrytextInput}
            placeholder='Enter sortcode'
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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#F1F1F1"
      />
      <View style={styles.headerStyle}>
        <View>
          <View style={styles.morningView}>
            <WithLocalSvg width="14" height="14" asset={require('../assets/images/back_arrow.svg')} />
            <Text style={styles.headerTextView}>Recipients</Text>
          </View>
        </View>
        <View style={{
          width: WIDTH / 6,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 10
        }}>
          <WithLocalSvg width="16" height="16" asset={require('../assets/images/search-normal.svg')} />
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <WithLocalSvg width="16" height="16" asset={require('../assets/images/add_icon.svg')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        marginBottom: 47,
        // justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <FlatList
          data={Recepients}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={'2'}
        />
      </View>
      {BottomSheet()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  headerStyle: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center'
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
    color: '#3C444B',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Spartan SemiBold 600',
  },
  amazonMainView: {
    backgroundColor: '#FFFFFF',
    height: HEIGHT / 3.7,
    width: WIDTH / 2.3,
    margin: 10,
    borderRadius: 18,
    elevation: 3
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
    fontFamily: 'Spartan SemiBold 600'
  },
  dateText: {
    color: '#87868D',
    fontSize: 9,
    fontWeight: '400',
    fontFamily: 'Spartan-Regular',
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
});

export default RecepientsScreen;