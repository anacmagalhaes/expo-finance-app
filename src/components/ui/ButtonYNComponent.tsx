import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type ButtonYNComponentProps = TouchableOpacityProps & {
    label: string
}

export const ButtonYNComponent = ({ label, className, ...rest }: ButtonYNComponentProps) => {
    return (
        <TouchableOpacity className={`w-20 p-3 items-center rounded-[10px] ${className}`} {...rest}>
            <Text className="text-[14px] font-bold text-[#F3F4F6]">{label}</Text>
        </TouchableOpacity>
    )
}