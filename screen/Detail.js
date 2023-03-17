import React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

import user from '../assets/user.png';
import backbtn from '../assets/back.png';
import logo from '../assets/plane.png';

const Jadwal = [
  {
    id: '1',
    asal: 'Bandung',
    tujuan: 'Jakarta',
    maskapai: 'Lion Air',
    waktu: '23 Mar 2022, 18:00',
  },
  {
    id: '2',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu: '23 Mar 2022, 18:00',
  },
  {
    id: '3',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu: '23 Mar 2022, 18:00',
  },
  {
    id: '4',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu: '23 Mar 2022, 18:00',
  },
  {
    id: '5',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu: '23 Mar 2022, 18:00',
  },
  {
    id: '6',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu: '23 Mar 2022, 18:00',
  },
  {
    id: '7',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu: '23 Mar 2022, 18:00',
  },
  {
    id: '8',
    asal: 'Lampung',
    tujuan: 'Padang',
    maskapai: 'Lion Air',
    waktu: '23 Mar 2022, 18:00',
  },
  {
    id: '9',
    asal: 'Lampung',
    tujuan: 'Padang',
    maskapai: 'Lion Air',
    waktu: '23 Mar 2022, 18:00',
  },
];

const DetailScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.tujuanasal}>
        {item.asal} - {item.tujuan}
      </Text>
      <View style={styles.waktupesawat}>
        <Image src={logo} alt="logo" style={styles.logo} />
        <Text style={styles.maskapai}>{item.maskapai}</Text>
        <Text style={styles.texttanggal}>{item.waktu}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Image src={backbtn} alt="back" style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <Text style={styles.heading}>Hiling.id</Text>
          <Image src={user} alt="user" style={styles.logo} />
        </View>
        <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
        <Text style={styles.heading2}>(tanggal Keberangkatan)</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <FlatList data={Jadwal} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </ScrollView>
      </SafeAreaView>
      <View style={styles.position}>
        <Text>Copyright Syafira Aliffinda Komala 120140248</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    marginTop: 0,
  },
  header: {
    width: '100%',
    backgroundColor: '#800000',
    padding: 20,
    marginBottom: 10,
  },
  heading: {
    color: 'white',
    fontSize: 30,
  },
  heading2: {
    color: 'white',
    textAlign: 'center',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  img: {
    width: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  maskapai: {
    marginLeft: -80,
    fontSize: 20,
    fontWeight: 'bold',
  },
  texttanggal: {
    color: 'blue',
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
  logo: {
    width: 35,
    height: 25,
  },
});

export default DetailScreen;
