import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuItem = ({ dish }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('second-page', dish)} >
            <Image source={{ uri: dish.uri }} style={styles.image} />
            <View style={{ flex: 1, justifyContent:'space-between' }} >
                <View>
                    <Text style={styles.title} >{dish.name}</Text>
                    <Text style={styles.description} >{dish.desc}</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('second-page', dish)} style={{backgroundColor:'blue', paddingVertical:5, paddingHorizontal:11, borderRadius:7, marginBottom:20 }} >
                    <Text style={{textAlign:'center'}}>View Offer</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 230,
        backgroundColor: 'tomato',
        borderRadius: 25,
        padding: 20,
        flexDirection: 'row',
        marginBottom: 17
    },
    title: {
        color: '#ffeeee',
        fontSize: 18,
        marginBottom: 7
    },
    description: {
        color: '#ffe0e0',
        fontSize: 13
    },
    image: {
        flex: 1,
        borderRadius: 15,
        marginRight: 15
    }
})

export default MenuItem;