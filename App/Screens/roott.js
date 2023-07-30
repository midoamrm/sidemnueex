import * as React from "react";
import JailMonkey from 'jail-monkey'
import { Button } from "react-native-elements";
import { View } from "native-base";
import { NativeBaseProvider } from 'native-base';

export default function Roott() {
    
    const doo =()=>{
// is this device JailBroken on iOS/Android?
const a=JailMonkey.isJailBroken()
    console.log('JailBroken ',a)
// Can this device mock location - no need to root!
const b=JailMonkey.canMockLocation()
console.log('Can this device mock location',b)
// Check if device violates any of the above
const c=JailMonkey.trustFall()
console.log('Check if device violates any of the above',c)
// (ANDROID ONLY) Check if application is running on external storage
const d=JailMonkey.isOnExternalStorage()
console.log('Check if application is running on external storage',d)
// (ANDROID ONLY) Check if the phone has some malicious apps installed
const e=JailMonkey.hookDetected()
console.log('Check if the phone has some malicious apps installed',e)
// Check if the application is running in debug mode
const f=JailMonkey.isDebuggedMode()
console.log('Check if the application is running in debug mode',f)
const r=JailMonkey.androidRootedDetectionMethods
console.log(' mode',r)
    }
    return(
  <NativeBaseProvider>
  <Button onPress={doo}></Button>
  </NativeBaseProvider>
      
    )
}