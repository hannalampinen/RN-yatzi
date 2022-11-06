import { Text, View } from 'react-native';
import style from '../style/style/style';

export default function Footer() {
  return(
    <View style={style.footer}>
      <Text style={style.author}>
        Author: Hanna Lampinen
      </Text>
    </View>
  )
}