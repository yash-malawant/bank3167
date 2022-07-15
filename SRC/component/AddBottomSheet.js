import React, { useCallback, useMemo, useRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { View, Button, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const AddBottomSheet = () => {

  const navigation = useNavigation();

  const bottomSheetModalRef = useRef(null)

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index)
  }, [])
  const hideBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={handlePresentModalPress}>
        <WithLocalSvg width="75" height="75" asset={require('../assets/images/Group_6.svg')} />
      </TouchableOpacity>

      <BottomSheetModal

        detached
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={[60, "50%"]}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <View style={styles.modalTabsMainView}>
            <View style={styles.modalTabs}>
            <WithLocalSvg width="27" height="27" asset={require('../assets/images/Group_720.svg')} />
            <Text style={styles.modalTabText}>Send Money</Text>
            </View>
            <View style={styles.modalTabs}>
            <WithLocalSvg width="27" height="27" asset={require('../assets/images/Group_720_1.svg')} />
            <Text style={styles.modalTabText}>Request Money</Text>
            </View>
            <View style={styles.modalTabs}>
            <WithLocalSvg width="27" height="27" asset={require('../assets/images/Group_720_2.svg')} />
            <Text style={styles.modalTabText}>Withdraw</Text>
            </View>
          </View>
          <View style={styles.modalTabs2MainView}>
            <View style={styles.modalTabs}>
            <WithLocalSvg width="27" height="27" asset={require('../assets/images/Group_720_3.svg')} />
            <Text style={styles.modalTabText}>316 Pay</Text>
            </View>
            <View style={styles.modalTabs}>
            <WithLocalSvg width="27" height="27" asset={require('../assets/images/Group_720_4.svg')} />
            <Text style={styles.modalTabText}>316 Remit</Text>
            </View>
            <View style={styles.modalTabs}>
            <WithLocalSvg width="27" height="27" asset={require('../assets/images/Group_720_5.svg')} />
            <Text style={styles.modalTabText}>316 Marketplace</Text>
            </View>
          </View>
          <View style={styles.modalTabs3MainView}>
            <View style={styles.modalTabs}>
            <WithLocalSvg width="27" height="27" asset={require('../assets/images/Group_720_6.svg')} />
            <Text style={styles.modalTabText}>Hotspots</Text>
            </View>
            <TouchableOpacity 
            onPress={() => { navigation.navigate('MyInvestmentsScreen') }}
            style={styles.modal2Tabs}>
            <WithLocalSvg width="27" height="27" asset={require('../assets/images/Group_720_7.svg')} />
            <Text style={styles.modalTabText}>My Investments</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            backgroundColor: '#3C444B',
            width: '100%',
            alignItems: 'center',
            marginTop: 15
          }}>
            <TouchableOpacity onPress={hideBottomSheet}>
              <ImageBackground 
              style={{height: 50, width: 50, justifyContent: 'center', alignItems: 'center'}}
              source={require('../assets/images/Ellipse_1.png')}>
              <WithLocalSvg width="17" height="17" asset={require('../assets/images/Group_10140.svg')} />
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetModal>
    </View>
  )
}

export default AddBottomSheet;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 24,
  //   backgroundColor: 'grey',
  // },
  contentContainer: {
    flex: 1,
    backgroundColor: '#3C444B',
    padding: 15
    //paddingLeft: 50
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: '500'
  },
  modalTabs: {
    backgroundColor: '#3F474E',
    height: '100%',
    width: '30%',
    borderRadius: 18,
    elevation: 20,
    paddingVertical: 15,
    paddingLeft: 15
  },
  modalTabsMainView: {
    flexDirection: 'row',
    height: '25%',
    justifyContent: 'space-between'
  },
  modalTabs2MainView: {
    flexDirection: 'row',
    height: '25%',
    justifyContent: 'space-between',
    marginTop: 15
  },
  modalTabs3MainView: {
    flexDirection: 'row',
    height: '25%',
    marginTop: 15
  },
  modal2Tabs: {
    backgroundColor: '#3F474E',
    height: '100%',
    width: '30%',
    borderRadius: 18,
    elevation: 20,
    marginLeft: 17,
    paddingVertical: 15,
    paddingLeft: 15
  },
  modalTabText: {
    marginTop: 15, 
    fontSize: 10,
    color: '#FFFFFF',
    fontFamily: 'circular-std-medium-500'
  }
});