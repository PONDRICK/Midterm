import { View, Text, StyleSheet } from "react-native";

const RenderItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.id} | {item.name}</Text>
            <Text style={styles.description}>{item.Grade}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#d9797e",
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginTop: 5,
    },
});

export default RenderItem;