"use client";

import { toast } from "sonner";
import Image from "next/image";
import { useState, useTransition } from "react";
import db from "@/db/drizzle";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { challengeProgress, challenges, userProgress } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { POINTS_TO_REFILL } from "@/constants";
import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  const [pending, startTransition] = useTransition();

  const [pointss, setPoints] = useState(210); // Assuming the user initially has 210 points

  const onUpgradedd = () => {
    if (points >= 50) {
      // Deduct 200 points for the Streak Freeze
      const newPoints = points - 50;
      
      // Update the points state
      setPoints(newPoints);

      // Show success message after points deduction
      toast.success("double or nothing equipped successfully.");
    } else {
      toast.error("Insufficient points.");
    }
  };

  const onUpgraded = () => {
    if (points >= 200) {
      // Deduct 200 points for the Streak Freeze
      const newPoints = points - 200;
      
      // Update the points state
      setPoints(newPoints);

      // Show success message after points deduction
      toast.success("Streak Freeze equipped successfully.");
    } else {
      toast.error("Insufficient points.");
    }
  };

  
  const duoplushie = () => {
    if (points >= 200) {
      // Deduct 200 points for the Streak Freeze
      const newPoints = points - 200;
      
      // Update the points state
      setPoints(newPoints);

      // Show success message after points deduction
      toast.success("DuoPlushie equipped successfully.");
    } else {
      toast.error("Insufficient points.");
    }
  };


  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
      return;
    }

    startTransition(() => {
      refillHearts()
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <ul className="w-full">



      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image 
          src="/hi20.svg"
          alt="Heart"
          height={60}
          width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill hearts
          </p>
          <p className=" font-bold">
          Get full hearts so you can worry less about making mistakes in a lesson
          </p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={
            pending
            || hearts === 5 
            || points < POINTS_TO_REFILL
          }
        >
          {hearts === 5
            ? "full"
            : (
              <div className="flex items-center">
                <Image
                  src="/points.svg"
                  alt="Points"
                  height={20}
                  width={20}
                />
                <p>
                  {POINTS_TO_REFILL}
                </p>
              </div>
            )
          }
        </Button>
      </div>
      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
          src="/hi21.svg"
          alt="Unlimited"
          height={60}
          width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Unlimited hearts
          </p>
          <p className=" font-bold">
          Never run out of hearts with Super!
          </p>
        </div>
        <Button
          onClick={onUpgrade}
          disabled={pending}
        >
          {hasActiveSubscription ? "settings" : "upgrade"}
        </Button>
      </div>

      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
          src="/hi22.svg"
          alt="Unlimited"
          height={60}
          width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl  font-bold">
          Streak Freeze
          </p>
          <p className=" font-bold">
          Streak Freeze allows your streak to remain in place for one full day of inactivity.
          </p>
        </div>
        <Button
          onClick={onUpgraded}
          disabled={pending}
        >
          {hasActiveSubscription ? "settings" : "Get for 200 Gems"}
        </Button>
      </div>

      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
          src="/hi0.1.png"
          alt="Unlimited"
          height={60}
          width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl  font-bold">
          Double or Nothing
          </p>
          <p className=" font-bold">
          Double your 50 gem wager by maintaining a 7 day streak.


          </p>
        </div>
        <Button
          onClick={onUpgradedd}
          disabled={pending}
        >
          {hasActiveSubscription ? "settings" : "Get for 50 Gems"}
        </Button>
      </div>

      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
          src="/hi0.2.png"
          alt="Unlimited"
          height={60}
          width={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl  font-bold">
          Duo Plushie
          </p>
          <p className=" font-bold">
          Never miss a lesson with an adorable Duo Plushie as your constant reminder!


          </p>
        </div>
        <Button
          onClick={onUpgrade}
          disabled={pending}
        >
          {hasActiveSubscription ? "settings" : "$29.95"}
        </Button>
      </div>
    </ul>
  );
};
function updatePoints(newPoints: number) {
  throw new Error("Function not implemented.");
}

