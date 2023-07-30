import { ErrorBoundary } from "react-error-boundary";
import { View, StyleSheet, Button,Text } from "react-native";
const myErrorHandler = (error) => {
    // Do something with the error
    // E.g. reporting errorr using sentry ( see part 3)
  };
  function ErrorFallback({ resetErrorBoundary }) {
    return (
      <View style={[styles.container]}>
        <View>
          <Text> Something went wrong: </Text>
          <Button title="try Again" onPress={resetErrorBoundary} />
        </View>
      </View>
    );
  }
export default function Errorhandling() {
   
        
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    
  </ErrorBoundary>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center",
      alignContent: "center",
      paddingHorizontal: 12,
    },
  });