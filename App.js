/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import LoginScreen from './SRC/screens/LoginScreen';
import HomeScreen from './SRC/screens/HomeScreen';
import WalletScreen from './SRC/screens/WalletScreen';
import RecepientsScreen from './SRC/screens/RecepientsScreen';
import AccountScreen from './SRC/screens/AccountScreen';
import BasicInformationScreen from './SRC/screens/BasicInformationScreen';
import EditAddressScreen from './SRC/screens/EditAddressScreen';
import SendMoneyScreen from './SRC/screens/SendMoneyScreen';
import WithdrawScreen from './SRC/screens/WithdrawScreen';
import WalletDetailScreen from './SRC/screens/WalletDetailScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddBottomSheet from './SRC/component/AddBottomSheet';
import { PortalProvider } from '@gorhom/portal';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import MyInvestmentsScreen from './SRC/screens/MyInvestmentsScreen';
import SendMoneyPaymentScreen from './SRC/screens/SendMoneyPaymentScreen';
import TransferSuccessScreen from './SRC/screens/TransferSuccessScreen';
import WithdrawSummeryScreen from './SRC/screens/WithdrawSummeryScreen';
import WithdrawSuccessScreen from './SRC/screens/WithdrawSuccessScreen';
import SendMoneyConfirmationScreen from './SRC/screens/SendMoneyConfirmationScreen';
import AddMoneyPaymentScreen from './SRC/screens/AddMoneyPaymentScreen';
import AddMoneySummaryScreen from './SRC/screens/AddMoneySummaryScreen';
import AllTransactionsScreen from './SRC/screens/AllTransactionsScreen';
import MoneyRecievedScreen from './SRC/screens/MoneyRecievedScreen';
import SavedCardScreen from './SRC/screens/SavedCardScreen';
import TicketScreen from './SRC/screens/TicketScreen';
import AddNewTicket from './SRC/screens/AddNewTicket';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const AddScreenComponent = () => {
  return null;
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // style: {
        //   position: 'absolute',
        //   bottom: 25, 
        //   left: 20,
        //   right: 20,
        //   backgroundColor: '#ffffff',
        //   borderRadius: 15,
        //   ...styles.shadow,
        //   paddingBottom: 5
        // },
        tabBarStyle: {
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
          height: 55
          // padding: 10
        },
        headerShown: false,
        tabBarInactiveTintColor: '#B3B5B7',
        tabBarActiveTintColor: '#292D32',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: config => (
            <Image
              style={
                config.focused ? styles.ImageTintBottom : styles.ImageBottom
              }
              source={require('./SRC/assets/images/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen name="Wallet" component={WalletScreen}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: config => (
            <Image
              style={
                config.focused ? styles.ImageTintBottom : styles.ImageBottom
              }
              source={require('./SRC/assets/images/empty-wallet.png')}
            />
          ),
        }}
      />
      <Tab.Screen name="Add" component={AddScreenComponent}
        options={{
          tabBarButton: () => <AddBottomSheet />,
        }}
      // options={{
      //   tabBarIcon: config => (
      //     <Image source={require('./SRC/assets/images/Group_6.png')}
      //     />
      //   ),
      // }}
      />
      <Tab.Screen name="Recepients" component={RecepientsScreen}
        options={{
          tabBarLabel: 'Recepients',
          tabBarIcon: config => (
            <Image
              style={
                config.focused ? styles.ImageTintBottom : styles.ImageBottom
              }
              source={require('./SRC/assets/images/receipt-item.png')}
            />
          ),
        }}
      />
      <Tab.Screen name="Account" component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: config => (
            <Image
              style={
                config.focused ? styles.ImageTintBottom : styles.ImageBottom
              }
              source={require('./SRC/assets/images/profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {

  return (
    <SafeAreaProvider>
    <BottomSheetModalProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="MyTabs"
              component={MyTabs}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="BasicInformationScreen"
              component={BasicInformationScreen}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="EditAddressScreen"
              component={EditAddressScreen}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="SendMoneyScreen"
              component={SendMoneyScreen}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="WithdrawScreen"
              component={WithdrawScreen}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name="WalletDetailScreen"
              component={WalletDetailScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="MyInvestmentsScreen"
              component={MyInvestmentsScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="SendMoneyPaymentScreen"
              component={SendMoneyPaymentScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="TransferSuccessScreen"
              component={TransferSuccessScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="WithdrawSummeryScreen"
              component={WithdrawSummeryScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="WithdrawSuccessScreen"
              component={WithdrawSuccessScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="SendMoneyConfirmationScreen"
              component={SendMoneyConfirmationScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="AddMoneyPaymentScreen"
              component={AddMoneyPaymentScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="AddMoneySummaryScreen"
              component={AddMoneySummaryScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="AllTransactionsScreen"
              component={AllTransactionsScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="MoneyRecievedScreen"
              component={MoneyRecievedScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="SavedCardScreen"
              component={SavedCardScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="TicketScreen"
              component={TicketScreen}
              options={{
                headerShown: false,
              }} />
              <Stack.Screen
              name="AddNewTicket"
              component={AddNewTicket}
              options={{
                headerShown: false,
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  ImageTintBottom: { tintColor: '#292D32' },
  ImageBottom: { tintColor: '#B3B5B7' },
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
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0, 
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});

export default App;
