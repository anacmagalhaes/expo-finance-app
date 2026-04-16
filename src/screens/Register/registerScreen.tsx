import { ButtonComponent } from "@/components/ui/ButtonComponent";
import { InputComponent } from "@/components/ui/InputComponent";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterScreen = () => {
    return (
        <SafeAreaView className="flex-1 p-6 bg-[#282727] items-center gap-6 justify-center">
            <Text className="text-[#F3F4F6] font-bold text-[30px] text-center uppercase">Cadastro</Text>
            <View className="w-full gap-4">
                <InputComponent label="Nome:" />
                <InputComponent label="E-mail:" />
                <InputComponent label="Senha:" />
                <InputComponent label="Confirmar Senha:" />
                <View className="items-center gap-4">
                    <ButtonComponent text="Cadastrar" />
                    <Text className="text-[#F3F4F6] text-[12px]"> Já tem conta? {""}
                        <Link href="/(app)/login">
                            <Text className="text-[#5A53BF] text-[12px]">Entre aqui.</Text>
                        </Link>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen