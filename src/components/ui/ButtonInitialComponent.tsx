import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type ButtonInitialComponentsProps = TouchableOpacityProps & {
    text: string,
}

export const ButtonInitialComponents = ({ text, ...rest }: ButtonInitialComponentsProps) => {
    return (
        <TouchableOpacity {...rest} activeOpacity={0.8} className="bg-[#299A68] border-1 p-2.5 w-40 items-center rounded-[14]">
            <Text className="text-white font-bold text-[18px]">{text}</Text>
        </TouchableOpacity>
    )
}