import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"

type IoniconsName = React.ComponentProps<typeof Ionicons>['name']

interface CardMoneyProps {
    value: number,
    icon: IoniconsName
}

export const CardMoney = ({ value, icon }: CardMoneyProps) => {

    const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(value)
    return (
        <View className="bg-[#1E1E1E] w-[48%] rounded-[18px] flex-row items-center py-3 px-3 gap-2">
            <Ionicons name={icon} size={24} color="#0A580C"/>
            <Text className="text-[#F3F4F6] font-medium text-[14px] text-right flex-1" numberOfLines={1}>{formattedValue}</Text>
        </View>
    )
}