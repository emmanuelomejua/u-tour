import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons  } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors';



export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors.bgColor,
        padding: 0,
        borderTopWidth: 0
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.black,
      tabBarInactiveTintColor: '#999'
    }}>
      <Tabs.Screen name='index' 
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name='compass' color={color} size={28}/>
          )
        }}
      />
      <Tabs.Screen name='category' 
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name='space-dashboard' color={color} size={28} />
          )
        }}
      />
      <Tabs.Screen name='search' 
        options={{
          tabBarIcon: ({color}) => (
            <View style={{
              backgroundColor: Colors.primaryColor,
              paddingHorizontal: 4,
              paddingVertical: 3,
              borderRadius: 10,
              height: 40,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Ionicons name='search' color={Colors.white} size={20} />
          </View>
          )
        }}
      />
      <Tabs.Screen name='bookmarks' 
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name='bookmark' color={color} size={28} />
          )
        }}
      />
      <Tabs.Screen name='profile' 
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name='user' color={color} size={28} />
          )
        }}
      />
    </Tabs>
  );
}
