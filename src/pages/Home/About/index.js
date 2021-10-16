import React from "react";
import css from "./about.module.css";
import Text from "components/Text";

const About = () => {
  return (
    <div id="about" className={css["container"]}>
      <div className={css["title"]}>
        <Text
          size="extra-large"
          value="About Me"
          family="poppins"
          color="black"
        />
      </div>
      <Text
        size="normal"
        value="Freshly graduated from the Department of Information Engineering, State Islamic University of Malang. I have an interest in many exciting things such as art, sports, food, movies, and I love to play with my big chatty black cat. I create faceless
              human illustrations, illustrations for website assets, flat illustrations, icons, and anything else that can be done with a pen tablet. I love writing code and and enjoy working with code, especially website development. Being an only child
              made me always interested in meeting new people, having new conversations about interesting things, and making friends."
        family="poppins"
        color="grey"
      />
      <Text
        size="normal"
        value="I have been fortunate to do what I love."
        family="poppins"
        color="grey"
      />
    </div>
  );
};

export default About;
