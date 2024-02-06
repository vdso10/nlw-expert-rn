import { View, Text } from "react-native";
import { Header } from "../components/Header";
import { CategoryButtom } from "../components/Category-Button";


export default function Home(){
    return(
        <View className='flex-1 pt-8'>
            <Header title="Faça seu pedido" cartQuantityItems={0}/>

            <View className=" flex-row gap-4">
                <CategoryButtom title="Lanche do dia"/>
                <CategoryButtom title="Lanche do dia" isSelected/>
                <CategoryButtom title="Lanche do dia"/>

            </View>
            
        </View>
    )
  

}


