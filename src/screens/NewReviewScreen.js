/**
 * @format
 * @flow
 */
import React, {PureComponent} from 'react';
import {Animated, View, TextInput, StyleSheet} from 'react-native';
import StarRating from '../components/StarRating';
import {SubText} from '../components/Typos';
import {colors, metrics} from '../utils/themes';
import Header from '../components/Header';

class NewReviewScreen extends PureComponent {
  constructor(props) {
    super(props);
    this._contentOffset = new Animated.Value(0);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <StarRating rating={0} />
          <SubText style={styles.welcome}>Chọn số sao tương tứng</SubText>
        </View>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Tiêu đề"
        />
        <TextInput
          multiline
          style={[styles.input, styles.multiline]}
          autoCorrect={false}
          placeholder="Nội dung (tuỳ chọn)"
        />
        <Header
          hasBackButton
          animatedOpacity={this._contentOffset.interpolate({
            inputRange: [0, 60, 70],
            outputRange: [0, 0.3, 1],
            extrapolate: 'clamp',
          })}
          animatedY={this._contentOffset.interpolate({
            inputRange: [0, 70],
            outputRange: [60, 0],
            extrapolate: 'clamp',
          })}
          title="Viết cảm nhận"
          rightButton={{
            onPress: () => null,
            iconName: 'send',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: metrics.headerHeight,
  },
  center: {
    marginTop: metrics.extraPadding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.background,
    padding: metrics.lessPadding,
    borderRadius: metrics.radius,
    marginTop: metrics.padding,
    marginHorizontal: metrics.padding,
    fontSize: 16,
  },
  multiline: {
    height: 120,
  },
});

export default NewReviewScreen;
