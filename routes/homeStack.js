import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../components/login";
// import SignUp from "../components/SignUp";
import Home from "../components/Home";


const screens = {
    SignInScreen: {
        screen: SignIn,
    },
    // SignUpScreen: {
    //     screen: SignUp,
    // },
    HomeScreen: {
        screen: Home,
    }
}
const homeStack = createStackNavigator(
    screens,
    {
        defaultNavigationOptions: {
            headerShown: false, 
        },
    },
    {initialRouteName: 'SignUpScreen'}
    );

export default createAppContainer(homeStack);