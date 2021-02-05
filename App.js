import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,ImageBackground } from 'react-native';

export default function App() {
  const [year, setYear] = useState('');
  const [dp, setDp] = useState('');
  const [interest, setInterest] = useState('');
  const [propertyPrice, setPropertyprice] = useState('');
  const [answer, setAnswer] = useState('');
  const image = { uri: "https://i.stack.imgur.com/LOwyR.png" };




  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Loan Calculator</Text>
      <TextInput 
      placeholder="Loan Term Years"
      placeholderTextColor="white"
      style={styles.textinput}
      keyboardType="numeric"
      onChangeText={text => setYear(text)}
      value={year} 
      />
      <TextInput 
      placeholder="Down Payment %"
      style={styles.textinput}
      placeholderTextColor="white"
      keyboardType="numeric"
      onChangeText={text => setDp(text)}
      value={dp} 
      />
       <TextInput 
      placeholder="Interest %"
      style={styles.textinput}
      placeholderTextColor="white"
      keyboardType="numeric"
      onChangeText={text => setInterest(text)}
      value={interest} 
      />
       <TextInput 
      placeholder="Property Price RM"
      style={styles.textinput}
      placeholderTextColor="white"
      keyboardType="numeric"
      onChangeText={text => setPropertyprice(text)}
      value={propertyPrice} 
      />
      <Button 
      style={{ height:40,}} 
      title="Calculate MyLoan" 
      onPress={()=>{
        let calinterest = interest/100
        let annualInterest = calinterest
        let downpayment= dp*propertyPrice/100
        let amount = propertyPrice - downpayment
        let discount = ((Math.pow((1 + annualInterest), year) -1 ) / (annualInterest * (Math.pow(1+annualInterest,year))))
        let yearlyPayment = amount/discount
        let monthly = (yearlyPayment/12).toFixed(0);
        setAnswer(monthly)

      }
        
      
      }/>
      <Text style={styles.text}>RM {answer}/Monthly</Text>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text:{
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  textinput:{
    fontWeight: 'bold', 
    height:  40, 
    color: 'white', 
    textAlign: 'center',
    backgroundColor: "#000000a0",
    borderWidth: 1,
    borderColor:'white'

  }
});
