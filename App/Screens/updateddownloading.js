import * as FileSystem from 'expo-file-system';
import React from 'react';
import {Platform, StyleSheet, Text, ScrollView,TouchableOpacity} from 'react-native';
const { StorageAccessFramework } = FileSystem;
export default function UPdownload  (){

    const [downloadProgress, setDownloadProgress] = React.useState();
    const downloadPath = FileSystem.documentDirectory + (Platform.OS == 'android' ? 'myDirectory/lorem-ipsum.pdf`' : '');
    let remoteUrl = 'http://www.soundczech.cz/temp/lorem-ipsum.pdf';
    // helper function
    const ensureDirAsync = async (dir, intermediates = true) => {
        const props = await FileSystem.getInfoAsync(dir)
        if (props.exist && props.isDirectory) {
            return props;
        }
        let _ = await FileSystem.makeDirectoryAsync(dir, { intermediates })
        return await ensureDirAsync(dir, intermediates)
    }
    const downloadCallback = downloadProgress => {
        const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
        setDownloadProgress(progress);
    };
    const saveAndroidFile = async (fileUri, fileName = 'File') => {
        try {
          const fileString = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });
          
          const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
          if (!permissions.granted) {
            console.log('not garnted')
            return;
          }
    
          try {
            await StorageAccessFramework.createFileAsync(permissions.directoryUri, fileName, 'application/pdf')
              .then(async (uri) => {
                await FileSystem.writeAsStringAsync(uri, fileString, { encoding: FileSystem.EncodingType.Base64 });
               // alert('Report Downloaded Successfully')
                console.log('Report Downloaded Successfully')
              })
              .catch((e) => {
              });
          } catch (e) {
            throw new Error(e);
          }
    
        } catch (err) {
        }
      }
      const saveIosFile = (fileUri) => {
        // your ios code
        // i use expo share module to save ios file
    }
    // Main function
    const downloadFile = async (fileUrl) => {
      //let localPath = `${FileSystem.documentDirectory}myDirectory/lorem-ipsum.pdf`;
      const directoryInfo =  FileSystem.getInfoAsync(downloadPath);
      if (!directoryInfo.exists) {
           FileSystem.makeDirectoryAsync(downloadPath, { intermediates: true 
          });
      }
        if (Platform.OS == 'android') {
          const dir = ensureDirAsync(downloadPath);
        }
    
        let fileName = fileUrl.split('Reports/')[1];
       // console.log(fileName)
        //alert(fileName)
        const downloadResumable = FileSystem.createDownloadResumable(
          fileUrl,
          downloadPath + fileName,
          {},
          downloadCallback
        );
    
        try {
         // console.log(fileName)
          const { uri } = await downloadResumable.downloadAsync();
          if (Platform.OS == 'android')
          
            saveAndroidFile(uri, fileName)
          else
            saveIosFile(uri);
        } catch (e) {
          console.error('download error:', e);
        }
    }
    const mainn = () => {
      downloadFile(remoteUrl)
  }
 // calling main function
 //downloadFile(remoteUrl);
 return(
  <TouchableOpacity
  style={styles.buttonStyle}
  activeOpacity={0.5}
  onPress={mainn}>
  <Text style={styles.buttonTextStyle}>download File</Text>
</TouchableOpacity>
 );
}
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
});
