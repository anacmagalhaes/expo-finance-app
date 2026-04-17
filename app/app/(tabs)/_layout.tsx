import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: '#2D6A4F',
            tabBarActiveTintColor: '#50BE8D',
            tabBarStyle: {position: 'absolute', borderRadius: 28, borderTopWidth: 0, backgroundColor: '#1E1E1E'}
        }}>
            <Tabs.Screen 
                name="dashboard"
                options={{
                    title: "Dashboard",
                    tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color}/>
                }}
            />
        </Tabs>
    )
}

export default TabsLayout