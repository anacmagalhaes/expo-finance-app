import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity, TouchableOpacityProps, } from "react-native"

export const FloatingButton = ({ onPress, ...rest }: TouchableOpacityProps) => {
    return (
        <TouchableOpacity
            {...rest}
            onPress={onPress}
            className="absolute w-20 h-20 rounded-full items-center justify-center bottom-20 z-50 right-6 bg-[#2D6A4F] active:opacity-70"
            style={{ elevation: 10, zIndex: 50 }}
        >
            <Ionicons name="add" size={26} color="#F3F4F6" />
        </TouchableOpacity>
    )
}