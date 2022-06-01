import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';

const Header = ({onChangeText, value, onPress, onSubmitEditing}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#EFEFEF',
        borderRadius: 15,
        paddingHorizontal: 15,
        marginVertical: 44,
        height: 46,
        marginHorizontal: 24,
      }}>
      <TextInput
        style={{
          paddingHorizontal: 5,
          lineHeight: 22.5,
          fontSize: 15,
          fontFamily: 'Poppins-Regular',
          width: '90%',
        }}
        placeholder="Search Location"
        placeholderTextColor="#C4C4C4"
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={onSubmitEditing}
      />
      <Pressable onPress={onPress}>
        <Image
          source={require('../Icons/search.png')}
          style={{
            height: 17.5,
            width: 17.5,
            tintColor: value.length > 1 ? '#000' : undefined,
          }}
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
