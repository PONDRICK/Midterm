import { View, Text, StyleSheet, TextInput } from "react-native";

const MyInput = ({placeholder, ...otherProps}) => {
    return (
        <View style={styles.inputContainer}>
                <TextInput 
                    placeholder={placeholder} 
                    style={styles.input}
                    {...otherProps}
                    />
        </View>

        
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#5C4B51',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
});

export default MyInput;