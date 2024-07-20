// import React, { Component } from 'react';
// import { View, Text, Pressable } from 'react-native';

// export default class Profile extends Component {
//   render() {
//     const { navigation } = this.props;
//     return (
//       <View style={{ backgroundColor: 'green', alignItems: 'center', paddingTop: 50, width: '100%', height: '100%' }}>
//         <Text style={{ color: 'white' }}>Hello, this is your profile!</Text>
//         <Pressable onPress={() => navigation.navigate('Home')}>
//           <Text style={{ color: 'white', padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>Click</Text>
//         </Pressable>
//       </View>
//     );
//   }
// }



import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView,Pressable,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const logo = require("../login/Bay-Side.png");
// export default ProfileScreen = () => {

  
  
//   const [postCount, setPostCount] = useState(10);
//   const [followingCount, setFollowingCount] = useState(20);
//   const [followerCount, setFollowerCount] = useState(30);
 
//   const Icons ={
//     Ionicons,

//   };



//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.headerContent}>
        // <Image
        //     style={styles.logo}
        //     source={logo}
        //   />
//           <Text style={styles.name}>Lester Mendoza</Text>
//           <View style={styles.statsContainer}>
//             <View style={styles.statsBox}>
//               <Text style={styles.statsCount}>{postCount}</Text>
//               <Text style = {{fontWeight: 'bold'}}>Rented</Text>
              

//             </View>
//             <View style={styles.statsBox}>
//               <Text style={styles.statsCount}>{followingCount}</Text>
//               <Text style = {{fontWeight: 'bold'}}>Review</Text>
//             </View>
//             <View style={styles.statsBox}>
//             <Pressable> 
//               <Ionicons name="create" size={24} color="#000"/>
//             </Pressable>
//               <Text style = {{fontWeight: 'bold'}}>Profile</Text>
//             </View>
//           </View> 
//         </View>
//       </View>
//       {/* <ScrollView contentContainerStyle={styles.body}>
//         {images.map((image, index) => (
//           <View key={index} style={styles.imageContainer}>
//             <Image style={styles.image} source={{ uri: image }}/>
//           </View>
//         ))}
//       </ScrollView> */}
//          <View style={styles.statsBox}>
//               <Text style = {{fontWeight: 'bold'}}>ISIP PA AKO NG ILALAGAY DITO GAR</Text>
//             </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#BBE9FF"
//   },
//   header: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     padding: 30,
//     marginBottom:20,
//   },
//   headerContent: {
//     alignItems: 'center',
//   },
//   logo: {
//     width: 130,
//     height: 130,
//     borderRadius: 65,
//     borderWidth: 4,
//     borderColor: 'white',
    
//   },
//   name: {
//     fontSize: 22,
//     color: '#000000',
//     fontWeight: '600',
    
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   statsBox: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   statsCount: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   statsLabel: {
//     fontSize: 14,
//     color: 'Black',
    
//   },
//   body: {
//     alignItems: 'center',
//     padding: 30,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   imageContainer: {
//     width: '33%',
//     padding: 5,
//   },
//   image: {
//     width: '100%',
//     height: 120,
//   },

//   Ionicons: {
//     fontSize: 22,
//   }

// });


// import React from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProfileView = () => {

  const handleEditPress = () => {
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.coverPhoto}
          source={{uri: 'https://www.bootdey.com/image/280x280/1E90FF/1E90FF'}}
        />
        <View style={styles.profileContainer}>
        <Image
            style={styles.logo}
            source={logo}
          />
          <Text style={styles.nameText}>Lester Mendoza</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>1234</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>5678</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>9101</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEditPress}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  headerContainer: {
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 150,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  statContainer: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
};

export default ProfileView;