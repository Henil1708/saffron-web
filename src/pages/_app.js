// pages/_app.jsx
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "dizilus/styles/globals.css";

import AppSpinner from "dizilus/components/shared/AppSpinner";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // true while route is changing
  const [loading, setLoading] = useState(false);
  // true once the Lottie animation has fired its complete event
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      setAnimationDone(false); // reset for the next navigation
    };
    const handleStop = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router.events]);

  // callback from AppSpinner when Lottie is done
  const onAnimationComplete = (status) => setAnimationDone(status);

  // show spinner if still loading OR animation hasn’t finished
  const showSpinner = loading;

  return (
    <>
      {showSpinner && <AppSpinner onAnimationComplete={onAnimationComplete} />}
      <Component {...pageProps} />
    </>
  );
}
