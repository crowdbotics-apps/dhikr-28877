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
      <View style={styles.View_217_12}>
        <View style={styles.View_217_13} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0031/0e3d/2ef8319ca7a0e13fd2cada3eb573f8a8"
          }}
          style={styles.TouchableOpacity_217_14}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("35_3"))
          }
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c9/a30f/1fb735e76af0b3bc029a0cfe226b2cf2"
        }}
        style={styles.ImageBackground_217_15}
      />
      <View style={styles.View_217_16}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c9/a30f/1fb735e76af0b3bc029a0cfe226b2cf2"
          }}
          style={styles.ImageBackground_217_17}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_217_12: {
    width: wp("81.11111111111111%"),
    minWidth: wp("81.11111111111111%"),
    height: hp("6.875000000000001%"),
    minHeight: hp("6.875000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%"),
    top: hp("79.84375%")
  },
  View_217_13: {
    width: wp("81.11111111111111%"),
    minWidth: wp("81.11111111111111%"),
    height: hp("6.875000000000001%"),
    minHeight: hp("6.875000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.9300000071525574,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  TouchableOpacity_217_14: {
    width: wp("77.77777777777779%"),
    minWidth: wp("77.77777777777779%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    top: hp("0.3125%"),
    resizeMode: "cover"
  },
  ImageBackground_217_15: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("37.65625%"),
    minHeight: hp("37.65625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.88888888888889%"),
    top: hp("19.6875%"),
    resizeMode: "cover"
  },
  View_217_16: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-113.61111111111111%"),
    top: hp("0.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_217_17: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("37.65625%"),
    minHeight: hp("37.65625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.888888888888886%"),
    top: hp("31.093750000000004%"),
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
