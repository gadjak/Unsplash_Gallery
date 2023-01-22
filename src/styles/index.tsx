import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    smallPhoto: {
        width: 150,
        height: 150,
        margin: 3
    },
    photoView: {
        margin: 13,
        display: 'flex',
        alignItems: 'center',
    },
    photoList: {
        display: "flex",
        alignItems: "center"
    },
    descriptionText: {
        maxWidth: 150,
        fontSize: 14,
        marginTop: 3,
    },
    descriptionBigText: {
        maxWidth: "90%",
        fontSize: 18,
        marginTop: 3,
    },
    center: {
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    }
}) 