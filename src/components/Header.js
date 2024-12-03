import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { deleteAllSession } from "../database";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../features/auth/authSlice";
import { Entypo } from "@expo/vector-icons";

const Header = ({ title = "Producto" }) => {
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.value.localId);

  const onLogout = () => {
    deleteAllSession().then((result) => console.log(result));
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {localId && (
        <Pressable onPress={onLogout} style={styles.logoutIcon}>
          <Entypo
            name="chevron-with-circle-left"
            size={40}
            color="black"
            style={styles.item}
          />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backPrimary,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row", // Cambiado a 'row'
  },
  text: {
    fontSize: 40,
    fontWeight: "500",
    marginRight:10,
  },
  item: {
    margin: 10,
    fontWeight: "bold",
  },
});