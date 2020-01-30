import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={styles.container}>
      {title && <h1 className={styles.sectionTitle}>{title}</h1>}
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: "",
  children: {}
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object
};
export default Section;
