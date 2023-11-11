"use client"

import Lottie from "lottie-react";
import loading from '@/lottie/loading.json';

type Props = {
    givenWidth: string,
    givenHeight: string,
    onComplete?: (() => void) | null,
    shouldLoop: boolean,
    animationName: string
}

export default function LottieComponent({ givenWidth, givenHeight, onComplete, shouldLoop, animationName }: Props) {
    const data = loading

    return (
        <Lottie onComplete={onComplete} style={{ width: givenWidth, height: givenHeight }} animationData={data} loop={shouldLoop} />
    )
}
