import React,{useState} from 'react';
import './translation/i18n';
import {View, Text,Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
export default function Trans({ route,navigation }) {
	
const {t, i18n} = useTranslation();

const [currentLanguage,setLanguage] =useState('en');

const changeLanguage = value => {
	i18n
	.changeLanguage(value)
	.then(() => setLanguage(value))
	.catch(err => console.log(err));
};

return (
<View
		style={{
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		}}>
		<Text style={{fontWeight: 'bold', fontSize: 25, color: '#0000FF'}}>
		{t('hello')}{' '}
		</Text>
		<Text style={{fontWeight: 'bold', fontSize: 25, color: '#0000FF'}}>
		{t('this line is translated')}
		</Text>
		<Pressable
		onPress={() =>{
			changeLanguage('en')
            I18nManager.forceRTL(false);
			I18nManager.allowRTL(false);
			RNRestart.Restart();

		} }
		style={{
			backgroundColor:
			currentLanguage === 'en' ? '#0000FF' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>Select English</Text>
		</Pressable>
		<Pressable
		onPress={() => {changeLanguage('ar')
	
		I18nManager.forceRTL(true);
		I18nManager.allowRTL(true);
		RNRestart.Restart();

	}}
		style={{
			backgroundColor:
			currentLanguage === 'ar' ? '#33A850' : '#d3d3d3',
			padding: 20,
		}}>
		<Text>اختر  العربيه</Text>
		</Pressable>
	</View>
);
};

