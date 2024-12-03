import { StyleSheet, View, Image, Text,ImageBackground } from "react-native";
import AddButton from "../Components/AddButton";
import {
  useGetProfileImageQuery,
  useGetUserLocationQuery,
} from "../app/services/shopServices";
import { useSelector } from "react-redux";
import { colors } from "../Global/colors";

const MyProfile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.value.localId);
  const { data } = useGetProfileImageQuery(localId);
  const { data: location } = useGetUserLocationQuery(localId);

  return (
    <ImageBackground
    source={require("../../assets/bg/ImageBG.jpg")}
    style={styles.containerIMG}
  >
      <View style={styles.container}>
        <View style={styles.containerShadow}>
        <Image
          source={data ? { uri: data.image } : require("../../assets/user.png")}
          style={styles.image}
          resizeMode="cover"
        />
        {/* <Text>{location?.address}</Text> */}
        <AddButton
          title={"Agregar foto"}
          onPress={() => navigation.navigate("ImageSelector")}
          style={styles.button}
        />
        {/* <AddButton
          title={location ? "Cambiar Ubicacion" : "Agregar Ubicacion"}
          onPress={() => navigation.navigate("LocationSelector")}
          style={styles.button}
        /> */}
      </View>
      </View>
      </ImageBackground>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerShadow:{
    backgroundColor:colors.backGray,
    opacity:0.9,
    padding:20,
    borderRadius:10, 
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 100,
    borderWidth:5,
    borderColor:'#2f4f4f' 
  },
  button: {
    borderRadius: 20,
    color: "#2f4f4f",
    padding:10,
  },
  containerIMG: {
    flex: 1,
    resizeMode: "cover", // o 'contain' según tus necesidades
  },
});
