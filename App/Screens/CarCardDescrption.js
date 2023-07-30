import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Card, Button, Avatar } from "react-native-paper";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function CarCardDescrption({ route,navigation }) {
  var cardescrption=route.params.v;
  return (
    <Card
    style={{
                
      backgroundColor: 'white',
     
      
      }}
    >
    <Card.Title
      title={cardescrption.CardTitle}
      subtitle={cardescrption.descrpition}
      right={LeftContent}
    />
    <Card.Cover source={{ uri: cardescrption.srcimg }} />
    <Card.Content>
    <TextInput
    multiline={true}
    numberOfLines={4}
    value={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ant'}/>
    </Card.Content>
    <Card.Actions>
      
      <Button onPress={() => navigation.navigate("Cars")}>
        Back
      </Button>
    </Card.Actions>
  </Card>
  )
}

const styles = StyleSheet.create({})