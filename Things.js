import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';

const Things = () => {
  const [things, setThings] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://things-yoyo.herokuapp.com/api/things')
      .then((res) => {
        setThings(res.data);
      })
      .catch((err) => {
        alert('broke');
      });
  }, []);

  const like = async (id) => {
    try {
      let res = await axios.post(
        `https://things-yoyo.herokuapp.com/api/things/like/${id}`,
      );
      let newThings = things.map((t) => (t.id === res.data.id ? res.data : t));
      setThings(newThings);
    } catch (err) {
      console.log(err.response);
      alert(err);
    }
  };

  const renderThings = () => {
    return things.map((thing) => {
      return (
        <TouchableOpacity onPress={() => like(thing.id)} key={thing.id}>
          <Text>
            {thing.name}{' '}
            <Text style={styles.like}>
              likes:
              {thing.likes}
            </Text>
          </Text>
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Things!!</Text>
      {renderThings()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 34,
  },
  like: {
    color: '#999',
  },
});

export default Things;
