import styles from "@/styles/Order.module.scss";
import { useState } from "react";
import { ClassNames } from "@emotion/react";

export default function Order() {
  const [mode, setMode] = useState({
    type: "pickup",
    address: ""
  });


  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target
    setMode(prev => {
        return{
            ...prev,
            [name]: value
        }
    })
}

  return (
    <div className={styles.container}>
        <h1>ORDER CONFIRMATION</h1>
        <h2>Meal name: <span>Joe's Casserole</span></h2>
        <h2>Price: <span>$20.00</span></h2>
        <h2>Description: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla id, a culpa in repellendus voluptas aliquid.</span></h2>
        <h2>Ingredients:</h2>
        <div className={styles.ingredients}>
          <ul>
            <li>Cassava</li>
            <li>Chicken</li>
            <li>Pasta</li>
          </ul>
        </div>
        <div className={styles.orderOptions}>
          <form>
          <legend>How do you plan to get your yummy food?</legend>
                    <input 
                        type="radio"
                        id="delivery"
                        name="type"
                        value="delivery"
                        checked={mode.type === "delivery"}
                        onChange={handleChange}
                    />
                    <label htmlFor="customer">Delivery (extra charge)</label>
                    <br />

                    <div className= {styles.address}>
                      {mode.type==="delivery" ? (
                        <input
                          type="text"
                          placeholder="Address"
                          onChange={handleChange}
                          name="address"
                          value={mode.address}
                          />
                      ) : null}
                    </div>

                    <input 
                        type="radio"
                        id="pickup"
                        name="type"
                        value="pickup"
                        checked={mode.type === "pickup"}
                        onChange={handleChange}
                    />
                    <label htmlFor="chef">Pickup</label>

                    {mode.type === "pickup" ? (<><div>You must pick your meal up at Pizza Road by next Monday!</div></>) : 
                     (<><div>Your order should be delivered by next Monday!</div></>) }
                    <br />
          </form>

          <div className={styles.button}>
            <button>Confirm Order</button>
          </div>
        </div>
    </div>
  )
}
