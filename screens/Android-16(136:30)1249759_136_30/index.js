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
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5b4/89bc/08c74772fdad8a8b3caa1a8a1d6a4a28"
        }}
        style={styles.TouchableOpacity_136_45}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("35_3"))
        }
      />
      <View style={styles.View_199_21}>
        <View style={styles.View_136_35} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/296e/fa08/786a8ac3f5a1425ddd71752878395b28"
          }}
          style={styles.TouchableOpacity_136_48}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("136_88"))
          }
        />
      </View>
      <View style={styles.View_199_22}>
        <View style={styles.View_136_36} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d231/f3ee/5cec8a93b16295ee3bf4f266e9adde20"
          }}
          style={styles.TouchableOpacity_136_49}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("137_2"))
          }
        />
      </View>
      <View style={styles.View_199_23}>
        <View style={styles.View_136_37} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2153/be8e/25342dfb897d673540b568abb256f82b"
          }}
          style={styles.TouchableOpacity_136_50}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("139_2"))
          }
        />
      </View>
      <View style={styles.View_199_24}>
        <View style={styles.View_136_38} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb0/1b56/3d5b13b41a9e7b783a198fbba05fec7c"
          }}
          style={styles.TouchableOpacity_136_51}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("139_12"))
          }
        />
      </View>
      <View style={styles.View_199_25}>
        <View style={styles.View_136_39} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca0/75f1/99fd94adde055e59c410deb49038af72"
          }}
          style={styles.TouchableOpacity_136_52}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("141_21"))
          }
        />
      </View>
      <View style={styles.View_199_26}>
        <View style={styles.View_136_40} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1f9/d605/a5dc4270525890db3b1203dfeb4408c4"
          }}
          style={styles.TouchableOpacity_136_53}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("141_30"))
          }
        />
      </View>
      <View style={styles.View_199_27}>
        <View style={styles.View_136_41} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d2a/fb6b/3ea6db7ad10997821eab7d9d9625e536"
          }}
          style={styles.TouchableOpacity_136_54}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("142_41"))
          }
        />
      </View>
      <View style={styles.View_199_28}>
        <View style={styles.View_136_42} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69e2/644a/9ea3b954fffc978c7631a4faacd734da"
          }}
          style={styles.TouchableOpacity_136_55}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("142_50"))
          }
        />
      </View>
      <View style={styles.View_199_29}>
        <View style={styles.View_136_43} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e716/b30b/d15b1a4e17d8ffc6e38d28f255876b35"
          }}
          style={styles.TouchableOpacity_136_56}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("142_61"))
          }
        />
      </View>
      <View style={styles.View_199_30}>
        <View style={styles.View_136_44} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad9a/04a9/3d1e8a031483f95789bbcdde0b551178"
          }}
          style={styles.TouchableOpacity_136_57}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("142_71"))
          }
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2241/fde8/6806af3fc59cbe55ed4ec8d10d019c76"
        }}
        style={styles.ImageBackground_136_58}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  TouchableOpacity_136_45: {
    width: wp("11.666666666666666%"),
    height: hp("7.03125%"),
    top: hp("3.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%")
  },
  View_199_21: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("25.46875%")
  },
  View_136_35: {
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
  TouchableOpacity_136_48: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_199_22: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("32.5%")
  },
  View_136_36: {
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
  TouchableOpacity_136_49: {
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
  View_199_23: {
    width: wp("73.10265435112846%"),
    minWidth: wp("73.10265435112846%"),
    height: hp("6.604277491569518%"),
    minHeight: hp("6.604277491569518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("39.3541145324707%")
  },
  View_136_37: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.047098795572916075%"),
    top: hp("0.17714500427246094%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_136_50: {
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
  View_199_24: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("46.5625%")
  },
  View_136_38: {
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
  TouchableOpacity_136_51: {
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
  View_199_25: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("53.59374999999999%")
  },
  View_136_39: {
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
  TouchableOpacity_136_52: {
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
  View_199_26: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("60.62499999999999%")
  },
  View_136_40: {
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
  TouchableOpacity_136_53: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_199_27: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("67.65625%")
  },
  View_136_41: {
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
  TouchableOpacity_136_54: {
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
  View_199_28: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("74.6875%")
  },
  View_136_42: {
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
  TouchableOpacity_136_55: {
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
  View_199_29: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("81.71875%")
  },
  View_136_43: {
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
  TouchableOpacity_136_56: {
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
  View_199_30: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.5625%"),
    minHeight: hp("6.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38043212890625%"),
    top: hp("88.75%")
  },
  View_136_44: {
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
  TouchableOpacity_136_57: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3125%"),
    resizeMode: "cover"
  },
  ImageBackground_136_58: {
    width: wp("87.22222222222223%"),
    minWidth: wp("87.22222222222223%"),
    height: hp("9.84375%"),
    minHeight: hp("9.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%"),
    top: hp("9.375%"),
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
