import styles from "@/styles/Order.module.scss";
import { ClassNames } from "@emotion/react";

export default function Order() {
  return (
    <div className={styles.container}>
        <h1>ORDER CONFIRMATION</h1>
        <h2>Meal name: <span>Joe's Casserole</span></h2>
        <h2>Price: <span>$20.00</span></h2>
        <h2>Description: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla id, a culpa in repellendus voluptas aliquid.</span></h2>
        <div className={styles.button}>
          <button>Confirm Order</button>
        </div>

        <div className={styles.orderOptions}>
          <form>
            
          </form>
        </div>
    </div>
  )
}
