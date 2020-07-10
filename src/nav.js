import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnquiryList from './screens/EnquiryList';
import EnquiryDetails from './screens/EnquiryDetails';


const EnquiryStack = createStackNavigator()
const Root = () => {
    return (
        <NavigationContainer>
            <EnquiryStack.Navigator>
                <EnquiryStack.Screen 
                    name = "EnquiryList" 
                    component = {EnquiryList}
                    options = {{
                        title : 'ENQUIRIES',
                        headerTitleAlign : 'center',
                        headerStyle : {
                            backgroundColor : 'white',
                        }
                    }}/>
                <EnquiryStack.Screen
                    name = "Details"
                    component = {EnquiryDetails}
                    options = {{
                        title : 'DETAILS',
                        headerTitleAlign : 'center',
                        headerStyle : {
                            backgroundColor : 'white',
                        }
                    }} />
            </EnquiryStack.Navigator>
        </NavigationContainer>
    )
}
export default Root