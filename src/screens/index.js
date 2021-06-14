import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import Room from '../components/Room';
import Adult from '../components/Adult';
import Child from '../components/Child';

const MainScreen = () => {
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const MAX_ROOM = 5;
  const MIN_ROOM = 1;
  const MAX_PERSON_PER_ROOM = 4;
  const MIN_PERSON_PER_ROOM = 1;
  const MIN_ADULT = 1;
  const TOTAL_PERSON = MAX_ROOM * MAX_PERSON_PER_ROOM;

  useEffect(() => {
    const totalPerson = adultCount + childCount;

    if (totalPerson > 1 && totalPerson <= 4) {
      setRoomCount(1);
    } else if (totalPerson > 4 && totalPerson <= 8) {
      setRoomCount(2);
    } else if (totalPerson > 8 && totalPerson <= 12) {
      setRoomCount(3);
    } else if (totalPerson > 12 && totalPerson <= 16) {
      setRoomCount(4);
    } else if (totalPerson > 16 && totalPerson <= 20) {
      setRoomCount(5);
    }
  }, [adultCount, childCount]);

  // increment room handler
  const addRoom = () => {
    if (roomCount >= MAX_ROOM) return;
    setRoomCount(p => p + 1);
  };
  // decrement room handler
  const removeRoom = () => {
    if (roomCount <= MIN_ROOM) return;
    setRoomCount(p => p - 1);
  };

  // increment adult handler
  const addAdult = () => {
    const totalPerson = adultCount + childCount;
    if (totalPerson >= TOTAL_PERSON) return;
    setAdultCount(p => p + 1);
  };

  // decrement adult handler
  const removeAdult = async () => {
    if (adultCount <= 0) return;
    setAdultCount(p => p - 1);
  };

  // increment children handler
  const addChild = () => {
    const totalPerson = adultCount + childCount;
    if (totalPerson >= TOTAL_PERSON) return;
    setChildCount(p => p + 1);
  };

  // decrement children handler
  const removeChild = () => {
    if (childCount <= 0) return;
    setChildCount(p => p - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#BA135D',
            paddingVertical: 20,
          }}>
          Room Booking
        </Text>
      </View>
      <Room roomCount={roomCount} addRoom={addRoom} removeRoom={removeRoom} />
      <Adult
        adultCount={adultCount}
        addAdult={addAdult}
        removeAdult={removeAdult}
      />
      <Child
        childCount={childCount}
        addChild={addChild}
        removeChild={removeChild}
      />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'lightgreen',
  },
});
