import styles from "@/styles/Profile.module.scss"
import { useState } from "react";

function Profile() {
  const [meal, setMeal] = useState({
    name: "",
    description: "",
    price: "",
    ingredients: "",
    cookTime: "",
    pickUpTime: "",
    image: "",
    maxOrders: ""
  });

  const type = "chef"

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target
    setMeal(prev => {
        return{
            ...prev,
            [name]: value
        }
    })
  }

  return (
    <div className={styles.container}>
      <h1>Welcome back John</h1>
      <div className={styles.stats}>
        <div>Your email is: <span>xuzad@gmail.com</span></div>
        <div>Your phone number is: <span>40912910129</span></div>
      </div>

      <h3>Your orders are: </h3>
      <div className={styles.orders}>

      </div>

      {type==="chef" ? (<>
      <div className={styles.make}>
        <form>
          <h1>Make a meal:</h1>
          <div>
          <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={meal.name}
          />  
          </div>

        <div>
        <input
          type="text"
          placeholder="Description"
          onChange={handleChange}
          name="description"
          value={meal.description}
        /> 
        </div> 

        <div>
        <input
          type="text"
          placeholder="Price"
          onChange={handleChange}
          name="price"
          value={meal.price}
        /> 
        </div>

        <div>
        <input
          type="text"
          placeholder="Ingredients"
          onChange={handleChange}
          name="ingredients"
          value={meal.name}
        />   
         </div> 

         <div>
         <input
          type="text"
          placeholder="Cook Time"
          onChange={handleChange}
          name="cookTime"
          value={meal.cookTime}
        />  
         </div>

        <div>
        <input
          type="text"
          placeholder="Pickup Time"
          onChange={handleChange}
          name="pickUpTime"
          value={meal.pickUpTime}
        />    
        </div>

        <div>
        <input
          type="text"
          placeholder="Image"
          onChange={handleChange}
          name="img"
          value={meal.image}
        /> 
        </div>

        <div>
        <input
          type="text"
          placeholder="Max Orders"
          onChange={handleChange}
          name="maxOrders"
          value={meal.maxOrders}
        />   
        </div>

        
        <div>
        <button>Create a meal</button>
        </div>
        </form>
      </div></>) : null}
    </div>
    
  )
}

export default Profile