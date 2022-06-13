import React from "react";
import styles from "./Header.module.scss";
import logo from "../../logo/hamidiye.svg";
import { useState } from "react";
const Header = () => {
  const [activeTab, setActiveTab] = useState("Tümü");

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <img src={logo} alt="Hamidiye" />
        </div>
        <nav className={styles.header__content__nav}>
          <div
            style={
              activeTab === "Tümü"
                ? { opacity: "100%", textDecoration: "underline" }
                : { opacity: "40%" }
            }
            active={activeTab === "Tümü"}
            onClick={() => {
              setActiveTab("Tümü");
            }}
          >
            Tümü
          </div>
          <div
            style={
              activeTab === "Cam Şişe"
                ? { opacity: "100%", textDecoration: "underline" }
                : { opacity: "40%" }
            }
            active={activeTab === "Cam Şişe"}
            onClick={() => {
              setActiveTab("Cam Şişe");
            }}
          >
            Cam Şişe
          </div>
          <div
            style={
              activeTab === "Pet Şişe"
                ? { opacity: "100%", textDecoration: "underline" }
                : { opacity: "40%" }
            }
            active={activeTab === "Pet Şişe"}
            onClick={() => {
              setActiveTab("Pet Şişe");
            }}
          >
            Pet Şişe
          </div>
        </nav>
        <div className={styles.header__content__toggle}></div>
      </div>
    </header>
  );
};

export default Header;
