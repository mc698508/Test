import React, { Component } from "react";
import Styles from "./Styles";


export default class Header extends Component {
  render() {
    return (
      <Styles>
        <Image style={StyleSheet.headerBackground}>
          <View style={styles.header}>
            <View style={styleMedia.es.profilepicWrap}>
              <Image style={styles.profilepic} />
            </View>
            <Text style={styles.name}>Dr. Grevera</Text>
            <Text style={styles.pos}> - SE Professor - </Text>
          </View>
        </Image>
      </Styles>
    );
  }
}
