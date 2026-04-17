import { Ionicons } from '@expo/vector-icons'
import { Pressable, View } from "react-native"

interface CheckboxProps {
    checked: boolean,
    onChange: (checked: boolean) => void
}

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
    return (
        <Pressable onPress={() => onChange(!checked)}>
            <View className={`w-6 h-6 rounded-md border items-center justify-center
                ${checked ? "bg-[#299A68] border-[#299A68]" : "bg-transparent border-[#F3F4F6]"}
                `}>
                {checked && (
                    <Ionicons name="checkmark" size={18} color="white" />
                )}
            </View>
        </Pressable>
    )
}