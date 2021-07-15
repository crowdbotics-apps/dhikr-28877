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
        style={styles.TouchableOpacity_156_85}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("155_13"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/77f0/8cf735b82070824c750df5a085467424"
        }}
        style={styles.ImageBackground_156_88}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a0/a108/0bc06ebdb38ce5f5eb80eb44dfeae1cb"
        }}
        style={styles.ImageBackground_156_90}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  TouchableOpacity_156_85: {
    width: wp("11.666666666666666%"),
    height: hp("7.03125%"),
    top: hp("3.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%")
  },
  ImageBackground_156_88: {
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
  },
  ImageBackground_156_90: {
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
