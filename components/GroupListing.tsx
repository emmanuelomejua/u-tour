import { FlatList, Image, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupType'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const GroupListing = ({listings}: {listings: GroupType[]}) => {


    const renderItems:ListRenderItem<GroupType> = ({item}) => {
        return(
            <View  style={styles.item}>
                <Image source={{uri: item.image}} style={styles.image}/>

                <View>
                    <Text style={styles.itemTxt}>{item.name}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Ionicons name='star' size={18} color={Colors.primaryColor}/>
                        <Text style={{fontSize: 14, fontWeight: '600', color: Colors.black}}>{item.rating}</Text>
                        <Text style={{fontSize: 14, fontWeight: '600', color: '#999'}}>({item.reviews})</Text>
                    </View>

                </View>
            </View>
        )
    }


  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.title}>Top Travel Group</Text>

      <FlatList data={listings} renderItem={renderItems} horizontal showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default GroupListing

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: Colors.white,
        padding: 10,
        marginRight: 20,
        borderRadius: 10
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 10
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
        color: Colors.black
    },
    itemTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 8
    }
})
