import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MyHeader } from '../../components';
import { colors, fonts } from '../../utils';
import { Icon } from 'react-native-elements';

const UlasanOleholeh = ({ route, navigation }) => {
  const { title, reviews } = route.params;

  // Fungsi untuk menampilkan rating bintang
  const renderStars = (rating) => {
    return (
      <View style={styles.starContainer}>
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name={index < rating ? 'star' : 'star-border'}
            size={14}
            color='gold'
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MyHeader title="Oleh-oleh UMKM" />
      <ScrollView>
        <View style={styles.contentContainer}>
          {/* JUDUL TOKO ULASAN */}
          <Text style={styles.tokoTitle}>{title}</Text>

          {/* JUDUL ULASAN */}
          <View style={styles.ulasanHeader}>
            <Text style={styles.ulasanTitle}>Ulasan</Text>
            <View style={styles.divider} />
          </View>

          {/* LIST ULASAN */}
          {reviews.map((review, index) => (
            <View key={index} style={styles.ulasanItem}>
              <Image source={review.profilePic} style={styles.profilePic} />
              <View style={styles.ulasanContent}>
                <Text style={styles.ulasanName}>{review.user}</Text>
                {renderStars(review.rating)}
                <Text style={styles.ulasanComment}>{review.comment}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* TOMBOL TAMBAH ULASAN */}
      <TouchableOpacity style={styles.tambahUlasanButton} onPress={() => navigation.navigate('TambahKomentarOleholeh',  { title: 'Toko Kue Ende' })}>
        <Text style={styles.tambahUlasanText}>Tambah Ulasan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    padding: 10,
  },
  tokoTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  ulasanHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  ulasanTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.black,
  },
  divider: {
    padding: 0.5,
    width: '100%',
    backgroundColor: colors.black,
    left: 10,
    top: -5,
  },
  ulasanItem: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 5,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  ulasanContent: {
    flex: 1,
  },
  ulasanName: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.primary,
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  ulasanComment: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    textAlign: 'justify',
  },
  tambahUlasanButton: {
    backgroundColor: colors.primary,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tambahUlasanText: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.white,
  },
});

export default UlasanOleholeh;