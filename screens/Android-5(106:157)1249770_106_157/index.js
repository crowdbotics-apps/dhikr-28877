import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da79/48e8/f66e106d21d04c983ba7eda6750afdf8"
        }}
        style={styles.ImageBackground_109_2}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5b4/89bc/08c74772fdad8a8b3caa1a8a1d6a4a28"
        }}
        style={styles.TouchableOpacity_109_14}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("35_3"))
        }
      />
      <View style={styles.View_199_2}>
        <View style={styles.View_109_3} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/296e/fa08/786a8ac3f5a1425ddd71752878395b28"
          }}
          style={styles.TouchableOpacity_109_28}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("113_11"))
          }
        />
      </View>
      <View style={styles.View_199_3}>
        <View style={styles.View_109_19} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d231/f3ee/5cec8a93b16295ee3bf4f266e9adde20"
          }}
          style={styles.TouchableOpacity_109_29}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("114_40"))
          }
        />
      </View>
      <View style={styles.View_199_4}>
        <View style={styles.View_109_20} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2153/be8e/25342dfb897d673540b568abb256f82b"
          }}
          style={styles.TouchableOpacity_109_30}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("116_3"))
          }
        />
      </View>
      <View style={styles.View_199_5}>
        <View style={styles.View_109_21} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb0/1b56/3d5b13b41a9e7b783a198fbba05fec7c"
          }}
          style={styles.TouchableOpacity_109_31}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("116_12"))
          }
        />
      </View>
      <View style={styles.View_199_10}>
        <View style={styles.View_199_6}>
          <View style={styles.View_109_22} />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca0/75f1/99fd94adde055e59c410deb49038af72"
            }}
            style={styles.TouchableOpacity_111_2}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("118_2"))
            }
          />
        </View>
      </View>
      <View style={styles.View_199_12}>
        <View style={styles.View_199_8}>
          <View style={styles.View_109_24} />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d2a/fb6b/3ea6db7ad10997821eab7d9d9625e536"
            }}
            style={styles.TouchableOpacity_113_3}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_12"))
            }
          />
        </View>
      </View>
      <View style={styles.View_199_13}>
        <View style={styles.View_199_9}>
          <View style={styles.View_109_25} />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69e2/644a/9ea3b954fffc978c7631a4faacd734da"
            }}
            style={styles.TouchableOpacity_113_4}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_22"))
            }
          />
        </View>
      </View>
      <View style={styles.View_199_14}>
        <View style={styles.View_109_26} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e716/b30b/d15b1a4e17d8ffc6e38d28f255876b35"
          }}
          style={styles.TouchableOpacity_113_5}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("133_33"))
          }
        />
      </View>
      <View style={styles.View_199_15}>
        <View style={styles.View_109_27} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad9a/04a9/3d1e8a031483f95789bbcdde0b551178"
          }}
          style={styles.TouchableOpacity_113_6}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("133_43"))
          }
        />
      </View>
      <View style={styles.View_199_11}>
        <View style={styles.View_199_7}>
          <View style={styles.View_109_23} />
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1f9/d605/a5dc4270525890db3b1203dfeb4408c4"
            }}
            style={styles.TouchableOpacity_113_2}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("133_2"))
            }
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  ImageBackground_109_2: {
    width: wp("87.22222222222223%"),
    minWidth: wp("87.22222222222223%"),
    height: hp("9.84375%"),
    minHeight: hp("9.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%"),
    top: hp("9.21875%"),
    resizeMode: "cover"
  },
  TouchableOpacity_109_14: {
    width: wp("11.666666666666666%"),
    height: hp("7.03125%"),
    top: hp("3.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%")
  },
  View_199_2: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.5625%"),
    minHeight: hp("6.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("25.3125%")
  },
  View_109_3: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.31249999999999645%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_109_28: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555554%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_199_3: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("32.65625%")
  },
  View_109_19: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_109_29: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_199_4: {
    width: wp("73.10265435112846%"),
    minWidth: wp("73.10265435112846%"),
    height: hp("6.604277491569518%"),
    minHeight: hp("6.604277491569518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("39.53125%")
  },
  View_109_20: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.047098795572916075%"),
    top: hp("0.17714142799377441%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_109_30: {
    width: wp("72.31643676757812%"),
    minWidth: wp("72.31643676757812%"),
    height: hp("6.604277491569518%"),
    minHeight: hp("6.604277491569518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_199_5: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("46.71875%")
  },
  View_109_21: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_109_31: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.15625%"),
    resizeMode: "cover"
  },
  View_199_10: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("53.75%")
  },
  View_199_6: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_109_22: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_111_2: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7862345377604161%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_199_12: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("67.8125%")
  },
  View_199_8: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_109_24: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_113_3: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%"),
    top: hp("0.15625%"),
    resizeMode: "cover"
  },
  View_199_13: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("74.84375%")
  },
  View_199_9: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_109_25: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_113_4: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%"),
    top: hp("0.15625%"),
    resizeMode: "cover"
  },
  View_199_14: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("81.875%")
  },
  View_109_26: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_113_5: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%"),
    top: hp("0.15625%"),
    resizeMode: "cover"
  },
  View_199_15: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("88.90625%")
  },
  View_109_27: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_113_6: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.15625%"),
    resizeMode: "cover"
  },
  View_199_11: {
    width: wp("73.10265435112846%"),
    minWidth: wp("73.10265435112846%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("60.62499999999999%")
  },
  View_199_7: {
    width: wp("73.10265435112846%"),
    minWidth: wp("73.10265435112846%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_109_23: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.047098795572916075%"),
    top: hp("0.1562500000000071%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_113_2: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
