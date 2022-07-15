import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ImageBackground, TextInput, SafeAreaView, Image, FlatList, StatusBar, ScrollView } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import DocumentPicker from 'react-native-document-picker';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AddNewTicket = ({ navigation }) => {

    const uploadDocument = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
                mode: 'open',
            });
            console.log('res[0]', res[0]);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err;
            }
        }
    };

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
                        <Text style={styles.headerTextView}>Add New Ticket</Text>
                    </View>
                </View>
            </View>
            <View style={styles.sheetCountryView}>
                <Text style={{
                    color: '#000000',
                    fontSize: 12,
                    fontFamily: 'Spartan SemiBold 600'
                }}>Send Ticket To</Text>
                <View style={styles.CountrytextInput}>
                    <Text style={styles.EnglandText}>Select person</Text>
                    <WithLocalSvg width="17" height="17" asset={require('../assets/images/dropDown.svg')} />
                </View>
            </View>
            <View style={styles.userNameView}>
                <View style={{ paddingLeft: 25 }}>
                    <Text style={{
                        color: '#000000',
                        fontSize: 12,
                        fontFamily: 'Spartan SemiBold 600'
                    }}>Subject</Text>
                </View>
                <TextInput
                    placeholder='Type Subject'
                    style={styles.textInput}
                />
            </View>
            <View style={styles.userNameView}>
                <View style={{ paddingLeft: 25 }}>
                    <Text style={{
                        color: '#000000',
                        fontSize: 12,
                        fontFamily: 'Spartan SemiBold 600'
                    }}>Description</Text>
                </View>
                <TextInput
                    placeholder='Min.10 words'
                    style={styles.messageInput}
                />
            </View>
            <TouchableOpacity style={{
                height: '30%',
                marginHorizontal: 20,
                marginTop: 15,
                borderRadius: 16
            }}
                onPress={uploadDocument}>
                <ImageBackground
                    style={{ height: '100%', width: '100%' }}
                    resizeMode='contain'
                    source={require('../assets/images/green_dash_card.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    refRBSheet.current.close();
                    navigation.navigate('SendMoneyScreen')
                }}
                style={styles.signinButton}>
                <Text style={styles.signTextStyle}>Send</Text>
            </TouchableOpacity>
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
    userNameView: {
        marginTop: 20
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        height: 50,
        borderColor: '#E2D6D6',
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 20,
        marginTop: 5,
        marginHorizontal: 21
    },
    messageInput: {
        backgroundColor: '#FFFFFF',
        height: HEIGHT / 6,
        borderColor: '#E2D6D6',
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 20,
        paddingBottom: 60,
        marginTop: 5,
        marginHorizontal: 21
    },
    sheetCountryView: {
        paddingHorizontal: 20,
        marginTop: 25
    },
    CountrytextInput: {
        backgroundColor: '#FFFFFF',
        height: 50,
        borderColor: '#E2D6D6',
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 22,
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    houseNameText: {
        fontSize: 12,
        color: '#000000',
        fontWeight: "600",
        marginLeft: 3
    },
    EnglandText: {
        fontSize: 17,
        color: '#262C26',
        fontWeight: "700",
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
});

export default AddNewTicket;