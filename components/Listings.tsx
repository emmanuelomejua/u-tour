import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { ListingType } from '@/types/listingType';
import { Colors } from '@/constants/Colors';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

type Prop = {
  listings: any[]
}

const Listings = ({listings}: Prop) => {


  const renderItems:ListRenderItem<ListingType> = ({item}) => {
    return(
      <TouchableOpacity>
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.bookmark}>
            <Ionicons name='bookmark-outline' size={14} color={Colors.white}/>
          </View>

          <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>

          <View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <FontAwesome5 name='map-marker-alt' size={20} color={Colors.primaryColor} />
              <Text style={{fontSize: 12}}>{item.location}</Text>
            </View>

            <Text>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }



  return (
    <View>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={listings}
        renderItem={renderItems}/>
    </View>
  )
}

export default Listings

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    width: 220,
    marginRight: 20
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  bookmark: {
    position: 'absolute',
    top: 190,
    right: 40,
    padding: 7,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.white
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 10
  }
})

