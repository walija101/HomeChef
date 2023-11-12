import styles from "@/styles/Profile.module.scss"

function profile() {
  const type = "chef"

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
    </div>
  )
}

export default profile