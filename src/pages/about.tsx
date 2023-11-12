import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={styles.outer}>
      <h1>About Us</h1>
      <p>
        HomeChef is a service that allows regular people to order homemade food
        from other regular people. Cooking by yourself is expensive. Eating out
        is not only expensive but unhealthy. HomeChef gets rid of any
        compromise. Chefs are told serving sizes beforehand to ensure nothing
        goes to waste. Whether you miss the cooking of home, want to make a
        positive environmental impact, or save some money, HomeChef has you
        covered.
      </p>
    </div>
  );
}
