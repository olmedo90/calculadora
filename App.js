/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
 
} from 'react-native';

export default function App(){
  const[result, setResult]= useState(''); 

      return(
        <View style = {Styles.container}>
          <Text style = {Styles.result}>{result}</Text> 
          <View style = {Styles.line} >
            <TouchableOpacity onPress = {() => {setResult(result+7);}}>
              <View style = {Styles.button}>
                <Text>7</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+8);}}>
              <View style = {Styles.button}>
                <Text >8</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+9);}}>
              <View style = {Styles.button}>
                <Text>9</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+'+');}}>
              <View style = {Styles.button}>
                <Text style = {Styles.igual}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style = {Styles.line} >
            <TouchableOpacity onPress = {() => {setResult(result+4);}}>
              <View style = {Styles.button}>
                <Text>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+5);}}>
              <View style = {Styles.button}>
                <Text >5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+6);}}>
              <View style = {Styles.button}>
                <Text>6</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+'-');}}>
              <View style = {Styles.button}>
                <Text style = {Styles.igual}>-</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style = {Styles.line} >
            <TouchableOpacity onPress = {() => {setResult(result+1);}}>
              <View style = {Styles.button}>
                <Text>1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+2);}}>
              <View style = {Styles.button}>
                <Text >2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+3);}}>
              <View style = {Styles.button}>
                <Text>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+'*');}}>
              <View style = {Styles.button}>
                <Text style = {Styles.igual}>*</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style = {Styles.line} >
            <TouchableOpacity onPress = {() => {setResult(result+'=');}}>
              <View style = {Styles.button}>
                <Text style = {Styles.igual}>=</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+0);}}>
              <View style = {Styles.button}>
                <Text >0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult('');}}>
              <View style = {Styles.button}>
                <Text style = {Styles.igual}>C</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {setResult(result+'/');}}>
              <View style = {Styles.button}>
                <Text style = {Styles.igual}>/</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    const Styles = StyleSheet.create({
      button: {
        width: 85,
        height:85,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0e6db1',
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize: 25,
      },
      line:{
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontWeight:'bold',
      },
      result: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 25,
      },
      container: {
    
        flex: 1,
        backgroundColor: '#5fe67a',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
      },
      igual: {
        fontSize:55,
      }
      
    })
