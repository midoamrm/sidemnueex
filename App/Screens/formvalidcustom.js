import React from "react";

import { Formik } from "formik";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
  } from 'react-native'
import * as yup from 'yup'
export default function FormikEmailForm  ()  {
    const loginValidationSchema = yup.object().shape({
        email: yup
          .string()
          .email("Please enter valid email")
          .required('Email Address is Required'),
        password: yup
          .string()
          .min(8, ({ min }) => `Password must be at least ${min} characters`)
          .required('Password is required'),
      })
          return(
            <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
              <View style={styles.loginContainer}>
                <Text>Login Screen</Text>
                <Formik
   validationSchema={loginValidationSchema}
   initialValues={{ email: '', password: '' }}
   onSubmit={values => console.log(values)}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
     touched,
     isValid,
   }) => (
     <>
       <TextInput
         name="email"
         placeholder="Email Address"
         style={styles.textInput}
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
         keyboardType="email-address"
       />
       {(errors.email && touched.email)&&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
       <TextInput
         name="password"
         placeholder="Password"
         style={styles.textInput}
         onChangeText={handleChange('password')}
         onBlur={handleBlur('password')}
         value={values.password}
         secureTextEntry
       />
       {(errors.password && touched.password) &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
       <Button
         onPress={handleSubmit}
         title="LOGIN"
         disabled={!isValid}
       />
     </>
   )}
 </Formik>

              </View>
            </SafeAreaView>
          </>
          )
     
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
   
    loginContainer: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        backgroundColor: '#e6e6e6'
      },
      textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
      },
  })