import React from "react";
import css from "./services.module.css";
import Text from "components/Text";
import Card from "components/Card";
import CardList from "./dataservice";

const Services = () => {
  return (
    <div className={css["container"]} id="services">
      <div className={css["title"]}>
        <Text
          size="extra-large"
          value="Services "
          family="poppins"
          color="black"
        />
      </div>
      <Text
        size="normal"
        value="This is my expertise and services I provide for my clients."
        family="poppins"
        color="grey"
      />
      <div className={css["card-container"]}>
        {CardList.map((item, index) => {
          return (
            <Card key={"card=" + index} variant="secondary" children>
              <Text
                key={"title-" + index}
                value={item.title}
                size="large"
                color="dark-blue"
                family="poppins"
              />
              <br />
              <Text
                key={"text-" + index}
                value={item.text}
                size="normal"
                family="poppins"
                color="grey"
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
