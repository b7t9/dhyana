import React from 'react';
import {View, Text,Dimensions,SafeAreaView,StyleSheet} from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons';

const Dev_width = Dimensions.get('window').width;
const Dev_height = Dimensions.get('window').height;

import {AntDesign, Entypo, Feather} from 'react-native-vector-icons';
import Slider from '@react-native-community/slider'
import ProgressCircle from 'react-native-progress-circle'

const ScheduleScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.maincontainer}>
        <Text>Music Screen</Text>
        <Iconicons name='heart-outline' size={30}/>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#555',
    },
    maincontainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }
})

export default ScheduleScreen;