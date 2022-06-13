import { BottomSheet } from "react-spring-bottom-sheet";
import styles from "./Bottom.module.scss";
import home from "../../icons/Home.svg";
import contact from "../../icons/Contact.svg";
import buy from "../../icons/buy.svg";
import arrow from "../../icons/arrow.svg";

import "react-spring-bottom-sheet/dist/style.css";
import * as React from "react";
import { style } from "@mui/system";

export default function MyBottomSheet(props) {
  return (
    <>
      <BottomSheet open={props.open}>
        <div className={styles.bottom}>
          <div className={styles.bottom__content}>
            <div className={styles.bottom__content__button}>
              <button>
                <div className={styles.bottom__content__button__group}>
                  <img style={{ paddingRight: "21px" }} src={home}></img>
                  Adreslerim
                </div>
                <img style={{ paddingRight: "21px" }} src={arrow}></img>
              </button>
            </div>
            <div className={styles.bottom__content__button}>
              <button>
                <div className={styles.bottom__content__button__group}>
                  <img style={{ paddingRight: "21px" }} src={buy}></img>
                  Önceki Siparişlerim
                </div>
                <img style={{ paddingRight: "21px" }} src={arrow}></img>
              </button>
            </div>
            <div className={styles.bottom__content__button}>
              <button>
                <div className={styles.bottom__content__button__group}>
                  <img style={{ paddingRight: "21px" }} src={contact}></img>
                  İletişim
                </div>
                <img style={{ paddingRight: "21px" }} src={arrow}></img>
              </button>
            </div>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}
