import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../Navigation"

export interface fetchedPhoto {
    id:string,
    user: {
        name:string
    },
    urls:{
        regular:string
    }
}

export interface Props {
    navigation: NativeStackScreenProps<RootStackParamList, 'Home'>
    src: string
    id: string,
    author: string
}
