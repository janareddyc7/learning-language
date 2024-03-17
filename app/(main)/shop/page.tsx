import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Promo } from "@/components/promo";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserProgress, getUserSubscription } from "@/db/queries";

import { Items } from "./items";
import { Quests } from "@/components/quests";

const ShopPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [
    userProgress,
    userSubscription,
  ] = await Promise.all([
    userProgressData,
    userSubscriptionData
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return ( 
    <div className="flex flex-row-reverse gap-[48px] px-6">


      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && (
          <Promo />
        )}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          
        <div className="min-h-56 max-w-6xl relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-lg overflow-hidden mt-8 p-12"> {/* Increased padding and width */}
  <div className="flex-grow flex items-center justify-center text-center p-4"> {/* Adjusted padding */}
    <p className="text-white font-bold">Start a 2-week free trial to enjoy exclusive Super benefits</p>
  </div>
  <div className="absolute top-4 left-8"> {/* Adjusted positioning */}
    <Image
      src="/h0.svg"
      alt="Owl"
      height={90  } // Adjust the size as needed
      width={90} // Adjust the size as needed
      className="object-cover rounded-r-lg"
      style={{ filter: 'brightness(1.2) saturate(0.8)' }}
    />
  </div>
  <div className="absolute top-4 right-8"> {/* Adjusted positioning */}
    <Image
      src="/h00.svg"
      alt="Super Icon"
      height={100} // Adjust the size as needed
      width={100} // Adjust the size as needed
      className="object-cover rounded-r-lg"
      style={{ filter: 'brightness(1.2) saturate(0.8)' }}
    />
  </div>
  <Button
    variant="super" 
    className="w-full" 
    size="lg" 
  >
    Start my free 14 days
  </Button>
</div>

          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            
          </h1>
         
          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};
 
export default ShopPage;
