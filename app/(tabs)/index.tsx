import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements'




const Page = () => {

  const headerHeight = useHeaderHeight();


  return (
    <>
      <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity onPress={() => {}} style={{marginLeft: 20}}>
            <Image source={{
              uri: 'https://www.pexels.com/photo/woman-posing-for-photo-shoot-1391498/'
            }}
            style={{height: 40, width: 40, borderRadius: 10}}
            />
          </TouchableOpacity>
        ),

        headerRight: () => (
          <TouchableOpacity onPress={() => {}} 
            style={{
              backgroundColor: Colors.white,
              marginRight: 20,
              padding: 10,
              borderRadius: 10,
              shadowColor: '#171717',
              shadowOffset: {width: 2, height: 4},
              shadowRadius: 3
              }}>
            <Ionicons name='notifications' color={Colors.black} size={28}/>
          </TouchableOpacity>
        )
      }}/>

      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headerText}>
          Explore the Opportunities
        </Text>

        <View style={styles.searchWrapper}>
          <View style={styles.search}>
            <Ionicons name='search' size={18} />
            <TextInput placeholder='Search...'/>
          </View>

          <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
            <Ionicons name='options' size={28} style={{ marginLeft: 5 }} color={Colors.white}/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Page;


const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: Colors.bgColor
  },
  headerText: {
    fontSize: 28,
    fontWeight: 500,
    marginTop: 20
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10

  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.white
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 10
  }
})
