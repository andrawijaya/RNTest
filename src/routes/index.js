import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login, Home, Users, WebView} from '../pages';
import {HeaderRight} from '../components';

const Stack = createNativeStackNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
//       <Tab.Screen
//         name="ListJersey"
//         component={ListJersey}
//         options={{title: 'Jersey', headerShown: false }}
//       />
//       <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
//     </Tab.Navigator>
//   );
// };

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'tomato'},
        }}
      />
      <Stack.Screen
        name="Users"
        component={Users}
        options={({navigation}) => ({
          title: 'Users',
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'tomato'},
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <Stack.Screen name="WebView" component={WebView} options={{title: ''}} />
    </Stack.Navigator>
  );
};

export default Router;
