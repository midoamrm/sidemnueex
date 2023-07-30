import * as React from 'react';
import * as MediaLibrary from 'expo-media-library';
import { requestPermissionsAsync, createAssetAsync } from 'expo-media-library';
import { Text, View, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Linking from 'expo-linking';
import Reader from './reader';
import { useIsFocused } from '@react-navigation/native';
import Constants from 'expo-constants';
export default function Download  (){
    const urll='';
   
   
    const isFocused = useIsFocused();
    let remoteUrl = 'http://www.soundczech.cz/temp/lorem-ipsum.pdf';
    let localPath = `${FileSystem.documentDirectory}myDirectory/lorem-ipsum.pdf`;
    const directoryInfo =  FileSystem.getInfoAsync(localPath);
    if (!directoryInfo.exists) {
         FileSystem.makeDirectoryAsync(localPath, { intermediates: true 
        });
    }
    FileSystem.downloadAsync(remoteUrl, localPath)
      .then(({uri}) => Linking.openURL(uri));

      try {
        const directoryInfo =  FileSystem.getInfoAsync(localPath);
        if (!directoryInfo.exists) {
             FileSystem.makeDirectoryAsync(localPath, { intermediates: true 
            });
        }
     
      
        const { uri }=FileSystem.downloadAsync(remoteUrl, localPath)
        urll=uri;
    
     } catch (e) {
       console.error(e);
     }  
    /* console.log(' downloading');
     console.log(' downloading');
     FileSystem.downloadAsync(
        remoteUrl,
        localPath
      )
        .then(({ uri }) => {
          console.log('Finished downloading to ', uri);
          try {
            
            const permission =  requestPermissionsAsync();
         //   console.log(permission.status);
            if (permission.status === 'granted') {
                console.log(' granted mo');
                MediaLibrary.createAssetAsync(uri).then(asset => {
                    console.log('asset', asset);
                  MediaLibrary.createAlbumAsync('myfolder', asset)
                    .then(() => {
                      showMessage({
                        message: t('general.success'),
                          description: t('download.success'),
                        type: 'success'
                      });
                    })
                    .catch(error => {
                      showMessage({
                        message: t('general.success'),
                          description: t('download.failed'),
                        type: 'danger'
                      });
                    });
                  });
            }
            
          } catch (error) {
            console.error(error);
          }
         
          
        })
        .catch(error => {
          console.error(error);
        });*/
     
     return (
    
        <View></View>
     
    );
  }
  
   
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
