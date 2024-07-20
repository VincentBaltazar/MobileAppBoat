import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Pressable, Alert } from 'react-native';
const bgFilter = require("../Home/fortune.jpg");
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capacity: 0,
      price: 0,
      date: new Date(),
      showDatePicker: false,
      capacityError: '',
      priceError: '',
      boats: [],
    };
  }
  
  componentDidMount() {
    this.fetchBoats();
  }

  fetchBoats = () => {
    fetch("http://192.168.1.7/boatRentalApp/boatRentalApp/backend/getboat.php") // Replace with your server URL
      .then(response => response.json())
      .then(data => {
        this.setState({ boats: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  handleCapacityChange = (value) => {
    if (value < 0 ) {
      Alert.alert('Error', 'Capacity must be between 0 and 10');
    }else if(value > 30){
        Alert.alert('Error', 'Capacity must not greater 30');
    } else {
      this.setState({ capacity: value, capacityError: '' });
    }
  };

  handlePriceChange = (value) => {
    if (value < 0 ) {
      Alert.alert('Error', 'Price cannot be negative');
    }else if(value > 100000){
        Alert.alert('Error', 'Price cannot be greater than 1000000');
    } else {
      this.setState({ price: value, priceError: '' });
    }
  };

  incrementCapacity = () => {
    const newCapacity = this.state.capacity + 1;
    this.handleCapacityChange(newCapacity);
  };

  decrementCapacity = () => {
    const newCapacity = this.state.capacity - 1;
    this.handleCapacityChange(newCapacity);
  };

  incrementPrice = () => {
    const newPrice = this.state.price + 100;
    this.handlePriceChange(newPrice);
  };

  decrementPrice = () => {
    const newPrice = this.state.price - 100;
    this.handlePriceChange(newPrice);
  };

  handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({ date: currentDate, showDatePicker: false });
  };

  showDatepicker = () => {
    this.setState({ showDatePicker: true });
  };

  handleSearch = () => {
    const { capacity, price, date } = this.state;
    
    if (capacity <= 0  || price <= 0) {
        Alert.alert('Error', 'Capacity must be between 0 and 10 and Price cannot be negative');
    } else {
        Alert.alert(
            'Search Results',
            `Capacity: ${capacity}\nPrice: ${price}\nDate: ${date.toDateString()}`
        );
    }
  };
  
  

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={bgFilter}
          style={styles.view1}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.capacityContainer}>
            <Pressable onPress={this.decrementCapacity} style={styles.capacityButton}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <TextInput
              style={styles.capacityInput}
              value={String(this.state.capacity)}
              onChangeText={(value) => this.handleCapacityChange(Number(value))}
              keyboardType="numeric"
            />
            <Pressable onPress={this.incrementCapacity} style={styles.capacityButton}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          {this.state.capacityError ? (
            <Text style={styles.errorText}>{this.state.capacityError}</Text>
          ) : null}
          <View style={styles.priceContainer}>
            <Pressable onPress={this.decrementPrice} style={styles.priceButton}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <TextInput
              style={styles.priceInput}
              value={String(this.state.price)}
              onChangeText={(value) => this.handlePriceChange(Number(value))}
              keyboardType="numeric"
            />
            <Pressable onPress={this.incrementPrice} style={styles.priceButton}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          {this.state.priceError ? (
            <Text style={styles.errorText}>{this.state.priceError}</Text>
          ) : null}
          <View style={styles.datePickerContainer}>
            <TextInput
              style={styles.dateInput}
              placeholder="Select Date"
              value={this.state.date.toDateString()}
              editable={false}
            />
            <Pressable onPress={this.showDatepicker} style={styles.iconButton}>
              <Icon name="calendar" size={20} color="black" />
            </Pressable>
          </View>
          {this.state.showDatePicker && (
            <DateTimePicker
              value={this.state.date}
              mode="date"
              display="default"
              onChange={this.handleDateChange}
            />
          )}
          <Pressable onPress={this.handleSearch} style={styles.search}>
            <Text style={{ alignSelf: 'center', padding: 15 }}>Search </Text>
          </Pressable>
        </ImageBackground>
        <View style={{backgroundColor:"blue"}}></View>
        
        {/* <View style={styles.card}>
          <Image style={styles.logo} source={logo}/>
          <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
          
        </View> */}
        
            <ScrollView style={styles.container}>
              <Card
                 title="Beautiful Landscape"
                 image="https://example.com/image.jpg"
                  description="This is a beautiful landscape."
                />
              <Card
                title="City Skyline"
                image="https://example.com/city.jpg"
                description="This is a city skyline."
                />
                {/* Add more cards as needed */}
              </ScrollView>
      </View>

    );
  }
}

      
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  backgroundImage: {
    resizeMode: 'cover',
    height: 270,
    opacity: 0.5,
  },
  capacityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 25,
  },
  capacityInput: {
    borderRadius: 10,
    height: 40,
    color: 'black',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 5,
    width: 190,
  },
  capacityButton: {
    marginRight: 6,
    marginLeft: -25,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 40,
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 25,
  },
  priceInput: {
    borderRadius: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 5,
    width: 190,
  },
  priceButton: {
    marginRight: 6,
    marginLeft: -25,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 40,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  input: {
    borderRadius: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '70%',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
    marginLeft: 105,
  },
  dateInput: {
    borderRadius: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 190,
    marginLeft: 2,
    color: 'black',
  },
  iconButton: {
    marginLeft: 15,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 40,
    alignItems: 'center',
  },
  search: {
    marginTop: 5,
    backgroundColor: "orange",
    width: 120,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
