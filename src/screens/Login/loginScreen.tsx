import { ButtonInitials } from "@/components/ui/ButtonInitial";
import { InputGeneral } from "@/components/ui/InputGeneral";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {

    const handleHome = () => {
        router.replace('/(app)/(tabs)/dashboard')
    }

    return (
        <SafeAreaView className="flex-1 p-6 bg-[#282727] items-center gap-6 justify-center">
            <Text className="text-[#F3F4F6] font-bold text-[30px] text-center uppercase">Entrar</Text>
            <View className="w-full gap-4">
                <InputGeneral label="E-mail:" />
                <InputGeneral label="Senha:" />
                <View className="items-center gap-4">
                    <ButtonInitials text="Entrar" onPress={handleHome}/>
                    <Text className="text-[#F3F4F6] text-[12px]"> Ainda não tem conta? {""}
                        <Link href="/(auth)/register">
                            <Text className="text-[#5A53BF] text-[12px]">Registre-se aqui.</Text>
                        </Link>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen