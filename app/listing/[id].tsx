import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import listData from '@/data/destinations.json';
import { ListingType } from '@/types/listingType';



const DestinationDetails = () => {

    const {id} = useLocalSearchParams();

    const listing = (listData as ListingType[]).find((item) => item.id === id)


  return (
    <View>
      <Text>DestinationDetails</Text>
    </View>
  )
}

export default DestinationDetails

const styles = StyleSheet.create({

})
