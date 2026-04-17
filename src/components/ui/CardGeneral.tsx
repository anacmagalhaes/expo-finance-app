import { ReactNode } from "react"
import { View, ViewProps } from "react-native"

type CardGeneralProps = ViewProps & {
    children: ReactNode
}

export const CardGeneral = ({ children, className,  ...rest }: CardGeneralProps) => {
    return (
        <View className={`bg-[#1E1E1E] rounded-[10px] w-full p-4 ${className}`} {...rest}>
            {children}
        </View>
    )
}