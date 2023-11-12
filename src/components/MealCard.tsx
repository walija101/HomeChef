import { MealType } from "@/lib/models/meal/meal.types"
import styles from '@/styles/MealCard.module.scss'

type MealCardProps = {
    meal: MealType,
    onClick: (arg: any) => void
}
export default function MealCard({ meal, onClick }: MealCardProps) {
    return (
        <div className={styles.card} onClick={() => onClick(meal)}>
            <div className={styles.pictureContainer}>
                <img src={`./images/${meal.image}.jpg`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.nameSection}>
                <h1 className={styles.foodName}>{meal.name}</h1>
                <h2 className={styles.price}>{`$${meal.price}`}</h2>
            </div>
            <div className={styles.mealDescriptionSection}>
                <p className={styles.mealDescription}>
                    {meal.description}
                </p>
            </div>
            <div className={styles.ingredientsSection}>
                <p>
                    {`Ingredients include: ${meal.ingredients.join(', ')}`}
                </p>
            </div>
            <div className={styles.chefSection}>
                <div className={styles.chefIcon}>
                    <img src={`./images/${meal.chefPicture}.jpg`} />
                </div>
                <div className={styles.chefInfoSection}>
                    <h3 className={styles.chefName}>{meal.chef.toUpperCase()}</h3>
                    <p>Top Rated Cook</p>
                </div>
            </div>
        </div>
    )
}
