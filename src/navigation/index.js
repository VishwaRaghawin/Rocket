import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./drawer";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../screens/CartScreen"
import NotificationScreen from "../screens/NotificationScreen"
import BecomeScreen from "../screens/BecomeScreen"
import ViewScreen from "../screens/ViewScreen"
import RewardScreen from "../screens/RewardScreen"
import MeetingDetailScreen from "../screens/MeetingDetailScreen"
import AssignmentOverviewScreen from "../screens/AssignmentOverviewScreen";
import AssignmentOverviewsScreen from "../screens/AssignmentOverviewsScreen";
import QuizResultScreen from "../screens/QuizResultScreen"
import QuizWaitingScreen from "../screens/QuizWaitingScreen"
import QuizFailedScreen from "../screens/QuizFailedScreen"
import EntranceScreen from "../screens/EntranceScreen"
import FinalScreen from "../screens/FinalScreen"
import PlacementScreen from "../screens/PlacementScreen"
import CertificateOverViewScreen from "../screens/CertificateOverViewScreen";
import CertificateOverviewsScreen from "../screens/CertificateOverviewsScreen";
import CommentDetailScreen from "../screens/CommentDetailScreen"
import OverviewScreen from "../screens/OverviewScreen";
import OverviewsScreen from "../screens/OverviewsScreen";
import OverViewScreens from "../screens/OverViewScreens";
import PointsScreen from "../screens/PointsScreen"
import DesignScreen from "../screens/DesignScreen"
import HealthScreen from "../screens/HealthScreen"
import MarketScreen from "../screens/MarketScreen"
import ManagementScreen from "../screens/ManagementScreen"
import BussinessScreen from "../screens/BussinessScreen"
import ScienceScreen from "../screens/ScienceScreen"
import LifeStyleScreen from "../screens/LifeStyleScreen"
import LiveSystemScreen from "../screens/LiveSystemScreen"
import NewAppScreen from "../screens/NewAppScreen";
import ProblemScreen from "../screens/ProblemScreen";
import RefundScreen from "../screens/RefundScreen"
import PurchaseScreen from "../screens/PurchaseScreen";
import VersionScreen from "../screens/VersionScreen";
import SoftwareScreen from "../screens/SoftwareScreen"
import SpringScreen from "../screens/SpringScreen";
import QuizzesScreen from "../screens/QuizzesScreen";
import AssignmentScreen from "../screens/AssignmentScreen";
import BeginnerScreen from "../screens/BeginnerScreen";
import ProductScreen from "../screens/ProductScreen";
import TeamScreen from "../screens/TeamScreen";
import AdvancedScreen from "../screens/AdvancedScreen";
import LearnScreen from "../screens/LearnScreen";
import CourseDetailScreen from "../screens/CourseDetailScreen";
import BookingScreen from "../screens/BookingScreen";
import SkillScreen from "../screens/SkillScreen";
import LoginScreen from "../screens/LoginScreen"
import SignUpScreen from "../screens/SignUpScreen"
import ForgetScreen from "../screens/ForgetScreen"
import HomeScreen from "../screens/homeScreen";
import StartingScreen from "../screens/StartingScreen";
import NowScreen from "../screens/NowScreen";
import SplashScreen from "../screens/SplashScreen";
import HistoryScreen from "../screens/HistoryScreen";
import HistorysScreen from "../screens/HistorysScreen";
import MathScreen from "../screens/MathScreen"
import WebScreen from "../screens/WebScreen"
import ProductsScreen from "../screens/ProductsScreen";
import LanguageScreen from "../screens/LanguageScreen";
import VirtualScreen from "../screens/VirtualScreen"
import QuestionScreen from "../screens/QuestionScreen";




const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
         <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="sin" component={StartingScreen} />
        <Stack.Screen name="HomeTabs" component={HomeScreen} />
        <Stack.Screen name="index" component={DrawerNavigator} />
        <Stack.Screen name="cart" component={CartScreen} />
        <Stack.Screen name="become" component={BecomeScreen} />
        <Stack.Screen name="notification" component={NotificationScreen} />
        <Stack.Screen name="view" component={ViewScreen} />
        <Stack.Screen name="reward" component={RewardScreen} />
        <Stack.Screen name="detail" component={MeetingDetailScreen} />
        <Stack.Screen name="overview" component={AssignmentOverviewScreen } />
        <Stack.Screen name="overviews" component={AssignmentOverviewsScreen } />
        <Stack.Screen name="result" component={QuizResultScreen} />
        <Stack.Screen name="waiting" component={QuizWaitingScreen} />
        <Stack.Screen name="fail" component={QuizFailedScreen} />
        <Stack.Screen name="entrance" component={EntranceScreen} />
        <Stack.Screen name="final" component={FinalScreen} />
        <Stack.Screen name="place" component={PlacementScreen} />
        <Stack.Screen name="over" component={CertificateOverViewScreen} />
        <Stack.Screen name="overs" component={CertificateOverviewsScreen} />
        <Stack.Screen name="comment" component={CommentDetailScreen} />
        <Stack.Screen name="one" component={OverviewScreen} />
        <Stack.Screen name="two" component={OverviewsScreen} />
        <Stack.Screen name="three" component={OverViewScreens} />
        <Stack.Screen name="points" component={PointsScreen} />
        <Stack.Screen name="Design" component={DesignScreen} />
        <Stack.Screen name="Health" component={HealthScreen} />
        <Stack.Screen name="Marketing" component={MarketScreen} />
        <Stack.Screen name="Management" component={ManagementScreen} />
        <Stack.Screen name="Business" component={BussinessScreen} />
        <Stack.Screen name="Science" component={ScienceScreen} />
        <Stack.Screen name="Life" component={LifeStyleScreen} />
        <Stack.Screen name="Live" component={ProductsScreen} />
        <Stack.Screen name="app" component={NewAppScreen} />
        <Stack.Screen name="with" component={ProblemScreen} />
        <Stack.Screen name="run" component={RefundScreen} />
        <Stack.Screen name="screen" component={PurchaseScreen} />
        <Stack.Screen name="version" component={VersionScreen} />
        <Stack.Screen name="soft" component={SoftwareScreen} />
        <Stack.Screen name="ring" component={SpringScreen} />
        <Stack.Screen name="quizes" component={QuizzesScreen} />
        <Stack.Screen name="assignment" component={AssignmentScreen} />
        <Stack.Screen name="beginner" component={BeginnerScreen} />
        <Stack.Screen name="product" component={ProductScreen} />
        <Stack.Screen name="team" component={TeamScreen} />
        <Stack.Screen name="advance" component={AdvancedScreen} />
        <Stack.Screen name="six" component={LearnScreen} />
        <Stack.Screen name="course" component={CourseDetailScreen} />
        <Stack.Screen name="start" component={BookingScreen} />
        <Stack.Screen name="skill" component={SkillScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="sign" component={SignUpScreen} />
        <Stack.Screen name="for" component={ForgetScreen} />
        <Stack.Screen name="now" component={NowScreen} />
        <Stack.Screen name="his" component={HistoryScreen} />
        <Stack.Screen name="is" component={HistorysScreen} />
        <Stack.Screen name="math" component={MathScreen} />
        <Stack.Screen name="web" component={WebScreen} />
        <Stack.Screen name="lan" component={LanguageScreen} />
        <Stack.Screen name="vis" component={VirtualScreen} />
        <Stack.Screen name="site" component={QuestionScreen} />
       
      </Stack.Navigator>
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
};

export default Navigation;
