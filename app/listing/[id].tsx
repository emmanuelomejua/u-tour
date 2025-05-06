import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import listData from '@/data/destinations.json';
import { ListingType } from '@/types/listingType';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';


const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;



const DestinationDetails = () => {

    const {id} = useLocalSearchParams();

    const router = useRouter()

    const listing = (listData as ListingType[]).find((item) => item.id === id)


  return (
    <>
    <Stack.Screen 
        options={{
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()} style={{
                    borderRadius: 10,
                    padding: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}>
                    <View style={{
                        backgroundColor: Colors.white,
                        padding: 6,
                        borderRadius: 10
                    }}>
                        <Feather name='arrow-left' size={20}/>
                    </View>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => {}} style={{
                    borderRadius: 10,
                    padding: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}>
                    <View style={{
                        backgroundColor: Colors.white,
                        padding: 6,
                        borderRadius: 10
                    }}>
                        <Ionicons name='bookmark-outline' size={20} />
                    </View>
                </TouchableOpacity>
            ),
        }}
    />
        <View style={styles.container}>
            <Image source={{uri: listing?.image}} style={styles.image} />

            <View style={styles.contWrapper}>
                <Text>{listing?.name}</Text>

                <View style={styles.locationWrapper}>
                    <FontAwesome5 name='map-marker-alt' size={18} color={Colors.primaryColor} />
                    <Text style={{ fontSize: 24, fontWeight: '500', letterSpacing: 1, color: Colors.black  }}>{listing?.location}</Text>
                </View>

                <View style={styles.highlight}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.highlightIcon}>
                            <Ionicons name='time' size={18} color={Colors.primaryColor} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </>
  )
}

export default DestinationDetails

const styles = StyleSheet.create({
    image: {
        width: width,
        height: IMG_HEIGHT
    },
    container: {
        backgroundColor: Colors.white
    },
    contWrapper: {
        padding: 20
    },
    locationWrapper: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
        alignItems: 'center',
        gap: 5
    },
    highlight: {
        flexDirection: 'row',
        marginVertical: 20,

    },
    highlightIcon: {
        backgroundColor: '#F4F4F4',
        paddingHorizontal: 8,
        paddingVertical: 5

    }
})
