import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { categories } from '@/data/catergories';
import { MaterialCommunityIcons } from '@expo/vector-icons'



type Props = {
    onCategoryChanged: (category: string) => void;
}


const CategoryBtn = ({onCategoryChanged}: Props) => {

    const itemRef = useRef<any>([]);
    const scrollref = useRef<any>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const selectCat = (index: number) => {

        const selected = itemRef.current[index];
        setActiveIndex(index);

        selected?.measure((x: number) => {
            scrollref.current?.scrollTo({ x:x, y: 0, animated: true })
        })

        onCategoryChanged(categories[index].title)
    }
 
  return (
    <View style={styles.category}>
      <Text style={styles.title}>Categories</Text>

      <ScrollView horizontal 
        ref={scrollref}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
        gap: 10,
        paddingVertical: 10,
        marginBottom: 10
        }}>
        {categories.map((item, index) => (
            <TouchableOpacity 
                ref={(el) => itemRef.current[index] = el}
                onPress={() => selectCat(index)} 
                key={index} 
                style={activeIndex === index ? styles.categoryBtnActive : styles.categoryBtn}>
                <Text style={activeIndex === index ? styles.categoryBtnTextAct : styles.categoryBtnText}>{item.title}</Text>
                <MaterialCommunityIcons name={item.iconName as any} size={28} color={activeIndex === index ? Colors.white :  Colors.black}/>
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryBtn

const styles = StyleSheet.create({
    category: {
        marginVertical: 5,
        gap: 5
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: Colors.black
    },
    categoryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        shadowColor: '#333',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3
    },
    categoryBtnActive: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        shadowColor: '#333',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3
    },
    categoryBtnText: {
        color: Colors.black
    },
    categoryBtnTextAct: {
        color: Colors.white
    },
})



