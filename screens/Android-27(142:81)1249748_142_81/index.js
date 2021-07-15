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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a6a/8f5a/0aeb7d3124df32bda8037fe2de9fa7c2"
        }}
        style={styles.ImageBackground_142_83}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1967/cad7/cbfb653900cac4294ea5928a49f686ea"
        }}
        style={styles.ImageBackground_142_84}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5b4/89bc/08c74772fdad8a8b3caa1a8a1d6a4a28"
        }}
        style={styles.TouchableOpacity_142_95}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("35_3"))
        }
      />
      <View style={styles.View_199_31}>
        <View style={styles.View_142_85} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/296e/fa08/786a8ac3f5a1425ddd71752878395b28"
          }}
          style={styles.TouchableOpacity_142_98}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_2"))
          }
        />
      </View>
      <View style={styles.View_199_32}>
        <View style={styles.View_142_86} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d231/f3ee/5cec8a93b16295ee3bf4f266e9adde20"
          }}
          style={styles.TouchableOpacity_142_99}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_30"))
          }
        />
      </View>
      <View style={styles.View_199_33}>
        <View style={styles.View_142_87} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2153/be8e/25342dfb897d673540b568abb256f82b"
          }}
          style={styles.TouchableOpacity_142_100}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_40"))
          }
        />
      </View>
      <View style={styles.View_199_34}>
        <View style={styles.View_142_88} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb0/1b56/3d5b13b41a9e7b783a198fbba05fec7c"
          }}
          style={styles.TouchableOpacity_142_101}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_50"))
          }
        />
      </View>
      <View style={styles.View_199_35}>
        <View style={styles.View_142_89} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca0/75f1/99fd94adde055e59c410deb49038af72"
          }}
          style={styles.TouchableOpacity_142_102}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_60"))
          }
        />
      </View>
      <View style={styles.View_199_36}>
        <View style={styles.View_142_90} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1f9/d605/a5dc4270525890db3b1203dfeb4408c4"
          }}
          style={styles.TouchableOpacity_142_103}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_70"))
          }
        />
      </View>
      <View style={styles.View_199_37}>
        <View style={styles.View_142_91} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d2a/fb6b/3ea6db7ad10997821eab7d9d9625e536"
          }}
          style={styles.TouchableOpacity_142_104}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_80"))
          }
        />
      </View>
      <View style={styles.View_199_38}>
        <View style={styles.View_142_92} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69e2/644a/9ea3b954fffc978c7631a4faacd734da"
          }}
          style={styles.TouchableOpacity_142_105}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("146_90"))
          }
        />
      </View>
      <View style={styles.View_199_39}>
        <View style={styles.View_142_93} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e716/b30b/d15b1a4e17d8ffc6e38d28f255876b35"
          }}
          style={styles.TouchableOpacity_142_106}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("147_100"))
          }
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd3/956b/367a107990797693524683a2b6b05e0b"
        }}
        style={styles.ImageBackground_143_2}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  ImageBackground_142_83: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("49.84375%"),
    minHeight: hp("49.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("130.27777777777777%"),
    top: hp("12.968750000000002%"),
    resizeMode: "cover"
  },
  ImageBackground_142_84: {
    width: wp("65.3125%"),
    minWidth: wp("65.3125%"),
    height: hp("65.3125%"),
    minHeight: hp("65.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-75.55555555555556%"),
    top: hp("-123.125%"),
    resizeMode: "cover"
  },
  TouchableOpacity_142_95: {
    width: wp("11.666666666666666%"),
    height: hp("7.03125%"),
    top: hp("3.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%")
  },
  View_199_31: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("28.90625%")
  },
  View_142_85: {
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
  TouchableOpacity_142_98: {
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
  View_199_32: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("35.9375%")
  },
  View_142_86: {
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
  TouchableOpacity_142_99: {
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
  View_199_33: {
    width: wp("73.10262044270833%"),
    minWidth: wp("73.10262044270833%"),
    height: hp("6.604277491569518%"),
    minHeight: hp("6.604277491569518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("42.7916145324707%")
  },
  View_142_87: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04706488715277679%"),
    top: hp("0.17713546752929688%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_142_100: {
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
  View_199_34: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("50%")
  },
  View_142_88: {
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
  TouchableOpacity_142_101: {
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
  View_199_35: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("57.03125%")
  },
  View_142_89: {
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
  TouchableOpacity_142_102: {
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
  View_199_36: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("64.0625%")
  },
  View_142_90: {
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
  TouchableOpacity_142_103: {
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
  View_199_37: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("71.09375%")
  },
  View_142_91: {
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
  TouchableOpacity_142_104: {
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
  View_199_38: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("78.125%")
  },
  View_142_92: {
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
  TouchableOpacity_142_105: {
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
  View_199_39: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("85.15625%")
  },
  View_142_93: {
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
  TouchableOpacity_142_106: {
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
  ImageBackground_143_2: {
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
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
