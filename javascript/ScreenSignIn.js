import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const SignIn = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TextContent />
      <Form />
      <ForgotPassword />
      <SignInButton />
      <CreateAccount />
      <SocialButtons />
    </SafeAreaView>
  );
};

const TextContent = () => {
  return (
    <View style={textContentStyles.container}>
      <Text style={textContentStyles.welcomeText}>Welcome to Tamang Food Services</Text>
      <Text style={textContentStyles.descriptionText}>
        Enter your Phone number or Email address for sign in. Enjoy your food :)
      </Text>
    </View>
  );
};

const Form = () => {
  return (
    <View style={formStyles.container}>
      <Text style={formStyles.label}>EMAIL ADDRESS</Text>
      <TextInput 
        style={formStyles.input} 
        placeholder="sajin tamang figma @.com"
      />
      <Text style={formStyles.label}>PASSWORD</Text>
      <TextInput 
        style={formStyles.input} 
        placeholder="******"
        secureTextEntry
      />
    </View>
  );
};

const ForgotPassword = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.forgotPassword}>Forget Password?</Text>
    </TouchableOpacity>
  );
};

const SignInButton = () => {
  return (
    <TouchableOpacity style={buttonStyles.signInButton}>
      <Text style={buttonStyles.buttonText}>SIGN IN</Text>
    </TouchableOpacity>
  );
};

const CreateAccount = () => {
  return (
    <View style={createAccountStyles.container}>
      <Text style={createAccountStyles.text}>Don’t have account?</Text>
      <TouchableOpacity>
        <Text style={createAccountStyles.createAccountText}>Create new account.</Text>
      </TouchableOpacity>
    </View>
  );
};

const SocialButtons = () => {
  return (
    <View style={socialButtonsStyles.container}>
      <Text style={socialButtonsStyles.orText}>Or</Text>
      <TouchableOpacity style={socialButtonsStyles.facebookButton}>
        <Image
          source={require('../images/facebook.png')}
          style={socialButtonsStyles.icon}
        />
        <Text style={socialButtonsStyles.buttonText}>CONNECT WITH FACEBOOK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={socialButtonsStyles.googleButton}>
        <Image
          source={require('../images/google.png')}
          style={socialButtonsStyles.icon}
        />
        <Text style={socialButtonsStyles.buttonText}>CONNECT WITH GOOGLE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  forgotPassword: {
    fontSize: 12,
    color: '#010F07',
    opacity: 0.64,
    alignSelf: 'flex-end',
    marginVertical: 10,
  }
});

const textContentStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 33,
    fontWeight: '300',
    color: '#010F07',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: '#868686',
    textAlign: 'center',
    marginTop: 10,
  },
});

const formStyles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    marginVertical: 20,
  },
  label: {
    fontSize: 12,
    color: '#868686',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 20,
    fontSize: 16,
    color: '#010F07',
  },
});

const buttonStyles = StyleSheet.create({
  signInButton: {
    width: screenWidth * 0.9,
    backgroundColor: '#F5A623',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});

const createAccountStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 12,
    color: '#010F07',
    opacity: 0.64,
  },
  createAccountText: {
    fontSize: 12,
    color: '#EEA734',
    marginLeft: 5,
  },
});

const socialButtonsStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  orText: {
    fontSize: 16,
    color: '#010F07',
    opacity: 0.64,
    marginVertical: 10,
  },
  facebookButton: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    backgroundColor: '#3B5998',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 28,
    height: 28,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default SignIn;