import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, Text, View } from "react-native";
import { InputGeneral } from "../InputGeneral";

interface AddExpensesModalProps {
    visible: boolean;
    onClose: () => void
}

export const AddExpensesModal = ({ visible, onClose }: AddExpensesModalProps) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <Pressable
                className="flex-1 bg-[black/60] justify-center items-center px-6"
                onPress={onClose}
            >
                <Pressable className="bg-[#282727] w-full rounded-2xl p-6 gap-6">
                    <View className="flex-row justify-between items-center">
                        <Text className="text-[#F3F4F6] font-bold text-xl text-center">
                            Adicionar Gasto
                        </Text>
                        <Pressable onPress={onClose} className="p-2">
                            <Ionicons name="close" size={24} color="#6B7280" />
                        </Pressable>
                    </View>
                    <View className="gap-4 flex-row">
                        <InputGeneral label="name"/>
                    </View>

                </Pressable>
            </Pressable>
        </Modal>
    );
}