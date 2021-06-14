import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '../theme';

const Adult = ({adultCount, addAdult, removeAdult}) => {
  return (
    <View style={styles.roomItemWrap}>
      <View style={styles.leftItem}>
        <Icon
          name="user"
          type="font-awesome"
          size={24}
          color={Colors.primary}
        />
        <Text style={styles.text}>Adult</Text>
      </View>
      <View style={styles.counterBtnWrap}>
        <TouchableOpacity
          style={styles.decrement}
          activeOpacity={0.6}
          onPress={removeAdult}>
          <Icon
            name="minus"
            type="font-awesome"
            size={18}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Text style={styles.btnText}>{adultCount}</Text>
        <TouchableOpacity
          style={styles.increment}
          activeOpacity={0.6}
          onPress={addAdult}>
          <Icon
            name="plus"
            type="font-awesome"
            size={18}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Adult;

const styles = StyleSheet.create({
  roomItemWrap: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.primary,
    fontSize: 24,
    marginLeft: 5,
  },
  counterBtnWrap: {
    // borderWidth: 1,
    borderColor: Colors.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  decrement: {
    backgroundColor: Colors.primary,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  btnText: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
  increment: {
    backgroundColor: Colors.accent,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 30,
  },
});
