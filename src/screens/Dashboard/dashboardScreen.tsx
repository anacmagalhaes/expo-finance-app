import { BarComponent } from "@/components/ui/BarComponent"
import { ButtonYNComponent } from "@/components/ui/ButtonYNComponent"
import { CardGeneralComponent } from "@/components/ui/CardGeneralComponent"
import { CardMoneyComponent } from "@/components/ui/CardMoneyComponent"
import { FloatingButtonComponent } from "@/components/ui/FloatingButtonComponent"
import { ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const DashboardScreen = () => {

    return (
        <SafeAreaView className="flex-1 bg-[#282727]">
            <ScrollView className="w-full" //caixa de fora
            contentContainerClassName="p-6 gap-6 flex-grow pb-10" //o que rola dentro
            showsVerticalScrollIndicator={false}
            >
                <Text className="text-[#F3F4F6] font-bold text-[24px]">Bem-vindo(a), Carol</Text>
                <View className="flex-row justify-between items-center w-full gap-4">
                    <Text className="text-[#F3F4F6] font-bold text-[20px] flex-shrink-0">Saldo Semanal:</Text>
                    <Text className="text-[#F3F4F6] font-medium text-[18px] flex-1 text-right" numberOfLines={1}>R$ {""} 100,00</Text>
                </View>
                <BarComponent />
                <Text className="text-[#F3F4F6] font-bold text-[20px] flex-shrink-0">Onde foi meu dinheiro?</Text>
                <View className="flex-row flex-wrap justify-between gap-y-4 ">
                    <CardMoneyComponent icon="fast-food-outline" value={100} />
                    <CardMoneyComponent icon="bus" value={9.50} />
                    <CardMoneyComponent icon="cart" value={400} />
                    <CardMoneyComponent icon="ellipsis-horizontal-outline" value={100} />
                </View>
                <CardGeneralComponent className="flex-row items-center justify-between">
                    <Text className="text-[#FEF4F6] font-bold text-[14px]">Lanche Diário:</Text>
                    <View className="flex-row gap-5">
                        <ButtonYNComponent label="Sim" className="bg-[#299A68]" />
                        <ButtonYNComponent label="Não" className="bg-[#C33232]" />
                    </View>
                </CardGeneralComponent>
                <Text className="text-[#F3F4F6] font-bold text-[20px] flex-shrink-0">Dias sem gastar na semana: 5/7</Text>
                <BarComponent />
                <Text className="text-[#F3F4F6] font-bold text-[20px] flex-shrink-0">Últimos Gastos - 11/04</Text>
                <CardGeneralComponent className="gap-2">
                    <Text className="text-[#F3F4F6] text-[14px]">R$2,50 - RU</Text>
                    <Text className="text-[#F3F4F6] text-[14px]">R$9,50 - Energético</Text>
                    <Text className="text-[#F3F4F6] text-[14px]">R$2,50 - Halls</Text>
                    <Text className="text-[#F3F4F6] text-[14px]">R$2,50 - RU</Text>
                </CardGeneralComponent>
                <FloatingButtonComponent />
            </ScrollView>
        </SafeAreaView>
    )
}

export default DashboardScreen