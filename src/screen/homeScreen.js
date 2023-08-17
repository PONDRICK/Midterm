import { View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import MyButton from '../component/MyButton';


const HomeScreen = ({ navigation }) => {
    const [num,setNum] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Number is "{num}"</Text>
            <Text style={styles.text}>Image From Internet</Text>
            <View >
                <TouchableOpacity onPress={() => {setNum(999)}}>
                    <Image
                        source={{ uri: 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSDtCqxKnsEhVEajeHET26cmYLzfgH.jpg' }}
                        style={{ width: 70, height: 70 }}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Image From File</Text>
            <View>
                <TouchableOpacity onPress={() => {setNum(num - 1)}}>
                    <Image
                        source={require('../img/peach.jpg')}
                        style={{ width: 70, height: 70 }} />
                </TouchableOpacity>
            </View>
            <MyButton title={"Next=>"} onPress={()=> navigation.navigate("second")}/>
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
    sco: {
        flex: 1,
        backgroundColor: '#B7BF99',
        padding: 20,
    },
    title: { fontSize: 16, fontWeight: 'bold' },

    text: { color: '#fff', fontSize: 18, padding: 10 },
});

export default HomeScreen;