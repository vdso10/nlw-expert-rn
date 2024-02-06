import { Text, Pressable, PressableProps } from 'react-native'



type CategoryProps = {
    title: string
    isSelected: boolean
}



export function CategoryButtom({title, isSelected}: CategoryProps){
    return(
        <Pressable>
            <Text>{title}</Text>
        </Pressable>

    )
}