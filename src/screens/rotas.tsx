import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import {
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { colors, fonts } from "@styles/theme";

const Rotas = (props: any) => {
  const Tabs = AnimatedTabBarNavigator();
  const Stack = createStackNavigator();

  const tabAppearance = {
    horizontalPadding: 20,
    shadow: true,
    whenActiveShow: "both",
    whenInactiveShow: "both",
    dotSize: "small",
    dotCornerRadius: 10,
    tabBarBackground: colors.grayLight,
    activeTabBackgrounds: colors.primary,
  };

  const tabBarOptions = {
    activeTintColor: colors.white,
    inactiveTintColor: colors.gray,
    labelStyle: {
      fontFamily: fonts.semibold,
      fontSize: 14,
    },
  };

  const tabScreenOption = (Component: any, nome: string, tamanho: number) => ({
    tabBarIcon: ({ color }: any) => (
      <Component name={nome} size={22} color={color} />
    ),
  });

  function TabNavigator() {
    return (
      <Tabs.Navigator initialRouteName="Ordens" appearance={tabAppearance} tabBarOptions={tabBarOptions} >
        <Tabs.Screen
          name="Ordens"
          getComponent={() => require("./ordensServico").default}
          options={tabScreenOption(FontAwesome, "calendar-check-o", 22)}
        />
        <Tabs.Screen
          name="Equipe"
          getComponent={() => require("./equipe").default}
          options={tabScreenOption(MaterialIcons, "dashboard-customize", 22)}
        />
      </Tabs.Navigator>
    );
  }

  return (
    //@ts-ignore
    <Stack.Navigator screenOptions={{ headerShown: false, presentation: "transparentModal" }} >
      <Stack.Screen name={"tabNavigator"} component={TabNavigator} />
      <Stack.Screen name={"novaOrdemServico"} getComponent={() => require("./novaOrdemServico").default} />
    </Stack.Navigator>
  );
};

export default Rotas;
