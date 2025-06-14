import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Link, router } from "expo-router";
import Svg, { Circle } from "react-native-svg";
import text from "@/styles/text";
import link from "@/styles/link";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  const handleGetStarted = () => {
    router.push("/onboarding");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
      <Svg height="50%" width="50%" viewBox="0 0 100 100" style={styles.circle}>
        <Circle
          cx="25"
          cy="-15"
          r="50"
          stroke="#e4e4e4"
          strokeWidth="0.5"
          fill="#fff"
        />
      </Svg>

      <Svg height="100%" width="100%" viewBox="0 0 100 100" style={styles.circle}>
        <Circle
          cx="100"
          cy="35"
          r="20"
          stroke="#e4e4e4"
          strokeWidth="0.5"
          fill="#fff"
        />
      </Svg>

      <View style={styles.container_images}>
        <View style={styles.column}>
          <Image
            source={require("@/assets/images/Miguel-Label-mens-fashion-blogger-819x1024.jpg")}
            style={{
              width: "100%",
              height: 450,
              borderRadius: 40,
            }}
          />
        </View>

        <View style={styles.column}>
          <Image
            source={require("@/assets/images/Men_s-Summer-Fashion-613288.webp")}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 30,
            }}
          />
          <Image
            source={require("@/assets/images/shutterstock_1199713018-819x1024.jpg")}
            style={{
              width: "100%",
              height: 150,
              borderRadius: 30,
            }}
          />
        </View>
      </View>

      <Text style={text.base_text}>
        The <Text style={text.brown_text}>Fashion App</Text> That Make You Look Your Best
      </Text>

      <Text style={text.sub_text}>
        Fashion advice that fits your taste and lifestyle perfectly
      </Text>

      <CustomButton 
        content="Let's Get Started" 
        onPress={handleGetStarted} 
        style={[link.btn_link, link.btn_link_welcome]} 
      />

      <View style={styles.signInLinkContainer}>
        <Text style={styles.text_link}>Already have an account?</Text>
        <Link href="/login" style={styles.link}>
          Sign In
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 40,
  },
  container_images: {
    flexDirection: "row",
    width: "80%",
    height: 480,
    marginHorizontal: "auto",
    gap: 15,
    marginTop: 100,
  },
  column: {
    flex: 1,
    gap: 10,
  },
  circle: {
    position: "absolute",
  },
  text_link: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "300",
  },
  link: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "500",
    color: "#704F38",
    textDecorationLine: "underline",
    textDecorationColor: "#704F38",
  },
  signInLinkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
  },
});
