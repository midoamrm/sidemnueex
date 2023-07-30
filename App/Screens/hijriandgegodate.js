import React,{ useState } from "react"; 
import moment from 'moment-hijri'
import Calendar from './Calendar'
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Button } from "react-native-paper";


const TwoButtons = ({change, setCurrentDate, date}) => {
  const increaseMonth = () => {
    setCurrentDate(new Date(date.setMonth(date.getMonth() + 1)));
    console.log(date);
    change();
  };
  const decreaseMonth = () => {
    setCurrentDate(new Date(date.setMonth(date.getMonth() - 1)));
    console.log(date);
    change();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={increaseMonth}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decreaseMonth}>
        <Text style={styles.buttonText}>Prev</Text>
      </TouchableOpacity>
    </View>
  );
};
export default function Hijrigeogedate() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(true);
  const [calendar, setCalendar] = useState(
    <Calendar
      key={currentDate.toDateString()}
      moment={moment}
      type={'hijri'}
      monthsCount={1}
      fromDate={moment()}
      startDate={currentDate}
      setCurrentDate={setCurrentDate}
      onSelectionChange={({to}) => {
        console.log(to);

        console.log(moment(to).format('iYYYY/iM/iD'));
        setIsVisible(false);
      }}
    />,
  );
  const change = () => {
    setCalendar(
      <Calendar
        key={currentDate.toDateString()}
        moment={moment}
        type={'hijri'}
        monthsCount={1}
        startDate={currentDate}
        onSelectionChange={({to}) => {
          console.log(to);
          // constant date and *** year???
          console.log(moment(to).format('iYYYY/iM/iD'));
          setIsVisible(false);
        }}
      />,
    );
  };
  return (
    <View style={styles.listViewContainer}>
      <Modal visible={isVisible} animationType="slide">
        <TwoButtons
          change={change}
          setCurrentDate={setCurrentDate}
          date={currentDate}
        />
        {calendar}
        
      </Modal>
      <Button onPress={()=>{
          setIsVisible(true);
        }}>date</Button>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  listViewContainer: {
    //flex:1,
    width: '50%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});
