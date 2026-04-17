import { ReactNode } from "react"
import { View, ViewProps } from "react-native"

type CardGeneralComponentProps = ViewProps & {
    children: ReactNode
}

export const CardGeneralComponent = ({ children, className,  ...rest }: CardGeneralComponentProps) => {
    return (
        <View className={`bg-[#1E1E1E] rounded-[10px] w-full p-4 ${className}`} {...rest}>
            {children}
        </View>
    )
}