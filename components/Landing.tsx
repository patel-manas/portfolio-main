import React from "react";
import Header from "./Header";
import { commonClasses } from "@/lib/utils";

type Props = {};

const Landing = (props: Props) => {
  return (
    <section className={`${commonClasses.rootSection}`}>
      <Header />
    </section>
  );
};

export default Landing;
