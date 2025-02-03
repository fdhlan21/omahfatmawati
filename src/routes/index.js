import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  StatusGizi,
  Imt,
  Take,
  StatusGiziHasil,
  DataIbuHamil,
  DataPemeriksaanIbuHami,
  SubDataPemeriksaanIbuHami,
  IbuHamil,
  TrisemesterI,
  TrisemesterII1,
  TrisemesterIII1,
  TrisemesterIII2,
  TrisemesterIII3,
  IbuBersalin,
  IbuNifas,
  IbuNifasKF,
  VideoMateri,
  TanyaJawab,
  Artikel,
  Kuesioner,
  TrisemesterII2,
  InfoLayananKesehatan,
  InfoEdukasiPenyakit,
  InfoEdukasiPenyakitKanker,
  InfoEdukasiPenyakitStroke,
  InfoEdukasiPenyakitJantung,
  InfoEdukasiPenyakitGinjal,
  InfoEdukasiPenyakitDiabetes,
  InteraksiBersamaTim,
  TentangAplikasi,
  InfoEdukasiPenyakitStunting,
  PrintKainRoll,
  PrintJersey,
  CetakSample,
  CetakSampleKainRoll,
  CetakSampleHijab,
  CetakSampleJersey,
  PrintHijab,
  Riwayat,
  MulaiPage,
  Indentitas,
  HasilTekananDarah,
  SubRiwayatPemeriksaanLaboratorium,
  Gula,
  ProfilLipid,
  LainLain,
  RiwayatPemeriksaanRadiologis,
  RiwayatObat,
  EKG,
  PenilaianNyeri,
  Rekomendasi,
  KalkulatorKompos,
  Petunjuk,
  InputSwamedikasi,
  RiwayatPelayanan,
  Referensi,
  Edit,
  DestinasiWisata,
  DetailDestinasiWisata,
  UlasanDestinasi,
  OleholehUMKMDetail,
  UlasanOleholeh,
  TambahKomentarOleholeh


} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import OleholehUMKM from '../pages/Menu/oleholeh';



const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="DestinasiWisata"
        component={DestinasiWisata}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="DetailDestinasiWisata"
        component={DetailDestinasiWisata}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="UlasanDestinasi"
        component={UlasanDestinasi}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="OleholehUMKM"
        component={OleholehUMKM}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="OleholehUMKMDetail"
        component={OleholehUMKMDetail}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="UlasanOleholeh"
        component={UlasanOleholeh}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="TambahKomentarOleholeh"
        component={TambahKomentarOleholeh}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />
















    </Stack.Navigator>
  );
}
