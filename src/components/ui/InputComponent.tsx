import { Text, TextInput, TextInputProps, View } from "react-native"

type InputComponentProps = TextInputProps & {
    label: string
}

export const InputComponent = ({ label, ...rest }: InputComponentProps) => {
    return (
        <View className="gap-2">
            <Text className="font-bold text-[#F3F4F6] pl-2">{label}</Text>
            <TextInput className="border-white bg-[#1E1E1E] rounded-[10px] w-full p-4 text-white"/>
        </View>
    )
}