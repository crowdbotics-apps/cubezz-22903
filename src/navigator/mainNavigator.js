import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings177666Navigator from '../features/Settings177666/navigator';
import EmailAuth177660Navigator from '../features/EmailAuth177660/navigator';
import Camera177659Navigator from '../features/Camera177659/navigator';
import CalendarView177658Navigator from '../features/CalendarView177658/navigator';
import Maps177657Navigator from '../features/Maps177657/navigator';
import Tutorial177656Navigator from '../features/Tutorial177656/navigator';
import Messaging177655Navigator from '../features/Messaging177655/navigator';
import BlankScreen0177654Navigator from '../features/BlankScreen0177654/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings177666: { screen: Settings177666Navigator },
EmailAuth177660: { screen: EmailAuth177660Navigator },
Camera177659: { screen: Camera177659Navigator },
CalendarView177658: { screen: CalendarView177658Navigator },
Maps177657: { screen: Maps177657Navigator },
Tutorial177656: { screen: Tutorial177656Navigator },
Messaging177655: { screen: Messaging177655Navigator },
BlankScreen0177654: { screen: BlankScreen0177654Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
