import { View,StyleSheet,FlatList } from "react-native";
import Student from "../data/Student.json";
import RenderItem from "../component/RenderItem";
const endScreen =({navigation}) =>{
    return(
        <View style={styles.container}>
            <FlatList
                data={Student}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RenderItem item={item}/>}
            />
        </View>
    );
};

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B7BF99',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default endScreen;