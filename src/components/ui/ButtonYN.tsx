import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type ButtonYNProps = TouchableOpacityProps & {
    label: string
}

export const ButtonYN = ({ label, className, ...rest }: ButtonYNProps) => {
    return (
        <TouchableOpacity className={`w-20 p-3 items-center rounded-[10px] ${className}`} {...rest}>
            <Text className="text-[14px] font-bold text-[#F3F4F6]">{label}</Text>
        </TouchableOpacity>
    )
}