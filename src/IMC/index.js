import React, {useState, useEffect} from 'react'
import { View, Text, Modal, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';

export default function IMC ({navigation}){

    const [peso, setPeso] = useState()
    const [alt, setAtl] = useState()
    const [imc, setImc] = useState()
    const [open, setOpen] = useState(false)
    const [mensage, setMensage] = useState("")

    useEffect(() =>{
        setImc(peso/(alt*alt));
    },[peso, alt])

    

    console.log("imc : ",imc)
    function IMC (){
        if(imc <= 18.5){
            setMensage("Peso Abaixo do Normal, Cuidado!")
        }else if(imc <= 18.6 || imc >= 24.9){
            setMensage("Peso Normal")
        }else if(imc <= 25.0 || imc >= 29.9){
            setMensage("Peso Exessivo, Cuidado!")
        }else if(imc <= 30.0 || imc >= 34.9){
            setMensage("Obesidade I, Atenção!")
        }else if(imc <= 35.0 || imc >= 39.9){
            setMensage("Obesidade II, Atenção!")
        }else {
            Alert.alert("Obesidade III", "Procure um médico IMEDIATAMENTE! IMC: " + imc)
            setMensage("Obesidade III, Procure um médico I M E D I A T A M E N T E !!!")
        }
    }
    
   
    return(
        <View style={styles.View}>
            <LinearGradient
            colors={[ '#8C0738', '#000000','#212121' ]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.container}
            >
                <Animatable.View
                animation="fadeInLeftBig"
                >
                    <TextInput
                    style={styles.input}
                    placeholder="Digite seu Peso"
                    placeholderTextColor="#fff"
                    type="text"
                    onChangeText={(text) => setPeso(text)}
                    value={peso}
                    />
                </Animatable.View>    

                <Animatable.View
                animation="fadeInRightBig"
                >
                    <TextInput
                    style={styles.input}
                    placeholder="Digite sua Altura"
                    placeholderTextColor="#fff"
                    type="text"
                    onChangeText={(text) => setAtl(text)}
                    value={alt}
                    />
                </Animatable.View>
                
                <Animatable.View
                animation="zoomIn"
                >
                    <TouchableOpacity style={styles.Button} onPress={() => {IMC(), setOpen(true)}}>
                        <Text style={styles.TextButton}>
                            Consultar meu IMC
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
        {open === true &&
            <Modal>
                <Animatable.View style={styles.container2}
                animation="fadeInLeftBig"
                >
                    <Image
                    animationType="slide"
                    transparent={true}
                    visible={true}
                    />
                        <Text style={styles.TextButton}>{mensage}</Text>
                        <Text style={styles.TextButton}>Seu IMC é: {(imc).toFixed(2)}</Text>
                        <TouchableOpacity style={styles.Button} onPress={() => {setOpen(false), setPeso(""), setAtl("")}}>
                            <Text style={styles.TextButton}>Fechar</Text>
                        </TouchableOpacity>
                </Animatable.View>
            </Modal>
        }
            </LinearGradient>

        </View>

        
    );
}