import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Dimensions, TextInput } from "react-native";
const widthWindow = Dimensions.get('window').width
const data = [
    { id: 1, name: 'Sy Duc' },
    { id: 2, name: 'Van Tuyen' },
    { id: 3, name: 'Duc Huy' }
]

const HomeScreen = ({ route, navigation }) => {
    const LogoutClick = () => {
        navigation.pop()
    }
    const [showInput, setShowInput] = useState(false);
    const [level, setLevel] = useState([]);
    useEffect(() => {
        let _level = level;
        Object.keys(data).map((itemData) => {
            _level = {
                ..._level,
                [data[itemData].id]: null
            }
        })
        setLevel(_level)
    }, [])

    const ShowInput = (id) => {
        setShowInput({
            ...showInput,
            [id]: !showInput[id]
        })
    }
    const chooseLevel = (id, levelMember) => {
        if(level == null)
        setLevel({
            ...level,
            [id]: levelMember
        })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => LogoutClick()}
                style={{ backgroundColor: 'orange', padding: 10, alignSelf: 'flex-start', marginHorizontal: 10, borderRadius: 10 }}>
                <Text>Đăng xuất</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Trang Chủ</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity
                                onPress={() => ShowInput(item.id)}
                                style={{ backgroundColor: 'gray', width: (widthWindow - 50), padding: 20, margin: 10, borderRadius: 20 }}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
                                {showInput[item.id] == true
                                    ?
                                    <TextInput style={{ flex: 1, backgroundColor: '#fff', padding: 10, marginTop: 10, borderRadius: 10 }} placeholder="Nhập nội dung"></TextInput>
                                    :
                                    <></>
                                }
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                                    <TouchableOpacity
                                        onPress={() => chooseLevel(item.id, 'se')}
                                        style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 2, borderColor: 'orange', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: level[item.id] == 'se' ? 'orange' : '#eee' }} />
                                    </TouchableOpacity>
                                    <Text>Senior</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                                    <TouchableOpacity
                                        onPress={() => chooseLevel(item.id, 'ju')}
                                        style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 2, borderColor: 'orange', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: level[item.id] == 'ju' ? 'orange' : '#eee' }} />
                                    </TouchableOpacity>
                                    <Text>Junior</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                                    <TouchableOpacity
                                        onPress={() => chooseLevel(item.id, 'in')}
                                        style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 2, borderColor: 'orange', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: level[item.id] == 'in' ? 'orange' : '#eee' }} />
                                    </TouchableOpacity>
                                    <Text>Intern</Text>
                                </View>
                            </View>


                        </View>
                    )}
                    keyExtractor={(item) => `${item.id}`}></FlatList>
            </View>


        </SafeAreaView>
    )
}

export default HomeScreen;