import { useState, useEffect } from "react";

interface QuizTimerProps {
  durationInSeconds: number;
  onTimeElapsed?: () => void;
}

interface QuizTimer {
  timer: number;
  formattedTime: string;
}

const useQuizTimer = ({
  durationInSeconds,
  onTimeElapsed,
}: QuizTimerProps): QuizTimer => {
  const [timer, setTimer] = useState(durationInSeconds);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          // Ensure that the timer is not set to a negative value
          const newTimer = prevTimer > 0 ? prevTimer - 1 : 0;

          // Trigger the action when the timer reaches zero
          if (newTimer === 0 && onTimeElapsed != null) {
            onTimeElapsed();
          }

          return newTimer;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, onTimeElapsed]);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return {
    timer,
    formattedTime: formatTime(timer),
  };
};

export default useQuizTimer;
