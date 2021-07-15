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
        style={styles.TouchableOpacity_144_16}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("142_81"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd3/956b/367a107990797693524683a2b6b05e0b"
        }}
        style={styles.ImageBackground_144_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ad4/847c/3825db358c718790d91123b6817850f0"
        }}
        style={styles.ImageBackground_143_3}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  TouchableOpacity_144_16: {
    width: wp("11.666666666666666%"),
    height: hp("7.03125%"),
    top: hp("3.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%")
  },
  ImageBackground_144_29: {
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
  ImageBackground_143_3: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("68.75%"),
    minHeight: hp("68.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("28.4375%"),
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
