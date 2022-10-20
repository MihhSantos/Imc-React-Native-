import React, {useState} from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';

export default function Home ({navigation}){

    const [open, setOpen] = useState(false)
    //https://images.app.goo.gl/NxLNWSixALhpbyAs7
   
    return(
        <Animatable.View style={styles.View}
        >
            <LinearGradient
            colors={[ '#8C0738', '#212121', '#000000', ]}
            start={{x: 0.5, y: 1}}
            end={{x: 1, y: 0.5}}
            style={styles.container}
            >
                <Animatable.View
                animation="zoomIn"
                >
                    <TouchableOpacity style={styles.Button} onPress={() => setOpen(true)}>
                        <Text style={styles.TextButton}>Ver Tabela IMC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("IMC") }>
                        <Text style={styles.TextButton}>
                            Consultar meu IMC
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
                
            </LinearGradient>

        {open === true &&
            <Modal>
                <Animatable.View style={styles.container2}
                animation="fadeInLeftBig" 
                >
                    <Image
                    animationType="slide"
                    transparent={true}
                    visible={true}
                        style={styles.img} source={{
                            uri: "https://d2q576s0wzfxtl.cloudfront.net/2018/05/12201816/177.png"
                        }}
                    />

                        <TouchableOpacity style={styles.Button} onPress={() => setOpen(false)}>
                            <Text style={styles.TextButton}>Fechar</Text>
                        </TouchableOpacity>
                </Animatable.View>
            </Modal>
        }
        </Animatable.View>

        
    );
}