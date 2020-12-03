import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';

const SimpleBottom = ({ isOpen }) => {
  // const height = new Animated.Value(0);
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isOpen) {
      Animated.timing(height, {
        toValue: 200,
        duration: 300,
        useNativeDriver: false,
      }).start();
      return;
    }
    Animated.timing(height, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const interpolatedHeight = height.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 130],
  });

  return (
    <Animated.View
      style={[styles.menuBottomSimples, { height: interpolatedHeight }]}>
      <View style={{ padding: 10 }}>
        <Text>** Simples **</Text>
      </View>
    </Animated.View>
  );
};

const AnimatedBottomMenu = ({ isOpen, onCloseModal }) => {
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isOpen) {
      Animated.timing(height, {
        toValue: 200,
        duration: 300,
        useNativeDriver: false,
      }).start();
      return;
    }
    Animated.timing(height, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const interpolatedHeight = height.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 130],
  });

  return (
    <TouchableWithoutFeedback onPress={onCloseModal}>
      <Animated.View
        style={[styles.menuWrapperDropdown, { heigh: interpolatedHeight }]}>
        <Animated.View
          style={[styles.menuBottom, { heigh: interpolatedHeight }]}>
          <Text>Menu Lindo</Text>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const Left = () => {
  return <View style={styles.left} />;
};

const Right = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  // const handleToggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <View style={styles.right}>
      <View style={styles.box} />
      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.button} onPress={handleOpen}>
          <Text>Toogle Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxBlue} />
      <AnimatedBottomMenu isOpen={isOpen} onCloseModal={handleClose} />
      {/* <SimpleBottom isOpen={isOpen} /> */}
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Left />
      <Right />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuWrapperDropdown: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    height: 0,
  },
  menuBottomSimples: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'green',
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  menuBottom: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'tomato',
    width: '100%',
    height: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  right: {
    flex: 2,
  },
  box: {
    backgroundColor: 'orange',
    marginBottom: 10,
    height: 150,
  },
  boxButton: {
    backgroundColor: '#E8ECED',
    marginHorizontal: 10,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxBlue: {
    backgroundColor: 'blue',
    marginHorizontal: 10,
    marginVertical: 10,
    height: 200,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default App;
