import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default () => (
  <ScrollView>
    <View>
      <View style={styles.bgProfile}>
        <Image
          style={styles.cover}
          source={{
            uri:
              "http://newscomunicacao.com.br/wp-content/uploads/2016/08/Paulo-Leal-Murilo-Paraiso-Gerson-Carneiro-Le--o-o-ministro-Fernando-Coelho-Filho-Alexandre-Lima-e-outros-representantes-do-setor-canaviero.jpg"
          }}
        />

        <Image
          style={styles.imgProfile}
          source={{
            uri:
              "data:image/jpeg;base64,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"
          }}
        />
      </View>

      <View style={styles.contentInfo}>
        <Text style={styles.lblName}>Fernando Coelho Filho</Text>
        <Text>
          Fernando Bezerra de Sousa Coelho Filho é um administrador de empresas
          e político brasileiro, foi Ministro de Minas e Energia do Brasil no
          Governo Michel Temer. Foi filiado ao Partido Socialista Brasileiro.
          Wikipédia
        </Text>
      </View>

      <View style={styles.contentInfoMore}>
        <View style={styles.inlineInfo}>
          <Text>Partido/UF: DEM / PE / Titular</Text>
        </View>
        <View style={styles.inlineInfo}>
          <Icon name="phone-in-talk" size={30} />
          <Text>(61) 3215-5662</Text>
        </View>
        <View style={styles.inlineInfo}>
          <Icon name="fax" size={30} />
          <Text>3215-2662</Text>
        </View>
        <View style={styles.inlineInfo}>
          <Text>Legislaturas: 07/11 11/15 15/19</Text>
        </View>
      </View>

      <View style={[styles.contentInfo, styles.contentContact]}>
        <View>
          <Image
            style={styles.socialIcon}
            source={{
              uri:
                "https://media.pagefly.io/file/get/facebook-iconpng-1515380422836.png"
            }}
          />
        </View>
        <View>
          <Image
            style={styles.socialIcon}
            source={{
              uri:
                "http://icons.iconarchive.com/icons/sicons/basic-round-social/256/twitter-icon.png"
            }}
          />
        </View>
        <View>
          <Image
            style={styles.socialIcon}
            source={{
              uri:
                "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-256.png"
            }}
          />
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  bgProfile: {
    height: 300,
    backgroundColor: "gray",
    justifyContent: "flex-end",
    alignItems: "center"
  },

  cover: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    opacity: 0.5
  },

  imgProfile: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 20
  },

  contentInfo: {
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center"
  },

  contentInfoMore: {
    justifyContent: "flex-start",
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10
  },

  inlineInfo: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    alignItems: "flex-start",
    margin: 10
  },

  lblName: {
    color: "#333",
    fontSize: 20,
    fontWeight: "normal"
  },

  lblDescription: {
    fontSize: 18,
    color: "#555"
  },

  contentContact: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  socialIcon: {
    width: 70,
    height: 70
  }
});
