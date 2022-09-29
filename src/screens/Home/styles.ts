import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    width: '100%',
    height: '100%'
  },
  header: {
    backgroundColor: '#0D0D0D',
    height: 137,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    position: "absolute",
    top: 108
  },
  textInput: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    color: '#fff',
    padding: 16,
    border: 1,
    borderStyle: 'solid',
    borderColor: '#0D0D0D',
    borderRadius: 6,
    marginRight: 4
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  }
});