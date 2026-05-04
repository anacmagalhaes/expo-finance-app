import { Bar } from "@/components/ui/Bar"
import { ButtonYN } from "@/components/ui/ButtonYN"
import { CardGeneral } from "@/components/ui/CardGeneral"
import { CardMoney } from "@/components/ui/CardMoney"
import { FloatingButton } from "@/components/ui/FloatingButton"
import { AddExpensesModal } from "@/components/ui/modals/AddExpensesModals"
import { useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const DashboardScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <View className="flex-1 bg-[#282727]">
            <SafeAreaView className="flex-1 bg-[#282727]" pointerEvents="none">
                <ScrollView className="w-full" 
                    contentContainerClassName="p-6 gap-6 flex-grow pb-10" //o que rola dentro
                    showsVerticalScrollIndicator={false}
                >
                    <Text className="text-[#F3F4F6] font-bold text-[24px]">Bem-vindo(a), Carol</Text>
                    <View className="flex-row justify-between items-center w-full gap-4">
                        <Text className="text-[#F3F4F6] font-bold text-[20px] flex-shrink-0">Saldo Semanal:</Text>
                        <Text className="text-[#F3F4F6] font-medium text-[18px] flex-1 text-right" numberOfLines={1}>R$ {""} 100,00</Text>
                    </View>
                    <Bar />
                    <Text className="text-[#F3F4F6] font-bold text-[20px] flex-shrink-0">Onde foi meu dinheiro?</Text>
                    <View className="flex-row flex-wrap justify-between gap-y-4 ">
                        <CardMoney icon="fast-food-outline" value={100} />
                        <CardMoney icon="bus" value={9.50} />
                        <CardMoney icon="cart" value={400} />
                        <CardMoney icon="ellipsis-horizontal-outline" value={100} />
                    </View>
                    <CardGeneral className="flex-row items-center justify-between">
                        <Text className="text-[#FEF4F6] font-bold text-[14px]">Lanche Diário:</Text>
                        <View className="flex-row gap-5">
                            <ButtonYN label="Sim" className="bg-[#299A68]" />
                            <ButtonYN label="Não" className="bg-[#C33232]" />
                        </View>
                    </CardGeneral>
                    <Text className="text-[#F3F4F6] font-bold text-[20px] flex-shrink-0">Dias sem gastar na semana: 5/7</Text>
                    <Bar />
                    <Text className="text-[#F3F4F6] font-bold text-[20px] flex-shrink-0">Últimos Gastos - 11/04</Text>
                    <CardGeneral className="gap-2">
                        <Text className="text-[#F3F4F6] text-[14px]">R$2,50 - RU</Text>
                        <Text className="text-[#F3F4F6] text-[14px]">R$9,50 - Energético</Text>
                        <Text className="text-[#F3F4F6] text-[14px]">R$2,50 - Halls</Text>
                        <Text className="text-[#F3F4F6] text-[14px]">R$2,50 - RU</Text>
                        <Text className="text-[#F3F4F6] text-[14px]">R$2,50 - RU</Text>
                        <Text className="text-[#F3F4F6] text-[14px]">R$9,50 - Energético</Text>
                        <Text className="text-[#F3F4F6] text-[14px]">R$2,50 - Halls</Text>
                        <Text className="text-[#F3F4F6] text-[14px]">R$2,50 - RU</Text>

                    </CardGeneral>
                </ScrollView>

            </SafeAreaView>
            <FloatingButton
                onPress={() => setIsModalOpen(true)}
            />

            <AddExpensesModal
                visible={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </View>
    )
}

export default DashboardScreen