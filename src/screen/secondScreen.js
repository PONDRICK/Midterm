import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { useState } from "react";
import MyButton from "../component/MyButton";
import MyInput from "../component/MyInput";
import Student from "../data/Student.json";
const secondScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState(Student);
    const renderItem = ({ item }) => (
        <View style={{ margin: 10 }}>
            <Text>Name: {item.name}</Text>
            <Text>Grade: {item.Grade}</Text>
        </View>
    );
    const handleSearch = () => {
        const filteredResults = Student.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(filteredResults);
        if (filteredResults.length === 0) {
            Alert.alert('No results found', `No students found matching "${searchText}"`);
        } else {
            const resultText = filteredResults.map(item => `ID: ${item.id}, Grade: ${item.Grade}`).join('\n');
            Alert.alert('Search results', resultText);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Search Student by using name</Text>
            <MyInput
                placeholder="Search items"
                value={searchText}
                onChangeText={text => setSearchText(text)} />
            <MyButton title="Search" onPress={handleSearch} />
            <MyButton title={"Next=>"} onPress={() => navigation.navigate("end")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B7BF99',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: { color: '#fff', fontSize: 18, padding: 10 },
});

export default secondScreen;