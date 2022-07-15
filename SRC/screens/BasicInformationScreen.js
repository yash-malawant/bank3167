import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const BasicInformationScreen = ({navigation}) => {
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
                        <Text style={styles.headerTextView}>Basic Information</Text>
                    </View>
                </View>
            </View>
            <View style={{
                height: HEIGHT / 9,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={styles.profileNameText}>Cristina Martin</Text>
                <Text style={styles.MemberText}>Member Since Sep 2019</Text>
            </View>
            <View style={{ paddingLeft: 20 }}>
                <Text style={styles.ContactText}>Contact Details</Text>
            </View>
            <View style={styles.contactDetailsView}>
                <View>
                    <Text style={styles.addressText}>192, Ardgown Road, London, SE6 1UZ, GB</Text>
                    <TouchableOpacity 
                    onPress={() => { navigation.navigate('EditAddressScreen') }}
                    style={{ flexDirection: 'row', marginTop: 5 }}>
                        <WithLocalSvg width="14" height="14" asset={require('../assets/images/edit.svg')} />
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.addressText}>+44735687589</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5 }}>
                        <WithLocalSvg width="14" height="14" asset={require('../assets/images/edit.svg')} />
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.addressText}>Cristina@example.com</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5 }}>
                        <WithLocalSvg width="14" height="14" asset={require('../assets/images/edit.svg')} />
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}


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
    profileNameText: {
        color: '#000000',
        fontSize: 21,
        fontWeight: '700'
    },
    MemberText: {
        color: '#87868D',
        fontSize: 11,
        fontWeight: '400'
    },
    ContactText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '700'
    },
    addressText: {
        color: '#87868D',
        fontSize: 11,
        fontWeight: '400'
    },
    editText: {
        color: '#5AAC4E',
        fontSize: 12,
        fontWeight: '500',
        marginLeft: 3
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
        color: '#000000',
        fontSize: 15,
        fontWeight: '600'
    },
    contactDetailsView: {
        backgroundColor: '#FFFFFF',
        height: HEIGHT / 4,
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 18,
        paddingTop: 15,
        paddingLeft: 25,
        paddingBottom: 15,
        justifyContent: 'space-between'
    }  
});

export default BasicInformationScreen;