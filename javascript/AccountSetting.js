import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image, ScrollView } from 'react-native';

const SettingItem = ({ icon, title, subtitle, toggle }) => {
  return (
    <View style={styles.settingItem}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.settingText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {toggle !== undefined ? (
        <Switch value={toggle} />
      ) : (
        <Image source={require('../images/next.png')} style={styles.forwardIcon} />
      )}
    </View>
  );
};

const AccountSettings = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account Settings</Text>
        <Text style={styles.headerSubtitle}>
          Update your settings like notifications, payments, profile edit etc.
        </Text>
      </View>
      <SettingItem
          icon={require('../images/profile.png')}
        title="Profile Information"
        subtitle="Change your account information"
     
      />
      <SettingItem
           icon={require('../images/lock.png')}
        title="Change Password"
        subtitle="Change your password"
      />
      <SettingItem
         icon={require('../images/card.png')}
        title="Payment Methods"
        subtitle="Add your credit & debit cards"
      />
      <SettingItem
          icon={require('../images/location.png')}
        title="Locations"
        subtitle="Add or remove your delivery locations"
      />
      <SettingItem
          icon={require('../images/facebook.png')}
        title="Add Social Account"
        subtitle="Add Facebook, Twitter etc"
      />
      <SettingItem
          icon={require('../images/sharef.png')}
        title="Refer to Friends"
        subtitle="Get $10 for referring friends"
      />
      <Text style={styles.sectionHeader}>Notifications</Text>
      <SettingItem
          icon={require('../images/notify.png')}
        title="Push Notifications"
        subtitle="For daily update you will get it"
        toggle={false}
      />
      <SettingItem
         icon={require('../images/notify.png')}
        title="SMS Notifications"
        subtitle="For daily update you will get it"
        toggle={false}
      />
      <SettingItem
        icon={require('../images/notify.png')}
        title="Promotional Notifications"
        subtitle="For daily update you will get it"
        toggle={true}
      />
      <Text style={styles.sectionHeader}>More</Text>
      <SettingItem
           icon={require('../images/rating.png')}
        title="Rate Us"
        subtitle="Rate us playstore, appstore"
      />
      <SettingItem
         icon={require('../images/document.png')}
        title="FAQ"
        subtitle="Frequently asked questions"
      />
      <SettingItem
          icon={require('../images/logout.png')}
        title="Logout"
        subtitle=""
      />
         <View style={styles.container1}>
      <TouchableOpacity style={styles.link}>
        <Image source={require('../images/home.png')} style={styles.icon} />
        <Text style={styles.linkText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Image source={require('../images/search.png')} style={styles.icon} />
        <Text style={styles.linkText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Image source={require('../images/order.png')} style={styles.icon} />
        <Text style={styles.linkText}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Image source={require('../images/profile.png')} style={styles.icon} />
        <Text style={styles.linkText}>Profile</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#010f07',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#868686',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  settingText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010f07',
  },
  subtitle: {
    fontSize: 14,
    color: '#868686',
  },
  forwardIcon: {
    width: 24,
    height: 24,
    tintColor: '#868686',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010f07',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },

    container1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
  },
  link: {
    alignItems: 'center',
  },

  linkText: {
    fontSize: 12,
    color: '#868686',
  },
});

export default AccountSettings;