import * as React from "react";
import products from "./Products.js";
import styles from "./Product.module.scss";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function ProductList(props) {
  const [productList, setProductList] = useState(products);

  const addToCarts = (product) => {
    var pr = [...productList];
    const exist = pr.find((x) => x.title == product.title);
    if (exist) {
      exist.amount++;
      setProductList(pr);
      console.log(pr);
    } else {
      setProductList([...pr, { ...product, amount: 1 }]);
    }
    props.setCartTotal(props.cartTotal + product.price);
  };

  const removeFromCards = (product) => {
    var pr = [...productList];
    const exist = pr.find((x) => x.title == product.title);
    if (exist && exist.amount > 0) {
      exist.amount--;
      setProductList(pr);
    } else {
      setProductList([...pr, { ...product, amount: 0 }]);
    }
    props.setCartTotal(props.cartTotal - product.price);
  };

  return (
    <div className={styles.product}>
      {productList.map((item) => {
        return (
          <div key={item.title} className={styles.product__list}>
            <img className={styles.product__list__image} src={item.src}></img>
            <div className={styles.product__list__item}>
              <div style={{ fontWeight: "600" }}>{item.title}</div>
              <div style={{ color: "#0A99C6" }}>{item.price.toFixed(2)} TL</div>
              <div>
                <div className={styles.product__buttons}>
                  {item.amount > 0 && (
                    <>
                      <RemoveCircleIcon
                        style={{ width: "30px", height: "30px" }}
                        onClick={() => {
                          removeFromCards(item);
                        }}
                      >
                        -
                      </RemoveCircleIcon>
                      <div className={styles.product__amount}>
                        {item.amount}
                      </div>
                    </>
                  )}

                  <AddCircleIcon
                    style={{ color: "#0A99C6", width: "30px", height: "30px" }}
                    onClick={() => {
                      addToCarts(item);
                    }}
                  >
                    +
                  </AddCircleIcon>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
