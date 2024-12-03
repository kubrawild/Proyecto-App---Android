import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import OrderItem from "../Components/OrderItem";
import { useGetOrdersQuery } from "../app/services/shopServices";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";

const Orders = () => {
  const localId = useSelector((state) => state.auth.value.localId);
  const { data, isSuccess, isError, error, isLoading } =
    useGetOrdersQuery(localId);
  const [info, setInfo] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isSuccess && data.length === 0) setInfo(false);
    if (isSuccess && data) setLoading(false);
    if (isError && error) setErrorMessage(error.error);
  }, [data, isSuccess, isError, error]);

  if (!info)
    return (
      <ImageBackground
        source={require("../../assets/bg/HomeBG.jpg")}
        style={styles.containerIMG}
      >
        <Text style={styles.text2}>No hay ordenes</Text>
      </ImageBackground>
    );
  if (errorMessage)
    return (
      <View>
        <Text>Error al cargar</Text>
      </View>
    );
  if (loading) return <LoadingSpinner />;

  return (
    <ImageBackground
      source={require("../../assets/bg/HomeBG.jpg")}
      style={styles.containerIMG}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </ImageBackground>
  );
};

export default Orders;

const styles = StyleSheet.create({
  containerIMG: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.9
  },
  text2:{
    color:'white',
    fontSize:36,
    backgroundColor:'#e9967a',
    padding:10,
    borderRadius:5
  }
});
