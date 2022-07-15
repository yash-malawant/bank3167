import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ImageBackground, ScrollView, Image, Modal, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

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

const CurrencyWallet = ({ navigation }) => {

  const secondContainer = () => {
    return (
      <View style={styles.secondContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('WalletDetailScreen') }}>
            <View style={styles.sliderSTyle}>
              <View style={{
                height: 30,
                width: 70,
                //paddingTop: 5,
              }}>
                <WithLocalSvg width="100%" height="100%" asset={require('../assets/images/pound.svg')} />
              </View>
              <Text style={styles.sliderAmmountText}>106,22</Text>
              <Text style={{
                fontSize: 9,
                fontWeight: '400',
                color: '#87868D',
                marginLeft: 8,
                fontFamily: 'Spartan-Regular',
              }}>55%</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { navigation.navigate('WalletDetailScreen') }}>
            <View style={styles.sliderSTyle}>
              <View style={{
                height: 30,
                width: 70,
                paddingTop: 5,
              }}>
                <WithLocalSvg width="100%" height="100%" asset={require('../assets/images/euro.svg')} />
              </View>
              <Text style={styles.sliderAmmountText}>106,22</Text>
              <Text style={{
                fontSize: 9,
                fontWeight: '400',
                color: '#87868D',
                marginLeft: 8,
                fontFamily: 'Spartan-Regular',
              }}>55%</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.addWalletView}>
            <WithLocalSvg width="45" height="71" asset={require('../assets/images/add_wallet.svg')} />
          </View>
        </View>
        <View style={styles.threeCircleView}>
          <ImageBackground
            source={require('../assets/images/light_3x.png')}
            resizeMode='cover'
            style={{
              flexDirection: 'row',
              height: '100%',
              width: '96%',
              alignSelf: 'center',
              marginLeft: 5,
              alignItems: 'center',
              borderRadius: 18,
              justifyContent: 'space-around'
            }}
          >
            <View>
              <View style={styles.circleView}>
                <WithLocalSvg width="25" height="25" asset={require('../assets/images/export.svg')} />
              </View>
              <Text style={styles.sendText}>Send</Text>
            </View>
            <View>
              <View style={styles.circle2View}>
                <WithLocalSvg width="25" height="25" asset={require('../assets/images/import.svg')} />
              </View>
              <Text style={styles.requestText}>Request</Text>
            </View>
            <TouchableOpacity
              onPress={() => { navigation.navigate('WithdrawScreen') }}>
              <View style={styles.circle3View}>
                <WithLocalSvg width="25" height="25" asset={require('../assets/images/withdraw.svg')} />
              </View>
              <Text style={styles.addText}>Withdraw</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={{ paddingLeft: 15, marginTop: 10 }}>
          <Text style={styles.sendMoneyText}>Send Money</Text>
        </View>
        <View style={styles.sendMoneyMainView}>
          <View>
            <TouchableOpacity>
              <WithLocalSvg width="48" height="48" asset={require('../assets/images/green_add.svg')} />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.sendMoneyView}>
              {sendProfile.map((user) => (
                <View style={{ alignItems: 'center' }}>
                  <Image
                    style={styles.sendProfileImage}
                    source={user.image}
                  />
                  <Text style={styles.sendProfileText}>{user.title}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20
        }}>
          <Text style={styles.transactionsText}>Transactions</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={styles.allText}>View All Transactions</Text>
            <WithLocalSvg width="9" height="9" asset={require('../assets/images/green_arrow.svg')} />
          </View>
        </View>
        <View style={styles.transactionsView}>
          <View style={styles.amazonMainView}>
            <View style={styles.amazonView}>
              <Image
                source={require('../assets/images/Group_684.png')}
              />
              <View style={{ marginLeft: 7 }}>
                <Text style={styles.amazonText}>Amazon</Text>
                <Text style={styles.dateText}>12 sep</Text>
              </View>
            </View>
            <Text style={styles.redText}>-£11.22</Text>
          </View>
          <View style={styles.amazonMainView}>
            <View style={styles.amazonView}>
              <Image
                source={require('../assets/images/Group_684_1.png')}
              />
              <View style={{ marginLeft: 7 }}>
                <Text style={styles.amazonText}>Referrals</Text>
                <Text style={styles.dateText}>28 sep</Text>
              </View>
            </View>
            <Text style={styles.redText}>-£18.22</Text>
          </View>
          <View style={styles.amazonMainView}>
            <View style={styles.amazonView}>
              <Image
                source={require('../assets/images/Group_684.png')}
              />
              <View style={{ marginLeft: 7 }}>
                <Text style={styles.amazonText}>Amazon</Text>
                <Text style={styles.dateText}>12 sep</Text>
              </View>
            </View>
            <Text style={styles.redText}>-£11.22</Text>
          </View>
          <View style={styles.allTextView}>

          </View>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 125,
          marginBottom: 40,
          marginTop: 20,         
          borderRadius: 18,
        }}>
          <WithLocalSvg width="100%" height="100%" asset={require('../assets/images/claim_reward.svg')} />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer}>     
        {secondContainer()}      
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
    marginLeft: 25,
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
  }
});

export default CurrencyWallet;