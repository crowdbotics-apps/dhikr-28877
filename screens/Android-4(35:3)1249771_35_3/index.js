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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae29/2867/d6908ad929c5d56d31e312c6eebbe381"
        }}
        style={styles.ImageBackground_19_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7303/5b0d/9cd714cdba7f68df9f10fcff209db81d"
        }}
        style={styles.ImageBackground_23_36}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7303/5b0d/9cd714cdba7f68df9f10fcff209db81d"
        }}
        style={styles.ImageBackground_23_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc63/eb64/556e5d4f0a11e4bb0cc875b2ab86a96c"
        }}
        style={styles.ImageBackground_23_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc63/eb64/556e5d4f0a11e4bb0cc875b2ab86a96c"
        }}
        style={styles.ImageBackground_23_43}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc63/eb64/556e5d4f0a11e4bb0cc875b2ab86a96c"
        }}
        style={styles.ImageBackground_23_44}
      />
      <View style={styles.View_199_17}>
        <TouchableOpacity
          style={styles.TouchableOpacity_35_51}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("106_157"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2104/2388/5bc0c1a9c540c7f96e36f0051f7ec3ec"
          }}
          style={styles.ImageBackground_35_236}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/071c/43c1/adb5531155044776c219ef4531f9f6ea"
          }}
          style={styles.ImageBackground_113_7}
        />
      </View>
      <View style={styles.View_199_18}>
        <TouchableOpacity
          style={styles.TouchableOpacity_35_52}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("142_81"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a30/4032/c614012a7074c558f7469720a07a7f68"
          }}
          style={styles.ImageBackground_27_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa6e/5fae/7d9a3e7a553a896e7a35c357a61d9ac2"
          }}
          style={styles.ImageBackground_149_110}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c516/c0df/fc835970dbf64357407d186851e7d141"
          }}
          style={styles.ImageBackground_185_5}
        />
      </View>
      <View style={styles.View_199_16}>
        <TouchableOpacity
          style={styles.TouchableOpacity_35_42}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("136_30"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fc1/24e4/cf9f63131381cd4d400e4f965ece2ed4"
          }}
          style={styles.ImageBackground_35_219}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/829c/af92/16936c01d82f9ac5fee702d487876b43"
          }}
          style={styles.ImageBackground_187_2}
        />
      </View>
      <View style={styles.View_199_19}>
        <TouchableOpacity
          style={styles.TouchableOpacity_35_53}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("155_13"))
          }
        />
        <View style={styles.View_154_4}>
          <View style={styles.View_154_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a992/ec4c/08542b963e60938a9e11170954c35d7b"
              }}
              style={styles.ImageBackground_154_6}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9cb/9473/54aa039abbefa39a555cfea358d0b88c"
              }}
              style={styles.ImageBackground_154_8}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a06/ec50/11a9adf906cf7b64cf0a8b60a29603a7"
              }}
              style={styles.ImageBackground_154_9}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed3b/299d/5a696f59908ee6a8246746ec00e42d4a"
              }}
              style={styles.ImageBackground_154_11}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8821/ce1c/2edbe4429b85e487661d914da849c1ca"
          }}
          style={styles.ImageBackground_187_3}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  ImageBackground_19_26: {
    width: wp("37.22222222222222%"),
    minWidth: wp("37.22222222222222%"),
    height: hp("21.09375%"),
    minHeight: hp("21.09375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%"),
    top: hp("2.03125%"),
    resizeMode: "cover"
  },
  ImageBackground_23_36: {
    width: wp("0.5747138129340278%"),
    height: hp("0.3125%"),
    top: hp("59.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.27777777777777%")
  },
  ImageBackground_23_40: {
    width: wp("0.5747095743815104%"),
    height: hp("0.3125%"),
    top: hp("61.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.27777777777777%")
  },
  ImageBackground_23_41: {
    width: wp("0.28735266791449654%"),
    height: hp("0.15625%"),
    top: hp("62.96874999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  ImageBackground_23_43: {
    width: wp("0.28736114501953125%"),
    height: hp("0.15625%"),
    top: hp("63.59375000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  ImageBackground_23_44: {
    width: wp("0.2873569064670139%"),
    height: hp("0.15625%"),
    top: hp("62.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  View_199_17: {
    width: wp("41.388888888888886%"),
    minWidth: wp("41.388888888888886%"),
    height: hp("37.03125%"),
    minHeight: hp("37.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("27.500000000000004%")
  },
  TouchableOpacity_35_51: {
    width: wp("41.388888888888886%"),
    minWidth: wp("41.388888888888886%"),
    height: hp("37.03125%"),
    minHeight: hp("37.03125%"),
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
  ImageBackground_35_236: {
    width: wp("21.839078267415367%"),
    height: hp("10.975030660629272%"),
    top: hp("6.562501192092892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.611111111111112%")
  },
  ImageBackground_113_7: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%"),
    top: hp("26.406249999999996%"),
    resizeMode: "cover"
  },
  View_199_18: {
    width: wp("41.388888888888886%"),
    minWidth: wp("41.388888888888886%"),
    height: hp("37.03125%"),
    minHeight: hp("37.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.5%"),
    top: hp("56.25%")
  },
  TouchableOpacity_35_52: {
    width: wp("41.388888888888886%"),
    minWidth: wp("41.388888888888886%"),
    height: hp("37.03125%"),
    minHeight: hp("37.03125%"),
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
  ImageBackground_27_8: {
    width: wp("1.9562255011664496%"),
    height: hp("1.0499954223632812%"),
    top: hp("15.523881912231445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%")
  },
  ImageBackground_149_110: {
    width: wp("30.277777777777775%"),
    height: hp("15.78125%"),
    top: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.999999999999993%")
  },
  ImageBackground_185_5: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666664%"),
    top: hp("26.71875%"),
    resizeMode: "cover"
  },
  View_199_16: {
    width: wp("41.388888888888886%"),
    minWidth: wp("41.388888888888886%"),
    height: hp("26.875%"),
    minHeight: hp("26.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.5%"),
    top: hp("27.500000000000004%")
  },
  TouchableOpacity_35_42: {
    width: wp("41.388888888888886%"),
    minWidth: wp("41.388888888888886%"),
    height: hp("26.875%"),
    minHeight: hp("26.875%"),
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
  ImageBackground_35_219: {
    width: wp("23.275867038302952%"),
    height: hp("11.875%"),
    top: hp("3.4374999999999964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.05555555555555%")
  },
  ImageBackground_187_2: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666664%"),
    top: hp("19.218749999999996%"),
    resizeMode: "cover"
  },
  View_199_19: {
    width: wp("41.388888888888886%"),
    minWidth: wp("41.388888888888886%"),
    height: hp("26.875%"),
    minHeight: hp("26.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("66.40625%")
  },
  TouchableOpacity_35_53: {
    width: wp("41.388888888888886%"),
    minWidth: wp("41.388888888888886%"),
    height: hp("26.875%"),
    minHeight: hp("26.875%"),
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
  View_154_4: {
    width: wp("25.555555555555554%"),
    minWidth: wp("25.555555555555554%"),
    height: hp("13.593749999999998%"),
    minHeight: hp("13.593749999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444446%"),
    top: hp("2.96875%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_154_5: {
    width: wp("21.600301530626083%"),
    height: hp("12.753411531448364%"),
    top: hp("0.34685373306274414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9904073079427071%")
  },
  ImageBackground_154_6: {
    width: wp("16.22671127319336%"),
    height: hp("11.212719678878784%"),
    top: hp("0.0020003318786621094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.873942057291668%")
  },
  ImageBackground_154_8: {
    width: wp("15.080697801378037%"),
    height: hp("9.090906381607056%"),
    top: hp("0.9380388259887695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2170783148871536%")
  },
  ImageBackground_154_9: {
    width: wp("21.600301530626083%"),
    height: hp("12.753411531448364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_154_11: {
    width: wp("10.84345817565918%"),
    height: hp("9.417158365249634%"),
    top: hp("1.250016689300537%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.563167995876736%")
  },
  ImageBackground_187_3: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%"),
    top: hp("18.28125%"),
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
