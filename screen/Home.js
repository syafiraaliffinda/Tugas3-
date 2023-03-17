import { React, useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import user from '../assets/user.png';
import hamburger from '../assets/hamburger.png';
import landing from '../assets/landing.png';
import fly from '../assets/fly.png';
import calendar from '../assets/calendar.png';

const HomeScreen = ({ navigation }) => {
  const [keberangkatan, setKeberangkatan] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [tanggal, setTanggal] = useState('');
  return (
    <View style={styles.container}>
      <View style={{ height: 400, marginHorizontal: 0, backgroundColor: '#5078E1' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={hamburger} style={styles.hamburger} />
          <Image source={user} style={styles.user} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.textHeader}>Hilling.Id</Text>
        </View>
        <View style={styles.subContainer}>
          <View style={{ marginTop: 22, marginLeft: 12 }}>
            <Text style={styles.textSubHeader}>Lokasi Keberangkatan</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <View style={{ marginTop: 5 }}>
              <Image source={fly} style={{ width: 30, height: 25, marginLeft: 12 }} />
            </View>
            <TextInput style={styles.input} onChangeText={setKeberangkatan} value={keberangkatan} placeholder="Masukan Lokasi Keberangkatan" selectTextOnFocus={false} />
          </View>
          <View style={{ marginTop: 12, marginLeft: 12 }}>
            <Text style={styles.textSubHeader}>Lokasi Tujuan</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <View style={{ marginTop: 5 }}>
              <Image source={landing} style={{ width: 30, height: 25, marginLeft: 12 }} />
            </View>
            <TextInput style={styles.input} onChangeText={setTujuan} value={tujuan} placeholder="Masukan Lokasi Tujuan" />
          </View>
          <View style={{ marginTop: 12, marginLeft: 12 }}>
            <Text style={styles.textSubHeader}>Tanggal Keberangkatan</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 12 }}>
            <View style={{ marginTop: 5 }}>
              <Image source={calendar} style={{ width: 30, height: 30, marginLeft: 12 }} />
            </View>
            <TextInput style={styles.input} onChangeText={setTanggal} value={tanggal} placeholder="Masukan Tanggal Keberangkatan" />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail')}>
            <Text style={{ color: 'white', fontSize: 18 }}>Cari</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.position}>
        <Text>Copyright Syafira Aliffinda Komala 120140248</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  hamburger: {
    marginTop: 50,
    marginLeft: 20,
    width: 30,
    height: 30,
  },
  user: {
    marginTop: 50,
    width: 25,
    height: 32,
    marginRight: 20,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  subContainer: {
    marginTop: 20,
    height: 350,
    marginHorizontal: 30,
    backgroundColor: 'white',
    elevation: 20,
    borderRadius: 20,
  },
  textSubHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 270 - 12,
    marginHorizontal: 10,
    padding: 12,
    marginTop: 5,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    marginTop: 12,
    height: 50,
    marginHorizontal: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#173584',
    elevation: 3,
  },
  position: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyright: {
    color: '#797575',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 'auto',
    textAlign: 'center',
  },
});

export default HomeScreen;
