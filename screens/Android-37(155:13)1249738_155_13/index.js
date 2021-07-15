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
        style={styles.ImageBackground_155_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1967/cad7/cbfb653900cac4294ea5928a49f686ea"
        }}
        style={styles.ImageBackground_155_16}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5b4/89bc/08c74772fdad8a8b3caa1a8a1d6a4a28"
        }}
        style={styles.TouchableOpacity_155_27}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("35_3"))
        }
      />
      <View style={styles.View_199_40}>
        <View style={styles.View_155_17} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/296e/fa08/786a8ac3f5a1425ddd71752878395b28"
          }}
          style={styles.TouchableOpacity_155_30}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("155_43"))
          }
        />
      </View>
      <View style={styles.View_199_41}>
        <View style={styles.View_155_18} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d231/f3ee/5cec8a93b16295ee3bf4f266e9adde20"
          }}
          style={styles.TouchableOpacity_155_31}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("156_71"))
          }
        />
      </View>
      <View style={styles.View_199_42}>
        <View style={styles.View_155_19} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21b9/0692/3b47286f03a8ddeb863163f1ced4c546"
          }}
          style={styles.TouchableOpacity_155_32}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("156_81"))
          }
        />
      </View>
      <View style={styles.View_199_43}>
        <View style={styles.View_155_20} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb0/1b56/3d5b13b41a9e7b783a198fbba05fec7c"
          }}
          style={styles.TouchableOpacity_155_33}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("156_91"))
          }
        />
      </View>
      <View style={styles.View_199_44}>
        <View style={styles.View_155_21} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca0/75f1/99fd94adde055e59c410deb49038af72"
          }}
          style={styles.TouchableOpacity_155_34}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("156_101"))
          }
        />
      </View>
      <View style={styles.View_199_45}>
        <View style={styles.View_155_22} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1f9/d605/a5dc4270525890db3b1203dfeb4408c4"
          }}
          style={styles.TouchableOpacity_155_35}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("156_111"))
          }
        />
      </View>
      <View style={styles.View_199_46}>
        <View style={styles.View_155_23} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d2a/fb6b/3ea6db7ad10997821eab7d9d9625e536"
          }}
          style={styles.TouchableOpacity_155_36}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("157_3"))
          }
        />
      </View>
      <View style={styles.View_199_47}>
        <View style={styles.View_155_24} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69e2/644a/9ea3b954fffc978c7631a4faacd734da"
          }}
          style={styles.TouchableOpacity_155_37}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("157_12"))
          }
        />
      </View>
      <View style={styles.View_199_48}>
        <View style={styles.View_155_25} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e716/b30b/d15b1a4e17d8ffc6e38d28f255876b35"
          }}
          style={styles.TouchableOpacity_155_38}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("157_30"))
          }
        />
      </View>
      <View style={styles.View_199_49}>
        <View style={styles.View_155_26} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad9a/04a9/3d1e8a031483f95789bbcdde0b551178"
          }}
          style={styles.TouchableOpacity_155_39}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("157_37"))
          }
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/77f0/8cf735b82070824c750df5a085467424"
        }}
        style={styles.ImageBackground_155_41}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  ImageBackground_155_15: {
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
  ImageBackground_155_16: {
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
  TouchableOpacity_155_27: {
    width: wp("11.666666666666666%"),
    height: hp("7.03125%"),
    top: hp("3.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%")
  },
  View_199_40: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("25.156250000000004%")
  },
  View_155_17: {
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
  TouchableOpacity_155_30: {
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
  View_199_41: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("32.1875%")
  },
  View_155_18: {
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
  TouchableOpacity_155_31: {
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
  View_199_42: {
    width: wp("73.10262044270833%"),
    minWidth: wp("73.10262044270833%"),
    height: hp("6.604277491569518%"),
    minHeight: hp("6.604277491569518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("39.04163360595703%")
  },
  View_155_19: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04706488715277679%"),
    top: hp("0.17711639404296875%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  TouchableOpacity_155_32: {
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
  View_199_43: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("46.25%")
  },
  View_155_20: {
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
  TouchableOpacity_155_33: {
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
  View_199_44: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("53.28125%")
  },
  View_155_21: {
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
  TouchableOpacity_155_34: {
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
  View_199_45: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("60.3125%")
  },
  View_155_22: {
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
  TouchableOpacity_155_35: {
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
  View_199_46: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("67.34375%")
  },
  View_155_23: {
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
  TouchableOpacity_155_36: {
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
  View_199_47: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("74.375%")
  },
  View_155_24: {
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
  TouchableOpacity_155_37: {
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
  View_199_48: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("81.40625%")
  },
  View_155_25: {
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
  TouchableOpacity_155_38: {
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
  View_199_49: {
    width: wp("73.05555555555556%"),
    minWidth: wp("73.05555555555556%"),
    height: hp("6.5625%"),
    minHeight: hp("6.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.38039822048611%"),
    top: hp("88.4375%")
  },
  View_155_26: {
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
  TouchableOpacity_155_39: {
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
  ImageBackground_155_41: {
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
