import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../Store/UserSlice";
const LoginScreen = ({ route, navigation }) => {
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const selector = useSelector((state) => state.demo);
    const dispatch = useDispatch();
    const loginClick = () => {  
        if(name == selector.name && pass == selector.pass){
            navigation.navigate('HomeScreen')
        }
        else{
            Alert.alert('Dang nhap that bai')
        }
    }
    const ChangeClick = () =>{
        const payload = {name: name, pass: pass}
        dispatch(setCurrentUser(payload));
    }
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Demo Redux Toolkit</Text>
            <TextInput value={name} onChangeText={setName} style={{ width: '90%', padding: 10, fontSize: 18, borderWidth: 1, borderRadius: 10, marginVertical: 10 }} placeholder="Tên đăng nhập"></TextInput>
            <TextInput secureTextEntry={true} value={pass} onChangeText={setPass} style={{ width: '90%', padding: 10, fontSize: 18, borderWidth: 1, borderRadius: 10, marginVertical: 10 }} placeholder="Mật khẩu"></TextInput>
            <TouchableOpacity
                onPress={() => loginClick()}
                style={{ backgroundColor: 'orange', padding: 20, borderRadius: 15 }}>
                <Text>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => ChangeClick()}
                style={{ backgroundColor: 'orange', padding: 20, borderRadius: 15, marginVertical:10 }}>
                <Text>Đổi mật khẩu</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default LoginScreen;