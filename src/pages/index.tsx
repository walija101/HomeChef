import LottieComponent from "@/components/LottieComponent";
import styles from "@/styles/Home.module.scss";
import LOstyles from "@/styles/Layout.module.scss";

export default function Home() {
  return (
    <div className={LOstyles.layoutContainer}>
      <div className={LOstyles.top}>
        <div>
          <h1>Your Favourite Homecooked Meals</h1>
          <h2>
            <i>Delivered right to your door.</i>
          </h2>
        </div>
        <LottieComponent
          animationName={"mainCooking"}
          givenWidth={"40%"}
          givenHeight={"50%"}
          shouldLoop={true}
          onComplete={() => {}}
        />
      </div>
      <div className={LOstyles.middle}>
        <h2>How it works</h2>
        <div className={LOstyles.cards}>
          <div className={LOstyles.card}>
            <h1>1</h1>
            <h3>View all meals that chefs are making</h3>
          </div>
          <div className={LOstyles.card}>
            <h1>2</h1>
            <h3>Choose your chef and place your order</h3>
          </div>
          <div className={LOstyles.card}>
            <h1>3</h1>
            <h3>Our drivers are on their way with your meal</h3>
          </div>
        </div>
      </div>
      <div className={LOstyles.bottom}>
        <h2>Save Time, Save Money, Save the Environment. Become a Chef.</h2>
        <ul>
          <li>Work on your own time</li>
          <li>Get paid on the quality of your work</li>
          <li>Make someone&rsquo;s day</li>
        </ul>
      </div>
    </div>
  );
}
