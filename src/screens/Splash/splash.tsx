import { ButtonComponent } from "@/components/ui/ButtonComponent"
import { router } from "expo-router"
import { Text, View } from "react-native"

const SplashScreen = () => {

    const handleLogin = () => {
        router.replace('/(auth)/login')
    }

    return (
        <View className="bg-[#282727] flex-1 justify-center items-center gap-5">
            <Text className="text-[#F3F4F6] font-bold text-[30px]">
                Bem-Vindo(a)!
            </Text>
            <ButtonComponent text="Começar" onPress={handleLogin}/>
        </View>
    )
}

export default SplashScreen
