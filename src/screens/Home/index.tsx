import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import logo from '../../assets/logo.png';
import plus from '../../assets/plus.png';

export function Home() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={logo}
        />

        <View style={styles.form}>
          <TextInput 
            style={styles.textInput}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
          />

          <TouchableOpacity style={styles.button}>
            <Image 
              source={plus}
            />
          </TouchableOpacity>

        </View>
      
      </View>
    </View>
  );
}