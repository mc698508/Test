import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0, 0.5)",
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: "rgba(0,0,0,0.4)",
    borderWidth: 16,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 4,
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  pos: {
    fontSize: 14,
    color: "#0394c0",
    fontWeight: "300",
    fontStyle: "italic",
  },
  androidprofStyles: {
      flex: 1,
      backgroundColor: "#800"
  },
  bar: {
    borderTopColor: '#fff',
    borderTopWidth: 4,
    backgroundColor: '#ec2e4a',
    flexDirection: 'row'
},
barseparator: {
    borderRightWidth: 4
},
baritem: {
    flex: 1,
    padding: 18,
    alignItems: 'center'
},
barTop: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic'
},
barBottom: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold'
}
});
export default styles;
