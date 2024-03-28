import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pagina sobre meus alunos</Text>
      <Link style={styles.btn} href={"/"}>Inicio</Link>

<Link style={styles.btn} href={"/contatos"}>Contatos</Link>
<Image source = {require ("../../assets/kaiky.png.jpg")} />

      <StatusBar style="auto" />
    </View>
  );
}