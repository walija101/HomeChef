import styles from "@/styles/Profile.module.scss"
import { useState } from "react";
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSession } from "next-auth/react";
import { TextField } from "@mui/material";

type mealSubmisionInfo = {
    name: string,
    description: string,
    price: number,
    ingredients: string[],
    maxOrderTime: string,
    estimatedPickupTime: string,
    image: any,
    maxOrders: number
}
function Profile() {
    const { data: session } = useSession();
    const user = session && session.user;

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

    /* const schema = yup.object({
        name: yup.string(),
        description: yup.string(),
        price: yup.number(),
        ingredients: yup.array().of(yup.string()),
        maxOrderTime: yup.string(),
        image: yup.mixed(),
        maxOrders: yup.number()
    }); */

    const formContents = useForm<mealSubmisionInfo>({
        defaultValues: {
            name: '',
            description: '',
            price: 0,
            ingredients: [],
            maxOrderTime: '',
            estimatedPickupTime: '',
            image: null,
            maxOrders: 0
        },
        /* resolver: yupResolver(schema) */
    });

    const { register, handleSubmit, formState: { errors, isSubmitting } } = formContents

    const onSubmit = async (data: mealSubmisionInfo) => {
        const { name, description, price, ingredients, maxOrderTime, image, maxOrders } = data
        try {
            
        } catch(error: any) {
            console.log(error)
        }
    }

    const type = "chef"

    return (
        <div className={styles.container}>
            <h1>Welcome back John</h1>
            <div className={styles.stats}>
                <div>Your email is: <span>{user?.email}</span></div>
                <div>Your phone number is: <span>40912910129</span></div>
            </div>

            <div className={styles.orders}>
                <h3>Your orders are: </h3>
                <ul>
                    <li>Order for Bob!</li>
                    <li>Order for Shay!</li>
                </ul>
            </div>

            {type === "chef" ? 
                <FormProvider {...formContents}>
                    <div className={styles.make}>
                        <form className={styles.profileForm} onSubmit={handleSubmit(onSubmit)}>
                            <h1>Make a meal:</h1>
                            <TextField placeholder="Meal name" label="Meal name"
                                {...register('name')}
                            />
                            <TextField placeholder="Meal description" label="Meal description"
                                {...register('description')}
                            />
                            <TextField placeholder="Meal price" label="Meal Price"
                                {...register('price')}
                            />
                            <TextField placeholder="Ingredients" label="Meal Ingredients"
                                {...register('ingredients')}
                            />
                            <TextField placeholder="Maximum Order Time" label="Maximum Order Time"
                                {...register('maxOrderTime')}
                            />
                            <TextField placeholder="Estimated Completion Time" label="Estimated Completion Time"
                                {...register('estimatedPickupTime')}
                            />
                            <TextField placeholder="Meal Image" label="Meal Image"
                                {...register('image')}
                            />
                            <TextField placeholder="Maximum Orders" label="Maximum Orders"
                                {...register('maxOrders')}
                            />
                            <div>
                                <button>Create a meal</button>
                            </div>
                        </form>
                    </div>
                </FormProvider>
                : 
                null
            }
        </div>

    )
}

export default Profile