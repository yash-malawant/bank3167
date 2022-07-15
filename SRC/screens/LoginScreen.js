import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const firstContainer = () => {
        return (
            <View style={styles.firstContainer}>
                <Image
                    style={Platform.OS === 'android' && styles.loginImage}
                    source={require('../assets/images/Login.png')}
                    resizeMode='contain'
                />
            </View>
        )
    }

    const secondContainer = () => {
        return (
            <View style={styles.secondContainer}>
                <Text style={styles.welcomeText}>Welcome Back!</Text>
                <View style={styles.userNameView}>
                    <Text style={{ fontSize: 12, color: '#000000', fontWeight: '600' }}>UserName</Text>
                    <TextInput
                        placeholder='Cristina@example.com'
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.passwordView}>
                    <Text style={styles.passwordText}>Password</Text>
                    <View style={styles.passtextInput}>
                        <TextInput
                            placeholder='Enter Password'
                        />
                        <Image source={require('../assets/images/eye.png')} />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('MyTabs') }}
                    style={styles.signinButton}>
                    <Text style={styles.signTextStyle}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.forgotViewStyle}>
                    <TouchableOpacity>
                        <Text style={styles.forgotTextStyle}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
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
            {firstContainer()}
            {secondContainer()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E0EBE2',
    },
    firstContainer: {
        height: Platform.OS === "android" ? '41%' : '42.5%',
        width: '100%',
        backgroundColor: '#E0EBE2'
    },
    secondContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F9FBF9',
        paddingHorizontal: 21
    },
    welcomeText: {
        color: '#000000',
        fontSize: 23,
        fontWeight: '700',
        marginTop: 10,
        fontFamily: 'circular-std-medium-500'
    },
    forgotTextStyle: {
        color: '#5AAC4E',
        fontSize: 15,
        fontWeight: '700'
    },
    forgotViewStyle: {
        marginTop: 48,
        justifyContent: 'center',
        alignItems: "center",
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
        marginTop: 45
    },
    textInput: {
        height: 40,
        borderColor: '#E2D6D6',
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 15,
        marginTop: 5
    },
    passtextInput: {
        height: 40,
        borderColor: '#E2D6D6',
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    passwordText: { fontSize: 12, color: '#000000', fontWeight: '600' },
    passwordView: { marginTop: 25 },
    userNameView: {
        marginTop: 40
    },
    loginImage: {
        height: '100%',
        width: '100%'
    }
});

export default LoginScreen;