import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Dialog from "react-native-dialog";
const CustomSidebarMenu = (props) => {
  const [logoutDialog, setLogoutDialog] = useState(false);

  // const logout = () => {
  //   // setLogoutDialog(!logoutDialog);
  //   // props.navigation.goBack();
  //   props.navigation.navigate('Login')

  // }

  return (
  //  <SafeAreaView style={{ flex: 1 }}>
  <View>
    <Image

source={require('../fruits.png')}
style={styles.sideMenuProfileIcon}
/>
<Text style={{ alignSelf: 'center', fontSize: 20 }}>Email</Text>

     
     {/* <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => {
            props.navigation.closeDrawer();
            logout();
          }}
          icon={() => <Icon name={'logout'} size={28} color='#1a75bc' />}
        />
      </DrawerContentScrollView> */}
    {/* </SafeAreaView> */}
    </View> );
  
};
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: '100%',
    height: 100,
    backgroundColor:'yellow'
    
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;