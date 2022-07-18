import React, { useState } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import {
  Container,
  WelcomeSign,
  SimpleText,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold

} from './styles'

import SignInput from '../../components/SignInput'
import { useNavigation } from '@react-navigation/native'
import { doc, setDoc } from "firebase/firestore";
import { auth } from '../../../firebase'
import { db } from '../../../firebase'

export default () => {


  const navigation = useNavigation();

  const [name, setNameField] = useState('');
  const [fone, setFoneField] = useState('');
  const [city, setCityField] = useState('');
  const [adress, setAdressField] = useState('');
  const [birth, setBirthField] = useState('');

  const handleUpdateClick = () => {
    auth
    const colect = db.collection("UserData")
    const myDoc = colect.doc(auth.currentUser?.uid)

    const data = {
      "nome": name,
      "telefone": fone,
      "cidade": city,
      "endereco": adress,
      "dataNascimento": birth
    }
    myDoc.set(data)
      .then(() => {
        alert("conta criada!")
        navigation.reset({
          routes: [{ name: 'Home' }]
        });
      }).catch(error => alert(error.message))
  }

  const handleRegisterClick = () => {
    auth
    navigation.reset({
      routes: [{ name: 'Home' }]
    });
  }
  return (
    <Container>

      <WelcomeSign>Etapa 2</WelcomeSign>

      <ScrollView style={styles.scrool}>

        <InputArea>
          <SignInput
            placeholder="Nome"
            value={name}
            onChangeText={t => setNameField(t)}
          />

          <SignInput
            placeholder="Telefone"
            value={fone}
            onChangeText={t => setFoneField(t)}
          />

          <SignInput
            placeholder="Cidade"
            value={city}
            onChangeText={t => setCityField(t)}
          />

          <SignInput
            placeholder="Endereço"
            value={adress}
            onChangeText={t => setAdressField(t)}
          />

          <SignInput
            placeholder="Data de nascimento"
            value={birth}
            onChangeText={t => setBirthField(t)}
          />

          <SignInput
            placeholder="..."
            value={birth}
            onChangeText={t => setBirthField(t)}
          />

          <CustomButton onPress={handleUpdateClick}>
            <CustomButtonText>Cadastrar</CustomButtonText>
          </CustomButton>

          <SimpleText>Email: {auth.currentUser?.email}</SimpleText>
          
        </InputArea>

      </ScrollView>

    </Container>
  );
}

const styles = StyleSheet.create({
  scrool: {
    alignSelf: 'stretch',
  }
});