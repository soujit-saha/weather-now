import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React from 'react';
import Header from './Header';
// import Header from './Header';

const Home = () => {
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <StatusBar
        // translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      {/* <Header /> */}
      <Header />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../Icons/sunny.png')}
          style={{height: 123, width: 123}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '45%',
            justifyContent: 'space-between',
            padding: 3,
            marginTop: 20,
          }}>
          <View style={{height: 20, width: 20}}></View>
          <Text
            style={{
              fontSize: 30,
              lineHeight: 45,
              fontFamily: 'Poppins-SemiBold',
              color: '#2C2C2C',
            }}>
            Kolkata
          </Text>
          <Image
            source={require('../Icons/arow.png')}
            style={{height: 20, width: 20}}
          />
        </View>

        <Text
          style={{
            fontSize: 70,
            fontFamily: 'Poppins-Bold',
            color: '#2C2C2C',
          }}>
          25°
        </Text>
      </View>
      <View>
        {/* /////////////////////////////////////////////////////////////////// */}
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#EFEFEF',
          borderRadius: 11,
          paddingHorizontal: 15,

          height: 60,
          marginHorizontal: 24,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>TIME</Text>
          <Text>11:25 AM</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>UV</Text>
          <Text>4</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>%RAIN</Text>
          <Text>58%</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>AQ</Text>
          <Text>22</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#EFEFEF',
          borderRadius: 11,
          paddingHorizontal: 15,
          marginVertical: 11,

          marginHorizontal: 24,
        }}>
        <Text>SUNRISE & SUNSET</Text>
        <View>
          <Image source={require('../Icons/pic1.png')} />
          <View>
            <Text>Sunrise</Text>
            <Text>06:25 AM</Text>
            <View style={{borderWidth: 1, borderColor: 'black'}}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
