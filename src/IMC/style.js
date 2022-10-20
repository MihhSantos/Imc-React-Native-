import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
    },

    View:{
        backgroundColor: '#FA0D65',
        flex: 1
    },

    Button:{
        width: 180,
        height: 60,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#FA0D62',
        margin: 30,
        borderRadius: 30
    },

    TextButton:{
        color: "#FFF",
        fontSize: 17,
        textAlign: 'center', 
        marginTop: 15
    },
    img:{
        width: 300,
        height: 150,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50
    },
    container2: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#FA0D62"
    },
    input:{
        alignItems: 'center', 
        width: 300, 
        marginTop: 10,
        padding: 10,
        height:50,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#fff'
    }
})

export default styles