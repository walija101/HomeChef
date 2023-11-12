"use client";

import Lottie from "lottie-react";
import loading from "@/lottie/loading.json";
import mainCooking from "@/lottie/mainCooking.json";

type Props = {
  givenWidth: string;
  givenHeight: string;
  onComplete?: (() => void) | null;
  shouldLoop: boolean;
  animationName: string;
};

export default function LottieComponent({
  givenWidth,
  givenHeight,
  onComplete,
  shouldLoop,
  animationName,
}: Props) {
  const data = animationName === "loading" ? loading : mainCooking;

  return (
    <Lottie
      onComplete={onComplete}
      style={{ width: givenWidth, height: givenHeight }}
      animationData={data}
      loop={shouldLoop}
    />
  );
}
