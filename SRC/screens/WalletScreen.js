import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ImageBackground, ScrollView, Image, Modal, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import CurrencyWallet from '../component/CurrencyWallet';
import CustomWallet from '../component/CustomWallet';

const sendProfile = [{
  id: 0,
  title: 'Jacob B',
  image: require('../assets/images/jacob.png')
},
{
  id: 1,
  title: 'Edward C',
  image: require('../assets/images/edward.png')
},
{
  id: 2,
  title: 'Samantha C',
  image: require('../assets/images/samantha.png')
},
{
  id: 3,
  title: 'Cristina M',
  image: require('../assets/images/cristina.png')
},
{
  id: 5,
  title: 'Latesh',
  image: require('../assets/images/edward.png')
},
{
  id: 6,
  title: 'Edward C',
  image: require('../assets/images/jacob.png')
}]

const WalletScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState('currency');

  const SwitchTab = (currentTab) => {
    setActiveTab(currentTab);
  }

  const firstContainer = () => {
    return (
      <View style={styles.firstContainer}>
        <View style={styles.cardView}>
          <WithLocalSvg width="100%" height="100%" asset={require('../assets/images/greenATM.svg')} />
        </View>
      </View>
    )
  }

  const renderTabs = () => {
    if (activeTab === 'currency') {
      return <CurrencyWallet navigation={navigation}/>
    }
    else {
      return <CustomWallet navigation={navigation}/>
    }
  }

  const secondContainer = () => {
    return (
      <View
        style={styles.secondContainer}>
        <View style={{ flexDirection: 'row', padding: 15 }}>
          <TouchableOpacity
            onPress={() => { SwitchTab('currency') }}
            style={activeTab === 'currency' ? styles.active : ''}>
            <Text style={activeTab === 'currency' ? 
            styles.transactionsText : styles.NotificationText}>Currency Wallets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { SwitchTab('custom') }}
            style={[activeTab === 'custom' ? styles.active : '', {marginLeft: 20}]}>
            <Text style={activeTab === 'custom' ? 
            styles.transactionsText : styles.NotificationText}>Custom Wallets</Text>
          </TouchableOpacity>
        </View>
        {renderTabs()}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#394148"
      />
      <View style={styles.headerStyle}>
        <View>
          <View style={styles.morningView}>
            <Image source={require('../assets/images/back_arrow.png')} />
            <Text style={styles.headerTextView}>Cash Balance</Text>
          </View>
        </View>
        <View>
          <Image
            style={{ tintColor: '#FFF' }}
            source={require('../assets/images/Vector.png')}
          />
        </View>
      </View>
      <ScrollView style={{ flexGrow: 1 }}>
        {firstContainer()}
        {secondContainer()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9FBF9',
  },
  firstContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: '#394148',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  secondContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F9FBF9'
  },
  headerStyle: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#394148',
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
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Spartan Bold 700',
  },
  cardView: {
    height: 160,
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  transactionsText: {
    color: '#494C54',
    fontSize: 15,
    fontFamily: 'circular-std-medium-500'
  },
  NotificationText: {
    color: '#B1B2B3',
    fontSize: 15,
    fontWeight: '500',
    //marginLeft: 25,
    fontFamily: 'circular-std-medium-500'
  },
  sliderSTyle: {
    height: 80,
    width: 120,
    backgroundColor: '#FFFFFF',
    //marginRight: 10,
    marginLeft: 15,
    borderRadius: 18,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    paddingLeft: 15,
    paddingTop: 10
  },
  addWalletView: {
    height: 80,
    width: 120,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: '#5AAC4E',
    marginLeft: 15,
    paddingLeft: 15,
    paddingTop: 5
  },
  sliderTopText: {
    color: '#494C54',
    fontSize: 12
  },
  sliderAmmountText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Circular Std Bold',
    //marginTop: 5,
    marginLeft: 5
  },
  addWalletText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5
  },
  threeCircleView: {
    alignItems: 'center',
    marginTop: 15,
    height: 105,
    paddingLeft: 10,
    //marginLeft: 5,
    //marginHorizontal: 15,
    //borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  addText: {
    fontSize: 14,
    fontFamily: 'circular-std-medium-500',
    marginTop: 8,
    color: '#000000'
  },
  sendText: {
    fontSize: 14,
    fontFamily: 'circular-std-medium-500',
    marginLeft: 13,
    marginTop: 8,
    color: '#000000'
  },
  requestText: {
    fontSize: 14,
    fontFamily: 'circular-std-medium-500',
    marginLeft: 4,
    marginTop: 8,
    color: '#000000'
  },
  circleView: {
    height: 60,
    width: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle2View: {
    height: 60,
    width: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle3View: {
    height: 60,
    width: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  sendMoneyText: {
    fontSize: 16,
    fontFamily: 'circular-std-medium-500',
    color: '#000000'
  },
  sendMoneyView: {
    flexDirection: 'row',
  },
  transactionsView: {
    height: 180,
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginTop: 8
  },
  amazonMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
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
    fontFamily: 'circular-std-medium-500'
  },
  allTextView: {
    marginTop: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  allText: {
    color: '#5AAC4E',
    fontSize: 12,
    fontFamily: 'circular-std-medium-500',
    fontWeight: '600'
  },
  sendProfileText: {
    color: '#B1B2B3',
    fontSize: 8,
    fontWeight: '400',
    marginLeft: 10,
    marginTop: 3
  },
  sendProfileImage: { height: 48, width: 48, marginLeft: 10 },
  sendMoneyMainView: {
    flexDirection: 'row',
    height: 80,
    paddingLeft: 15,
    paddingTop: 10,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  active: { 
    borderBottomWidth: 2, 
    height: 30, 
    borderColor: '#5AAC4E' 
  },
});

export default WalletScreen;