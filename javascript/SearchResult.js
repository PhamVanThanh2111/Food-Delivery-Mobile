import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const FoodGridItem = ({ image, name, type, rating, time, delivery, navigation }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={()=>{navigation.navigate('Screen_YourOder')}}>
      <Image source={image} style={styles.gridImage} />
      <View style={styles.overlay}>
        <Text style={styles.time}>
          <Image
            source={require('../images/fast-delivery.png')}
            style={styles.icon}
          />
          {time}
        </Text>
        <Text style={styles.delivery}>
          <Image
            source={require('../images/coins.png')}
            style={styles.icon}
          />
          {delivery}
        </Text>
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemType}>{type}</Text>
    </TouchableOpacity>
  );
};

const SearchResults = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.resultsText}>
          We have found 80 results of Burger’s
        </Text>
        <TouchableOpacity>
          <Text style={styles.searchAgain}>Search Again</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        <FoodGridItem
          image={require('../images/bf1.png')}
          name="McDonald's"
          type="Chinese · American"
          rating="4.5"
          time="25min"
          delivery="Free"
          navigation={navigation}
        />
        <FoodGridItem
          image={require('../images/bf2.png')}
          name="Tacos Nanchas"
          type="Chinese · American"
          rating="4.5"
          time="25min"
          delivery="Free"
          navigation={navigation}
        />
        <FoodGridItem
          image={require('../images/bf3.png')}
          name="McDonald's"
          type="Chinese · American"
          rating="4.5"
          time="25min"
          delivery="Free"
          navigation={navigation}
        />
        <FoodGridItem
          image={require('../images/bf4.png')}
          name="McDonald's"
          type="Chinese · American"
          rating="4.5"
          time="25min"
          delivery="Free"
          navigation={navigation}
        />
        <FoodGridItem
          image={require('../images/res1.png')}
          name="McDonald's"
          type="Chinese · American"
          rating="4.5"
          time="25min"
          delivery="Free"
          navigation={navigation}
        />
        <FoodGridItem
          image={require('../images/res2.png')}
          name="McDonald's"
          type="Chinese · American"
          rating="4.5"
          time="25min"
          delivery="Free"
          navigation={navigation}
        />
        <FoodGridItem
          image={require('../images/res3.png')}
          name="McDonald's"
          type="Chinese · American"
          rating="4.5"
          time="25min"
          delivery="Free"
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  resultsText: {
    fontSize: 16,
    color: '#010f07',
  },
  searchAgain: {
    fontSize: 16,
    color: '#eea734',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  gridItem: {
    width: '48%',
    marginBottom: 20,
  },
  gridImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    height: '73%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
  },
  time: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 15,
    position: 'absolute',
    left: 10,
    bottom: 25,
  },
  delivery: {
    color: '#fff',
    fontSize: 15,
    left: 10,
    fontWeight: 500,
    position: 'absolute',
    bottom: 5,
  },
  rating: {
    backgroundColor: '#f8b64c',
    borderRadius: 5,
    padding: 3,
    fontSize: 12,
    color: '#fff',
    width: '20%',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010f07',
    marginBottom: 5,
  },
  itemType: {
    fontSize: 14,
    color: '#868686',
  },
  icon: {
    width: 16,
    height: 16,
  },
});

export default SearchResults;
