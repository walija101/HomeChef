import styles from '@/styles/Meals.module.scss';

function Meals() {
  return (
    <center className={styles.mealsContainer}>
      <h1>Explore meals from chefs near you</h1>
      <div className={styles.mealsCards}>

      </div>
    </center>
  )
}

export default Meals