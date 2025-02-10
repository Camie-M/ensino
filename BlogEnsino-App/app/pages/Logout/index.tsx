import React, { useEffect, useState, useCallback } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

import BaseLayout from "@/app/components/BaseLayout";
import { getOwnUserData } from "@/app/Services/Users/api";
import { UserLogOut } from "@/app/types/users";
import { formatDate } from "@/app/utils/dataFormat";
import { useAuth } from "@/app/context/AuthContext";
import RootStackParamList from "@/app/types/navigations";

export default function LogOut() {
  const [user, setUser] = useState<UserLogOut | null>(null);
  const [loading, setLoading] = useState(true);
  
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { logout } = useAuth();

  const getUserData = useCallback(async () => {
    setLoading(true);
    try {
      setLoading(true);
      const userData = await getOwnUserData();
      if (userData) {
        setUser(userData as UserLogOut);
      }
    } catch (error) {
      console.error("Erro ao recuperar dados do usuário:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Função de Logout com confirmação
  const handleLogout = async () => {
    Alert.alert("Confirmar Logout", "Tem certeza de que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        onPress: async () => {
          AsyncStorage.clear()
          logout(); // Atualiza o contexto de autenticação
          navigation.reset({
            index: 0, // Define qual tela será a primeira na pilha
            routes: [{ name: "Home" }], // Rota para a qual você quer ir
          });
        },
      },
    ]);
  };

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <BaseLayout>
      <View style={{ padding: 20 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : user ? (
          <>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Perfil do Usuário</Text>
            <Text>Nome: {user.username}</Text>
            <Text>Email: {user.role}</Text>
            <Text>Criado: {user.createdAt ? formatDate(user.createdAt) : "Data não disponível"}</Text>

            <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20, padding: 10, backgroundColor: "#ff4444", borderRadius: 5 }}>
              <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>Log-out</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={{ color: "red", fontSize: 16 }}>Erro ao carregar os dados do usuário.</Text>
        )}
      </View>
    </BaseLayout>
  );
}
