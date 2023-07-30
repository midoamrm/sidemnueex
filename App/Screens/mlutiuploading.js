import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import { Card  } from "react-native-paper";
import {
  TouchableOpacity,
  View,
  Button,
  StyleSheet,
  useColorScheme,
  Text,
  SafeAreaView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Progress from 'react-native-progress';

const Tab = createBottomTabNavigator();

function UploadScreen(navigation) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [filesToUpload, setFilesToUpload] = useState([]);
  const [filesToUploadProgress, setFilesToUploadProgress]  =
    useState([]);

  const uploadFiles = async () => {
    // for each file in filesToUpload
    // get file content
    console.log('tryy',filesToUpload);
    console.log(filesToUploadProgress);
    filesToUpload.forEach(async (element, index) => {
      // upload file to server https://v2.convertapi.com/upload  with axios
      setFilesToUploadProgress((currentFilesToUploadProgress) => {
        currentFilesToUploadProgress[index] = 1;
        return currentFilesToUploadProgress;
      });

      const formData = new FormData();
      formData.append('file', {
        uri: element.uri,
        name: element.name,
        type: element.type,
      });
      console.log(`Uploading file ${element.name}`);
      axios
        .post('https://v2.convertapi.com/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          console.log(
            `Upload Finished Access the file at https://v2.convertapi.com/d/${response.data.FileId}`,
          );
          // add file to uploadedFiles
          setFilesToUploadProgress((currentFilesToUploadProgress) => {
            currentFilesToUploadProgress[index] = 2;
            return currentFilesToUploadProgress;
          });
          setUploadedFiles([...uploadedFiles, response.data]);
        });
    });
  };

  function readFiles() {
    console.log('Reading file');
    DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      allowMultiSelection: true,
    }).then(res => {
      // log file content
      console.log(res);
      // add file to filesToUpload
      res.forEach(element => {
        setFilesToUploadProgress((currentFilesToUploadProgress) => {
          currentFilesToUploadProgress.push(0);
          return currentFilesToUploadProgress;
        });
      });
      console.log(filesToUploadProgress);
      setFilesToUpload([...filesToUpload, ...res]);
    });
  }

  function removeFile(index) {
    // remove file from filesToUpload
    const newFiles = [...filesToUpload];
    newFiles.splice(index, 1);
    setFilesToUpload(newFiles);
    // remove file from filesToUploadProgress
    setFilesToUploadProgress((current) => {
      current.splice(index, 1);
      return current;
    });
  }

  const renderItem = (item, index) => {
    console.log('indexx',filesToUploadProgress[index]);
    return (
      <Card key={index}>
        <View  style={styles.listItem}>
          <Text style={{flex: 1}}>{item.item.name}</Text>
       
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => {
              removeFile(index);
            }}>
            <FontAwesomeIcon name="remove" size={15} color={'white'} />
          </TouchableOpacity>
        </View>
        <View >
          {filesToUploadProgress[index] === 1 && (
            <View style={{padding: 10}}>
              <ActivityIndicator size="small" color="#0000ff" />
            </View>
          )}
          {filesToUploadProgress[index] === 2 && (
            <View style={{padding: 10}}>
               <ActivityIndicator size="large" />
            </View>
          )}
        </View>
      </Card>
    );
  };

  useEffect(() => {
    console.log(filesToUploadProgress);
  });
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <View style={styles.sectionContainer}>
          <Button
            title="Select Files"
            onPress={() => {
              readFiles();
            }}
          />
          <Button
            title="Upload Files"
            onPress={() => {
              uploadFiles();
            }}
          />
        </View>
        <View>
          <FlatList
            data={filesToUpload}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function UploadedScreen(navigation) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View>
      <Text>Uploaded Files</Text>
    </View>
  );
}

function FileUploader() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Upload Files"
        component={UploadScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="upload" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="View Uploaded Files"
        component={UploadedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="file" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default FileUploader;

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  list: {
    backgroundColor: '#6495ed',
    paddingVertical: 20,
    marginTop: 20,
    // paddingBottom: 1000,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 5,
    marginLeft: 10,
  },
});
