import React from "react";
import styles from "./Footer.module.scss";
import hamburgerIcon from "../../icons/hamburger-icon.svg";
import cartIcon from "../../icons/cart.svg";
import BottomSheet from "../bottomsheet/BottomSheet";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div
          onClick={() => {
            props.setOpen(true);
          }}
          className={styles.footer__content__menu}
        >
          {props.open == true ? (
            <>
              <img src={hamburgerIcon}></img>{" "}
              <BottomSheet open={props.open}> </BottomSheet>
            </>
          ) : (
            <img src={hamburgerIcon}></img>
          )}
        </div>

        <div className={styles.footer__content__cart}>
          <div className={styles.footer__content__cart__content}>
            <img src={cartIcon}></img>
            <div>Sepetim</div>
          </div>

          <div className={styles.footer__content__cart__price}>
            <div className={styles.footer__content__cart__total}>Toplam</div>
            <div>{props.cartTotal} TL</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
