import {StyleSheet, Text, View, Image, StatusBar, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Header from './Header';
import {getWeather} from '../src/api';
// import Header from './Header';
import GetLocation from 'react-native-get-location';
const Home = () => {
  var date = new Date();
  const [data, setdata] = React.useState(null);
  const [location, setlocation] = React.useState(null);
  const [value, setval] = React.useState('');
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [forcastArray, setforcastArray] = React.useState([]);
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setCurrentLocation(location);
        console.log(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
    setval('');
  }, []);
  useEffect(() => {
    var query = `${currentLocation?.latitude},${currentLocation?.longitude}`;
    getWeather('/forecast.json', query)
      .then(res => {
        setdata(res.data?.current);
        setlocation(res.data?.location);
        setforcastArray(res.data?.forecast?.forecastday);
      })
      .catch(err => {
        console.log(err);
      });
  }, [currentLocation]);
  const getData = () => {
    getWeather('/forecast.json', value)
      .then(res => {
        setdata(res.data?.current);
        setlocation(res.data?.location);
        setforcastArray(res.data?.forecast?.forecastday);
        setval('');
      })
      .catch(err => {
        console.log(err);
      });
  };
  console.log(forcastArray);
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <StatusBar
        // translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Header
        onChangeText={txt => setval(txt)}
        value={value}
        onPress={() => getData()}
        onSubmitEditing={({nativeEvent: {text, eventCount, target}}) => {
          setval(text);
          getData();
        }}
      />
      <View
        style={
          {
            // justifyContent: 'center',
            // alignItems: 'center',
          }
        }>
        <Image
          source={{uri: `https:${data?.condition?.icon}`}}
          style={{
            height: 123,
            width: 123,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // width: '45%',
            justifyContent: 'center',
            // padding: 3,
            // marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 30,
              lineHeight: 45,
              fontFamily: 'Poppins-SemiBold',
              color: '#2C2C2C',
            }}>
            {location?.name}
          </Text>
          <Image
            source={require('../Icons/arow.png')}
            style={{height: 20, width: 20, marginHorizontal: 10}}
          />
        </View>
        <Text
          style={{
            fontSize: 70,
            fontFamily: 'Poppins-semiBold',
            color: '#2C2C2C',
            textAlign: 'center',
          }}>
          {data?.temp_c}°C
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
          <Text>{date.toLocaleTimeString()}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>UV</Text>
          <Text>{data?.uv}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>RAIN</Text>
          <Text>{forcastArray[0]?.day?.daily_chance_of_rain}%</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Humidity</Text>
          <Text>{data?.humidity}</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 14}}>
        <FlatList
          data={forcastArray}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: 110,
                  width: 200,
                  padding: 10,
                  margin: 10,
                  marginTop: 30,
                  backgroundColor: '#eee',
                  borderRadius: 10,
                  elevation: 5,
                }}>
                <Text
                  style={{textAlign: 'center', fontFamily: 'Poppins-Regular'}}>
                  {item?.date}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '90%',
                    height: 70,
                  }}>
                  <Image
                    source={{uri: `https:${item?.day?.condition?.icon}`}}
                    style={{height: 60, width: 60}}
                  />
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular'}}>
                      {item?.day?.mintemp_c}°
                    </Text>
                    <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular'}}>
                      {item?.day?.maxtemp_c}°
                    </Text>
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular'}}>
                      RAIN
                    </Text>
                    <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular'}}>
                      {item?.day?.daily_chance_of_rain}%
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
