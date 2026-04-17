import { ButtonInitials } from "@/components/ui/ButtonInitial";
import { Checkbox } from "@/components/ui/Checkbox";
import { InputGeneral } from "@/components/ui/InputGeneral";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterScreen = () => {
    const [accept, setAccept] = useState(false);

    return (
        <SafeAreaView className="flex-1 p-6 bg-[#282727] items-center gap-6 justify-center">
            <Text className="text-[#F3F4F6] font-bold text-[30px] text-center uppercase">Cadastro</Text>
            <View className="w-full gap-4">
                <InputGeneral label="Nome:" />
                <InputGeneral label="E-mail:" />
                <InputGeneral label="Senha:" />
                <InputGeneral label="Confirmar Senha:" />
                <View className="items-center gap-4">
                    <View className="flex-row items-center gap-2">
                        <Checkbox checked={accept} onChange={setAccept}/>
                        <Text className="text-[#F3F4F6] text-[12px]">Eu concordo com os {""}
                            <Text className="text-[#5A53BF] text-[12px]">Termos e Condições.</Text>
                        </Text>
                    </View>
                    <ButtonInitials text="Cadastrar" />
                    <Text className="text-[#F3F4F6] text-[12px]"> Já tem conta? {""}
                        <Link href="/(auth)/login">
                            <Text className="text-[#5A53BF] text-[12px]">Entre aqui.</Text>
                        </Link>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen