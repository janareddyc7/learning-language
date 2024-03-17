import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { Progress } from "@/components/ui/progress";
import { Promo } from "@/components/promo";
import { quests } from "@/constants";

const QuestsPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [
    userProgress,
    userSubscription,
  ] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return ( 
    <div className="flex flex-row-reverse gap-[48px] px-6 relative">
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
    </StickyWrapper>

    <div className="absolute top-0 left-0 w-full h-full  flex items-center justify-center">
    

    </div>

    <FeedWrapper>
        <div className="w-full flex flex-col items-center">
        <div className="min-h-48 max-w-3xl relative flex items-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden mt-8">
    <div className="flex-grow flex items-center justify-start text-left p-6">
        <p className="text-white text-xl">
            <span className="text-white font-bold text-2xl">Welcome Back!</span><br />
            Complete quests to earn rewards!
        </p>
    </div>
    <Image
        src="/quests-2.svg"
        alt="Quests"
        height={200}
        width={200}
        className="object-cover rounded-r-lg"
        style={{ filter: 'brightness(1.2) saturate(0.8)' }} // Adjust brightness filter value
    />
</div>






<h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                Daily Quests
            </h1>
            <p className="text-muted-foreground text-center text-lg mb-6">
               
            </p>
            <ul className="w-full">
                {quests.map((quest) => {
                    const progress = (userProgress.points / quest.value) * 100;

                    return (
                        <div
                            className="flex items-center w-full p-4 gap-x-4 border-t-2"
                            key={quest.title}
                        >
                            <Image
                                src="/hi1.svg"
                                alt="Points"
                                width={60}
                                height={60}
                            />
                            <div className="flex flex-col gap-y-2 w-full">
                                <p className="text-neutral-700 text-xl font-bold">
                                    {quest.title}
                                </p>
                                <Progress value={progress} className="h-3" />
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    </FeedWrapper>
</div>


  );
};
 
export default QuestsPage;
