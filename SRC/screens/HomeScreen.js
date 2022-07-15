import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView, Dimensions, Image, FlatList, ScrollView, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import { WithLocalSvg } from 'react-native-svg';
import AddBottomSheet from '../component/AddBottomSheet';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH / 2.5;
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const Data = [{
  id: 0,
  title: require('../assets/images/referal.svg'),
  ammount: '£106,22'
},
{
  id: 1,
  title: require('../assets/images/316_rf.svg'),
  ammount: '£106,22'
},
{
  id: 2,
  title: require('../assets/images/pe.svg'),
  ammount: '£106,22'
},
]

const cardArray = [
  {
    id: 0,
    cashtext: 'Cash \nBalance',
    amountText: '£106,22',
    lastText: 'Update after every transaction',
    image: require('../assets/images/green_3x.png')
  },
  {
    id: 1,
    cashtext: 'Investment \nBalance',
    amountText: '£106,22',
    lastText: '+12.32% vs last week',
    image: require('../assets/images/black_3x.png')
  },
]

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

const HomeScreen = ({ navigation }) => {

  const refRBSheet = useRef();

  const requestRBSheet = useRef();

  const addRBSheet = useRef();

  const openSheet = () => {
    console.log('pressed');
    refRBSheet.current.open();
  }

  const requestOpenSheet = () => {
    console.log('pressed');
    requestRBSheet.current.open();
  }

  const openAddSheet = () => {
    console.log('pressed');
    addRBSheet.current.open();
  }

  const firstContainer = () => {
    return (
      <View style={styles.firstContainer}>
        <View style={styles.gbpMainView}>
          <View style={styles.gbpView}>
            <Image
              source={require('../assets/images/flag.png')}
            />
            <Text style={styles.gbpText}>Great British Pound - GBP</Text>
            <Image
              source={require('../assets/images/down_arrow.png')}
            />
          </View>
        </View>
        <View style={styles.balanceView}>
          <Text style={styles.balanceText}>£5,223.45</Text>
          <Text style={styles.availableText}>Available Balance</Text>
        </View>
        <View style={styles.threeCircleView}>
          <View>
          <TouchableOpacity
              onPress={openAddSheet}
            >
            <View style={styles.circleView}>
              <WithLocalSvg width="25" height="25" asset={require('../assets/images/card-add.svg')} />
            </View>
            </TouchableOpacity>
            <Text style={styles.addText}>Add</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={openSheet}
            >
              <View style={styles.circleView}>
                <WithLocalSvg width="25" height="25" asset={require('../assets/images/export.svg')} />
              </View>
            </TouchableOpacity>
            <Text style={styles.sendText}>Send</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={requestOpenSheet}
            >
              <View style={styles.circleView}>
                <WithLocalSvg width="25" height="25" asset={require('../assets/images/import.svg')} />
              </View>
            </TouchableOpacity>
            <Text style={styles.requestText}>Request</Text>
          </View>
        </View>
      </View>
    )
  }

  const secondContainer = () => {
    return (
      <View style={styles.secondContainer}>
        <View style={styles.earningView}>
          <Text style={styles.earningText}>Earning Distribution</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.viewStatsText}>View Stats</Text>
            <WithLocalSvg width="9" height="9" asset={require('../assets/images/green_arrow.svg')} />
          </View>
        </View>
        <View style={styles.sliderScrollView}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {Data.map((user) => (
              <View style={styles.sliderSTyle}>
                <View style={user.id !== 2 ? styles.referalView : styles.peView}>
                  <WithLocalSvg width="100%" height="100%" asset={user.title} />
                </View>
                <Text style={styles.sliderAmmountText}>{user.ammount}</Text>
                <Text style={{
                  fontSize: 9,
                  fontWeight: '400',
                  color: '#87868D',
                  fontFamily: 'Spartan-Regular',
                }}>55%</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.sliderScrollView}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {cardArray.map((user) => (
              <View style={styles.cardsliderSTyle}>
                {/* <WithLocalSvg width="100%" height="100%" asset={user.image} /> */}
                <ImageBackground
                  style={{ height: '100%' }}
                  source={user.image}
                >
                  <View style={{
                    height: '100%',
                    padding: 20
                  }}>
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <Text style={{
                        fontSize: 12,
                        fontFamily: 'Spartan-Regular',
                        color: '#FFFFFF'
                      }}>{user.cashtext}</Text>
                      <Text style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                        fontFamily: 'Circular Std Bold'
                      }}>{user.amountText}</Text>
                    </View>
                    <View style={{
                      borderColor: '#596068',
                      borderWidth: 0.5,
                      marginTop: 15
                    }} />
                    <Text style={{
                      color: '#FFFFFF',
                      fontSize: 8,
                      marginTop: 7,
                      fontFamily: 'Spartan-Regular'
                    }}>{user.lastText}</Text>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{
          flexDirection: 'row',
          height: 30,
          alignItems: 'center',
          paddingLeft: 15
        }}>
          <View style={{
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            height: 30,
            width: 120,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
          }}>
            <Text style={styles.transactionsText}>Transactions</Text>
          </View>
          <Text style={styles.NotificationText}>Notification</Text>
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
            <Text style={styles.greenText}>-£18.22</Text>
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
          <TouchableOpacity
          onPress={() => {navigation.navigate('AllTransactionsScreen')}} 
          style={styles.allTextView}>
            <Text style={styles.allText}>View All Transactions</Text>
            <WithLocalSvg width="9" height="9" asset={require('../assets/images/green_arrow.svg')} />
          </TouchableOpacity>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 125,
          marginBottom: 45,
          marginTop: 20,
          borderRadius: 18
        }}>
          <WithLocalSvg width="100%" height="100%" asset={require('../assets/images/claim_reward.svg')} />
        </View>
      </View>
    )
  }

  const requestBottomSheet = () => {
    return (
      <RBSheet
        ref={requestRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
            height: 500,
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={{ paddingLeft: 15, marginTop: 10 }}>
          <Text style={styles.sendMoneyText}>Request Money</Text>
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
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  <Image
                    style={styles.sendProfileImage}
                    source={user.image}
                  />
                  <Text style={styles.sendProfileText}>{user.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

        </View>
        <View style={styles.userNameView}>
          <View style={{paddingLeft: 25}}>
          <Text style={{
            color: '#000000',
            fontSize: 12,
            fontFamily: 'Spartan SemiBold 600'
          }}>Amount</Text>
          </View>
          <TextInput
            placeholder='Enter Ammount'
            style={styles.textInput}
          />
        </View>
        <View style={styles.userNameView}>
          <View style={{paddingLeft: 25}}>
          <Text style={{
            color: '#000000',
            fontSize: 12,
            fontFamily: 'Spartan SemiBold 600'
          }}>Message</Text>
          </View>
          <TextInput
            placeholder='Min.10 words'
            style={styles.messageInput}
          />
        </View>
        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signTextStyle}>Proceed</Text>
        </TouchableOpacity>
      </RBSheet>
    )
  }

  const sendBottomSheet = () => {
    return (
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
            height: 350,
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
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
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  <Image
                    style={styles.sendProfileImage}
                    source={user.image}
                  />
                  <Text style={styles.sendProfileText}>{user.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

        </View>
        <View style={styles.userNameView}>
          <TextInput
            placeholder='Enter Username'
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            refRBSheet.current.close();
            navigation.navigate('SendMoneyScreen')
          }}
          style={styles.signinButton}>
          <Text style={styles.signTextStyle}>Proceed</Text>
        </TouchableOpacity>
      </RBSheet>
    )
  }

  const AddBottomSheet = () => {
    return (
      <RBSheet
        ref={addRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
            height: 400,
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={{ paddingLeft: 15, marginTop: 10 }}>
          <Text style={styles.sendMoneyText}>Add Money</Text>
        </View>
        <View style={{ paddingLeft: 15, marginTop: 10 }}>
          <Text style={styles.WalletsText}>Wallets</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <View style={styles.sliderGreenSTyle}>
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
          <TouchableOpacity>
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
        <View style={styles.userNameView}>
          <Text style={{
            color: '#000000',
            marginLeft: 22,
            fontFamily: 'Spartan SemiBold 600'
          }}>Amount</Text>
          <TextInput
            placeholder='Enter Ammount'
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            addRBSheet.current.close();
            navigation.navigate('AddMoneyPaymentScreen')
          }}
          style={styles.signinButton}>
          <Text style={styles.signTextStyle}>Proceed</Text>
        </TouchableOpacity>
      </RBSheet>
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
          <Text style={styles.helloText}>Hello Cristina</Text>
          <View style={styles.morningView}>
            <Text style={{
              //fontWeight: '400', 
              color: '#000000',
              fontFamily: 'Spartan SemiBold 600',
            }}>Good Morning</Text>
            <Image
              source={require('../assets/images/sun.png')}
            />
          </View>
        </View>
        <View>
          <Image
            source={require('../assets/images/Vector.png')}
          />
        </View>
      </View>
      <ScrollView style={{ flexGrow: 1 }}>
        {firstContainer()}
        {secondContainer()}
      </ScrollView>
      {requestBottomSheet()}
      {sendBottomSheet()}
      {AddBottomSheet()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E0EBE2',
  },
  firstContainer: {
    height: '28%',
    width: '100%',
    backgroundColor: '#E0EBE2',
  },
  headerStyle: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  helloText: {
    color: '#87868D',
    fontSize: 10,
    fontFamily: 'Spartan-Regular',
  },
  morningView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gbpMainView: {
    marginTop: 10,
    height: 26,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gbpView: {
    height: 26,
    width: '50%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 22,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  gbpText: {
    color: '#87868D',
    fontSize: 10,
    fontFamily: 'Spartan-Regular',
    fontWeight: '400'
  },
  balanceView: {
    marginTop: 10,
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  balanceText: {
    //fontWeight: '700',
    fontSize: 45.2222,
    color: '#000000',
    fontFamily: 'Circular Std Bold'
  },
  availableText: {
    fontSize: 12,
    color: '#494C54',
    fontFamily: 'Spartan-Regular',
    fontWeight: '400'
  },
  secondContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F9FBF9',
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    paddingTop: 20,
  },
  allTextView: {
    marginTop: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    flexDirection: 'row'
  },
  allText: {
    color: '#5AAC4E',
    fontSize: 12,
    fontWeight: '500',
    marginRight: 2,
    marginBottom: 2,
    fontFamily: 'circular-std-medium-500'
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
  welcomeText: {
    fontSize: 23,
    fontWeight: '500',
    marginTop: 30
  },
  sliderScrollView: {
    height: 110,
  },
  cardsliderSTyle: {
    height: 100,
    width: 221,
    backgroundColor: '#F2F6F2',
    marginRight: 10,
    marginLeft: 5,
    borderRadius: 18,
  },
  sliderTopText: {
    color: '#494C54',
    fontSize: 12
  },
  sliderAmmountText: {
    fontSize: 18,
    marginTop: 3,
    color: '#000000',
    fontFamily: 'Circular Std Bold'
  },
  earningView: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    alignItems: 'center',
    paddingHorizontal: 15
  },
  viewStatsText: {
    color: '#5AAC4E',
    fontSize: 12,
    fontWeight: '500',
    marginRight: 2,
    marginBottom: 2,
    fontFamily: 'circular-std-medium-500'
  },
  earningText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'circular-std-medium-500'
  },
  threeCircleView: {
    marginTop: 10,
    height: 90,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  addText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 8,
    color: '#000000',
    fontFamily: 'circular-std-medium-500'
  },
  sendText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 13,
    marginTop: 8,
    color: '#000000',
    fontFamily: 'circular-std-medium-500'
  },
  requestText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
    marginTop: 8,
    color: '#000000',
    fontFamily: 'circular-std-medium-500'
  },
  circleView: {
    height: 60,
    width: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  transactionsText: {
    color: '#494C54',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'circular-std-medium-500'
  },
  NotificationText: {
    color: '#B1B2B3',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'circular-std-medium-500',
    marginLeft: 10
  },
  transactionsView: {
    height: 210,
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    paddingTop: 10,
    paddingHorizontal: 15
  },
  sendMoneyText: {
    fontSize: 16,
    fontFamily: 'circular-std-medium-500',
    color: '#000000'
  },
  WalletsText: {
    fontSize: 14,
    fontFamily: 'Spartan-Regular',
    color: '#000000'
  },
  sendMoneyView: {
    flexDirection: 'row',
    //marginLeft: 10
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
    marginTop: 10
  },
  userNameView: {
    marginTop: 20
  },
  textInput: {
    height: 50,
    borderColor: '#E2D6D6',
    borderWidth: 1,
    borderRadius: 16,
    paddingLeft: 20,
    marginTop: 5,
    marginHorizontal: 21
  },
  messageInput: {
    height: 110,
    borderColor: '#E2D6D6',
    borderWidth: 1,
    borderRadius: 16,
    paddingLeft: 20,
    paddingBottom: 60,
    marginTop: 5,
    marginHorizontal: 21
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
  referalView: {
    height: 30,
    width: 70,
    paddingTop: 5,
  },
  peView: {
    height: 30,
    width: 70,
    paddingTop: 5,
    paddingRight: 22
  },
  sliderSTyle: {
    height: 80,
    width: 120,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    marginLeft: 15,
    borderRadius: 18,
    elevation: 1,
    paddingLeft: 15,
    paddingTop: 10
  },
  sliderGreenSTyle: {
    height: 80,
    width: 120,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    marginLeft: 15,
    borderRadius: 18,
    elevation: 1,
    paddingLeft: 15,
    paddingTop: 10,
    borderWidth: 1,
    borderColor: '#5AAC4E'
  },
  addWalletView: {
    height: 80,
    width: 120,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: '#5AAC4E',
    marginLeft: 15,
    marginTop: 5,
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
});

export default HomeScreen;