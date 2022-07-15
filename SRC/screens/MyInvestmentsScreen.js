import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView, Dimensions, Image, FlatList, ScrollView, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import ProgressCircle from 'react-native-progress-circle';
import Carousel from 'react-native-snap-carousel';

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Math.round(sliderWidth * 0.7);
const itemHeight = 200;
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43, 40, 41]
        }
    ]
};

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    barPercentage: 0.6,
    height: 5000,
    barRadius: 10,
    fillShadowGradient: `#5AAC4E`,
    fillShadowGradientOpacity: 1,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `#5AAC4E`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,

    style: {
        borderRadius: 16,

    },
    propsForBackgroundLines: {

        //strokeWidth: 1,
        stroke: "#FFFFFF",
        // strokeDasharray: "0",
    },
    propsForLabels: {
        color: '#87868D'
    },
};

const cardArray = [
    {
        id: 0,
        investImage: require('../assets/images/316_yearly.svg'),
        title: 'hello'
    },
    {
        id: 1,
        investImage: require('../assets/images/316_yearly.svg'),
        title: 'hi'
    },
]

const MyInvestmentsScreen = ({ navigation }) => {

    const [show, setShow] = useState(false);

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <View style={{
                    height: '68%',
                    padding: 15
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: '55%',
                        borderBottomWidth: 1,
                        borderColor: '#F1F1F1'
                    }}>
                        <WithLocalSvg width="99" height="43" asset={require('../assets/images/invest_yearly.svg')} />
                        <View>
                            <Text style={styles.earningText}>Earning to Date</Text>
                            <Text style={styles.earningAmount}>£1,23.45 +5%</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: '45%',
                        marginTop: 10
                    }}>
                        <View>
                            <Text style={styles.earningText}>Cumulative ROI</Text>
                            <Text style={styles.earningAmount}>16%</Text>
                        </View>
                        <View style={{
                            backgroundColor: '#F1F1F1',
                            height: '100%',
                            width: 1
                        }} />
                        <View>
                            <Text style={styles.earningText}>Commission</Text>
                            <Text style={styles.earningAmount}>0.007%</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#5AAC4E',
                    height: '32%',
                    padding: 15
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: '100%',
                        alignItems: 'center'
                    }}>
                        <View>
                            <Text style={{
                                color: '#FFFFFF',
                                fontSize: 28,
                                fontFamily: 'Circular Std Bold'
                            }}>£5,223.45</Text>
                            <Text style={{
                                color: '#FDFDFF',
                                fontSize: 11,
                                fontFamily: 'Spartan SemiBold 600'
                            }}>Trading Balance</Text>
                        </View>
                        <View>
                            <Image
                                style={{ height: 25, width: 36 }}
                                source={require('../assets/images/black_lock.png')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    const firstContainer = () => {
        return (
            <View style={styles.firstContainer}>
                {/* <View style={styles.sliderScrollView}> */}
                <Carousel layout={'default'}
                    //ref={(c) => { this._carousel = c; }}
                    data={cardArray}
                    renderItem={_renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth / 1}
                    activeSlideAlignment="start"
                />
                {/* <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}>
                        {cardArray.map((user) => (
                            <TouchableOpacity style={styles.cardsliderSTyle}>
                                <View style={{ height: '65%' }}>
                                    
                                </View>
                                <View style={{ height: '35%', backgroundColor: '#5AAC4E' }}></View>
                                
                            </TouchableOpacity>
                        ))}
                    </ScrollView> */}
                {/* </View> */}

                <View style={styles.threeCircleView}>
                    <View>
                        <View style={styles.circleView}>
                            <WithLocalSvg width="25" height="25" asset={require('../assets/images/card-add.svg')} />
                        </View>
                        <Text style={styles.addText}>Add</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={styles.circleView}>
                                <WithLocalSvg width="25" height="25" asset={require('../assets/images/export.svg')} />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.sendText}>Withdraw</Text>
                    </View>
                    <View>
                        <View style={styles.circleView}>
                            <WithLocalSvg width="25" height="25" asset={require('../assets/images/import.svg')} />
                        </View>
                        <Text style={styles.requestText}>Add Plan</Text>
                    </View>
                </View>
            </View>
        )
    }

    const secondContainer = () => {
        return (
            <View style={styles.secondContainer}>
                <View style={{
                    flexDirection: 'row',
                    height: 30,
                    alignItems: 'center',
                    paddingLeft: 15
                }}>
                    <View style={styles.incomeView}>
                        <Text style={styles.transactionsText}>Trading</Text>
                    </View>
                    <View style={styles.ExpensesView}>
                        <Text style={styles.NotificationText}>Insights</Text>
                    </View>
                    <View style={styles.ExpensesView}>
                        <Text style={styles.NotificationText}>ROI</Text>
                    </View>
                </View>
                <View style={styles.transactionsView}>
                    <View style={{
                        height: '25%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 12,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#E6E6E6'
                    }}>
                        <View>
                            <Text style={{
                                color: '#8E9194',
                                fontSize: 12,
                                fontFamily: 'circular-std-medium-500'
                            }}
                            >Earnings</Text>
                            <Text style={{
                                color: '#000000',
                                fontSize: 26.5,
                                fontFamily: 'Circular Std Bold'
                            }}>£5,223.45</Text>
                        </View>
                        <WithLocalSvg width="76" height="40" asset={require('../assets/images/3m_6m.svg')} />
                    </View>
                    <BarChart
                        style={{ paddingRight: 0 }}
                        data={data}
                        width={WIDTH / 1.1}
                        height={220}
                        showBarTops={false}
                        //yAxisLabel="$"
                        chartConfig={chartConfig}
                    //verticalLabelRotation={30}
                    />
                </View>
                <View style={{
                    height: '5%',
                    justifyContent: 'center',
                    paddingLeft: 17
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#000000',
                        fontFamily: 'circular-std-medium-500'
                    }}>Earning Distribution</Text>
                </View>
                <View style={styles.earningContainerView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ height: 37, width: 37 }}
                            source={require('../assets/images/beverly.png')}
                        />
                        <View style={{ marginLeft: 7 }}>
                            <Text style={styles.beverlyText}>Beverlylondon</Text>
                            <Text style={styles.beverlyAmount}>£1,223.45</Text>
                        </View>
                    </View>
                    <View style={styles.progressCircleView}>
                        <Text style={styles.progressText}>+55%</Text>
                        <ProgressCircle
                            percent={55}
                            radius={25}
                            borderWidth={5}
                            color="#5AAC4E"
                            shadowColor="#CAE0C7"
                            bgColor="#fff"
                        />
                        <TouchableOpacity
                            hitSlop={{ top: 20, bottom: 20, right: 50 }}
                            onPress={() => { setShow(!show) }}>
                            <WithLocalSvg width="11" height="11" asset={require('../assets/images/modal_down_arrow.svg')} />
                        </TouchableOpacity>
                    </View>
                </View>
                {show ? (
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        height: HEIGHT / 3.5,
                        marginHorizontal: 17,
                        marginTop: 5,
                        borderRadius: 9,
                        borderWidth: 1,
                        borderColor: '#5AAC4E',
                        elevation: 10,
                        padding: 3
                    }}>
                        <View style={styles.modalearningContainerView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ height: 37, width: 37 }}
                                    source={require('../assets/images/earning_amazon.png')}
                                />
                                <View style={{ marginLeft: 7 }}>
                                    <Text style={styles.beverlyText}>Amazon</Text>
                                    <Text style={styles.beverlyAmount}>£1,223.45</Text>
                                </View>
                            </View>
                            <View style={styles.progressCircleView}>
                                <Text style={styles.progressText}>+80%</Text>
                                <ProgressCircle
                                    percent={80}
                                    radius={25}
                                    borderWidth={5}
                                    color="#5AAC4E"
                                    shadowColor="#CAE0C7"
                                    bgColor="#fff"
                                />
                                <TouchableOpacity
                                    hitSlop={{ top: 20, bottom: 20, right: 50 }}
                                    onPress={() => { setShow(!show) }}>
                                    <WithLocalSvg width="11" height="11" asset={require('../assets/images/modal_up_arrow.svg')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            height: '20%',
                            marginTop: 10,
                            paddingHorizontal: 35
                        }}>
                            <View>
                                <Text style={styles.earningText}>Invested Amount</Text>
                                <Text style={styles.earningAmount}>£5,223.45</Text>
                            </View>

                            <View>
                                <Text style={styles.earningText}>Avg. Price</Text>
                                <Text style={styles.earningAmount}>£1,165.45</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            height: '20%',
                            marginTop: 10,
                            paddingHorizontal: 35
                        }}>
                            <View>
                                <Text style={styles.earningText}>ROI</Text>
                                <Text style={styles.earningAmount}>0.007%</Text>
                            </View>

                            <View>
                                <Text style={styles.earningText}>Earnings</Text>
                                <Text style={styles.earningAmount}>£9,223.45</Text>
                            </View>
                        </View>
                    </View>) : null
                }
                <View style={[styles.earningContainerView, { marginTop: 10 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ height: 37, width: 37 }}
                            source={require('../assets/images/kitty_kids.png')}
                        />
                        <View style={{ marginLeft: 7 }}>
                            <Text style={styles.beverlyText}>kytty kids</Text>
                            <Text style={styles.beverlyAmount}>£1,223.45</Text>
                        </View>
                    </View>
                    <View style={styles.progressCircleView}>
                        <Text style={styles.progressText}>+35%</Text>
                        <ProgressCircle
                            percent={35}
                            radius={25}
                            borderWidth={5}
                            color="#5AAC4E"
                            shadowColor="#CAE0C7"
                            bgColor="#fff"
                        />
                        <WithLocalSvg width="11" height="11" asset={require('../assets/images/modal_down_arrow.svg')} />
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#FFFFFF',
                    height: HEIGHT / 2,
                    marginHorizontal: 17,
                    marginTop: 10,
                    borderRadius: 17,
                    alignItems: 'center',
                    paddingTop: 22
                }}>
                    <Image
                        style={{ height: 124, width: 168, resizeMode: 'contain' }}
                        source={require('../assets/images/multiple_logo.png')}
                    />
                    <Text style={{
                        textAlign: 'center',
                        color: '#000000',
                        fontSize: 16,
                        fontFamily: 'circular-std-medium-500'
                    }}>Set An Earning Target For {'\n'}Tour Trading Account</Text>
                    <Text style={{
                        textAlign: 'center',
                        marginTop: 10,
                        color: '#87868D',
                        fontSize: 11,
                        fontFamily: 'Spartan-Regular'
                    }}>The aim is to set a goal and work towards {'\n'}
                        achieving it. We will send you upadtes on {'\n'}
                        how far or close you are to acheiving your {'\n'}earning targets.</Text>
                    <View style={styles.QuaterlyView}>
                        <Text style={{
                            color: '#ADADAD',
                            fontSize: 10,
                            fontFamily: 'Spartan-Regular'
                        }}>Quaterly</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: WIDTH / 4.5
                        }}>
                            <Text style={{
                                color: '#000000',
                                fontSize: 15,
                                fontFamily: 'circular-std-medium-500'
                            }}>£1,165.45</Text>
                            <WithLocalSvg width="9" height="9" asset={require('../assets/images/modal_down_arrow.svg')} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.signinButton}>
                        <Text style={styles.signTextStyle}>Set Target</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: HEIGHT / 5.5,
                    marginTop: 15,
                    marginHorizontal: 17,
                    borderRadius: 17,
                }}>
                    <ImageBackground
                        style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
                        source={require('../assets/images/find_it.png')}
                    />
                </View>
                <View style={{
                    height: HEIGHT / 2.5,
                    backgroundColor: '#394148',
                    marginTop: 15,
                    marginHorizontal: 17,
                    borderRadius: 17,
                }}>
                    <View style={{
                        height: '15%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 18
                    }}>
                        <Text style={{
                            color: '#FFFFFF',
                            fontSize: 16,
                            fontFamily: 'circular-std-medium-500'
                        }}>Purchases Points</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{
                                color: '#5AAC4E',
                                fontSize: 12,
                                fontFamily: 'circular-std-medium-500'
                            }}>Shop Now</Text>
                            <WithLocalSvg width="9" height="9" asset={require('../assets/images/green_arrow.svg')} />
                        </View>
                    </View>
                    <View style={{
                        height: '45%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 30
                    }}>
                        <Image
                            style={{ height: 112, width: 121, resizeMode: 'contain' }}
                            source={require('../assets/images/star.png')}
                        />
                        <View>
                            <Text style={{
                                color: '#C1C1C1',
                                fontSize: 9.3,
                                fontFamily: 'Spartan-Regular'
                            }}>Points Earned</Text>
                            <Text style={{
                                color: '#FFFFFF',
                                fontSize: 39,
                                fontFamily: 'Circular Std Bold'
                            }}>100</Text>
                            <Text style={{
                                color: '#FFFFFF',
                                fontSize: 10,
                                marginTop: 15,
                                fontFamily: 'Spartan-Regular'
                            }}>Total Point Value</Text>
                            <Text style={{
                                color: '#FFFFFF',
                                fontSize: 15,
                                fontFamily: 'circular-std-medium-500'
                            }}>£1,00.45</Text>
                        </View>
                    </View>
                    <View style={{
                        height: '10%',
                        paddingLeft: 30,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: '#FFFFFF',
                            fontSize: 16,
                            fontFamily: 'circular-std-medium-500'
                        }}>Purchases</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 18,

                    }}>
                        <Image
                            style={{
                                height: 164,
                                width: 296,
                                resizeMode: 'contain',
                                position: 'absolute',
                                left: 30
                            }}
                            source={require('../assets/images/two_card.png')}
                        />
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 125,
                    marginBottom: 45,
                    marginTop: 90,
                    borderRadius: 18,
                }}>
                    <WithLocalSvg width="100%" height="100%" asset={require('../assets/images/claim_reward.svg')} />
                </View>
                <View style={{ height: HEIGHT / 17 }} />
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
            <View style={styles.headerStyle}>
                <View>
                    <View style={styles.morningView}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <WithLocalSvg width="18" height="18" asset={require('../assets/images/back_arrow.svg')} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 10 }}>
                            <WithLocalSvg width="100" height="25" asset={require('../assets/images/316_invest.svg')} />
                        </View>
                    </View>
                </View>
                <View>
                    <WithLocalSvg width="96" height="30" asset={require('../assets/images/myPlans.svg')} />
                </View>
            </View>
            <ScrollView>
                {firstContainer()}
                {secondContainer()}
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
        height: HEIGHT / 2.5,
        width: '100%',
        backgroundColor: '#E0EBE2',
    },
    slide: {
        width: itemWidth,
        height: itemHeight,
        //paddingHorizontal: horizontalMargin,
        backgroundColor: '#FFFFFF',
        marginLeft: 20,
        borderRadius: 8
        // other styles for the item container
    },
    slideInnerContainer: {
        width: slideWidth / 1.2,
        flex: 1,
        backgroundColor: 'red',

        // other styles for the inner container
    },
    headerStyle: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    headerTextView: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Spartan Bold 700',
    },
    morningView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondContainer: {
        //height: HEIGHT,
        width: '100%',
        backgroundColor: '#F9FBF9',
        borderTopLeftRadius: 39,
        borderTopRightRadius: 39,
        paddingTop: 20,
        marginTop: 10
    },
    sliderScrollView: {
        marginTop: 10,
        height: HEIGHT / 4,
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    sliderSTyle: {
        marginTop: 15,
        height: 80,
        width: 123,
        backgroundColor: '#FFFFFF',
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 18,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        paddingLeft: 15,

    },
    cardsliderSTyle: {
        height: '97%',
        width: '70%',
        backgroundColor: '#F2F6F2',
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 18,
    },
    threeCircleView: {
        marginTop: 10,
        height: 90,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    addText: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 13,
        marginTop: 8,
        color: '#000000',
        fontFamily: 'circular-std-medium-500'
    },
    sendText: {
        fontSize: 14,
        fontWeight: '500',
        //marginLeft: 13,
        marginTop: 8,
        color: '#000000',
        fontFamily: 'circular-std-medium-500'
    },
    requestText: {
        fontSize: 14,
        fontWeight: '500',
        //marginLeft: 4,
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
    textInput: {
        height: 50,
        borderColor: '#5AAC4E',
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 20,
        marginTop: 5,
        marginHorizontal: 21
    },
    incomeView: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 100,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    ExpensesView: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 100,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    transactionsView: {
        height: HEIGHT / 2.5,
        backgroundColor: '#FFF',
        marginHorizontal: 15,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopRightRadius: 12,
        paddingTop: 10,
        paddingHorizontal: 15
    },
    earningContainerView: {
        backgroundColor: '#FFFFFF',
        height: HEIGHT / 11,
        marginHorizontal: 17,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#F4F4F4',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    modalearningContainerView: {
        backgroundColor: '#FFFFFF',
        height: '30%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#EAEFF2'
    },
    beverlyText: {
        color: '#A8A8A8',
        fontSize: 10,
        fontFamily: 'Spartan-Regular'
    },
    beverlyAmount: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'circular-std-medium-500'
    },
    progressCircleView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH / 3,
        justifyContent: 'space-around'
    },
    progressText: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'circular-std-medium-500'
    },
    QuaterlyView: {
        height: '10%',
        width: '82%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#EAEFF2',
        marginTop: 10
    },
    signTextStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },
    signinButton: {
        height: 52,
        width: '90%',
        backgroundColor: '#5AAC4E',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 333,
        marginTop: 20,
        // marginHorizontal: 21
    },
    earningText: {
        fontSize: 10,
        color: '#494C54',
        fontFamily: 'Spartan SemiBold 600'
    },
    earningAmount: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'circular-std-medium-500',
        marginTop: 4
    }
});

export default MyInvestmentsScreen;