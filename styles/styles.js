import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    marginBottom: 10,
  },
  headerImage: { marginTop: 5 },
  headerText: {
    paddingLeft: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  textInputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 20,
  },
  textInputImage: { alignSelf: "center", marginHorizontal: 10 },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    paddingVertical: 15,
  },
  loginButton: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
  },
  input: {
    fontSize: 17,
    flex: 1,
    paddingVertical: 10,
  },
  orLoginWithText: {
    color: "#000",
    textAlign: "center",
    marginTop: 30,
    fontSize: 15,
  },
  googleImage: { alignSelf: "center", marginVertical: 20 },
  link: {
    color: "#007BFF",
    textAlign: "center",
    cursor: "pointer",
    fontSize: 15,
  },
  welcomeHeaderText: {
    textAlign: "center",
    paddingLeft: 10,
    fontSize: 25,
    color: "#000",
  },
  homeContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
    backgroundColor: "#FFF",
  },
  logOutText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 30,
    padding: 10,
  },
});

export default LoginStyles;
