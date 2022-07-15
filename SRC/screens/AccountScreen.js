import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar, Dimensions, ScrollView } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#E0EBE2"
      />
      <ScrollView>
        <View style={styles.firstContainer}>
          <View style={styles.prfileImageView}>
            <Image
              resizeMode='contain'
              style={{ alignSelf: 'center', height: HEIGHT / 6 }}
              source={require('../assets/images/profile_Dummy.png')}
            />
            <Text style={styles.profileName}>Cristina Martin</Text>
          </View>
        </View>
        <View style={styles.secondContainer}>

          <View style={styles.profileListMainView}>
            <TouchableOpacity
              style={styles.amazonMainView}
              onPress={() => { navigation.navigate('BasicInformationScreen') }}>

              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/profile.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>Profile</Text>
                  <Text style={styles.dateText}>Login Details  Personal Details</Text>
                </View>
              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />

            </TouchableOpacity>
            <View style={styles.amazonMainView}>
              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/location.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>Saved Addresses</Text>
                  <Text style={styles.dateText}>Adresses</Text>
                </View>

              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />
            </View>
            <TouchableOpacity
              style={styles.amazonMainView}
              onPress={() => { navigation.navigate('SavedCardScreen') }}>
              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/card2.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>Saved Banks</Text>
                  <Text style={styles.dateText}>Saved Banks, Saved Cards</Text>
                </View>
              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />
            </TouchableOpacity>
            <View style={styles.amazonMainView}>
              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/lock2.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>Security and Privacy</Text>
                  <Text style={styles.dateText}>Change your password</Text>
                </View>
              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />
            </View>
            <View style={styles.amazonMainView}>
              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/reports.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>Statements and Reports</Text>
                  <Text style={styles.dateText}>Standard Statement , Trading Sta...</Text>
                </View>
              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />
            </View>
            <View style={styles.amazonMainView}>
              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/notification.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>Manage Notifications</Text>
                  <Text style={styles.dateText}> Notifications</Text>
                </View>
              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />
            </View>
            <TouchableOpacity
              style={styles.amazonMainView}
              onPress={() => { navigation.navigate('TicketScreen') }}>
              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/call2.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>Help and Support</Text>
                  <Text style={styles.dateText}>Message Centre, Book A Call , Crea...</Text>
                </View>
              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />
            </TouchableOpacity>
            <View style={styles.amazonMainView}>
              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/wallet-money.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>Purchases and Points</Text>
                  <Text style={styles.dateText}>Purchases and Points</Text>
                </View>
              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />
            </View>
            <View style={styles.amazonMainView}>
              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/shield.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>Legal</Text>
                  <Text style={styles.dateText}>Terms of Use, Customer Agreement...</Text>
                </View>
              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />
            </View>
            <View style={styles.amazonMainView}>
              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/ticket-star.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>My Referrals</Text>
                  <Text style={styles.dateText}>Referrals</Text>
                </View>
              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />
            </View>
            <View style={styles.amazonMainView}>
              <View style={styles.amazonView}>
                <View style={styles.profileListView}>
                  <WithLocalSvg width="18" height="18" asset={require('../assets/images/card-remove.svg')} />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.amazonText}>Close Account</Text>
                  <Text style={styles.dateText}>Close 316 Account , Close Trading Ac...</Text>
                </View>
              </View>
              <Image
                source={require('../assets/images/arrow.png')}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.signinButton}>
            <Text style={styles.signTextStyle}>Logout</Text>
            <WithLocalSvg width="18" height="18" asset={require('../assets/images/logout.svg')} />
          </TouchableOpacity>
          <View style={{ height: HEIGHT / 20 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E0EBE2',
  },
  firstContainer: {
    height: HEIGHT / 4,
    width: '100%',
    backgroundColor: '#E0EBE2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  prfileImageView: {
    height: HEIGHT / 4,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    color: '#000000',
    fontSize: 21,
    //fontWeight: '700',
    marginTop: 5,
    fontFamily: 'Circular Std Bold'
  },
  secondContainer: {
    //height: HEIGHT,
    width: '100%',
    backgroundColor: '#F9FBF9',
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    paddingTop: 30,
    paddingHorizontal: 20
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
  redText: {
    marginTop: 5,
    color: '#FD6363',
    fontSize: 14,
    fontWeight: '700'
  },
  profileListMainView: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 18,
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
  signTextStyle: {
    color: '#3C444B',
    fontSize: 18,
    fontFamily: 'circular-std-medium-500',
    marginRight: 5
  },
  signinButton: {
    height: 52,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 333,
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#3C444B',
    flexDirection: 'row'
  },
})

export default AccountScreen;