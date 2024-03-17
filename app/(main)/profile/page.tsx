
import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries";

import { redirect } from "next/navigation";

import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { lessons, units as unitsSchema } from "@/db/schema";
import { 
  getCourseProgress, 
  getLessonPercentage, 
  getUnits, 
} from "@/db/queries";






const Profile = async () => {

    const signupDate = new Date('2024-03-01');

    // Get current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    // Get signup month and year
    const signupMonth = signupDate.getMonth();
    const signupYear = signupDate.getFullYear();
  
    let message = '';
  
    if (currentYear === signupYear) {
      if (currentMonth === signupMonth) {
        message = 'Joined this month';
      } else {
        message = 'Joined earlier this year';
      }
    } else {
      message = 'Joined in a previous year';
    }

    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();
    const leaderboardData = getTopTenUsers();
  
    const [
      userProgress,
      userSubscription,
      leaderboard,
    ] = await Promise.all([
      userProgressData,
      userSubscriptionData,
      leaderboardData,
    ]);
  
    if (!userProgress || !userProgress.activeCourse) {
      redirect("/courses");
    }
  
    const isPro = !!userSubscription?.isActive;

 

  return (
<div className="relative">
<div className="min-h-36 bg-gray-900 flex items-center justify-center max-w-2xl rounded-lg overflow-hidden border border-gray-600">
    <img
        src="hi23.png"
        alt="Your Image"
        className="h-full w-full object-cover rounded-lg"
        style={{ filter: 'brightness(1.2) saturate(0.8)' }} // Adjust brightness filter value
    />
</div>




    <p className="mt-6 ml-4 font-bold text-xl">{userProgress.userName}</p>
    <p className="mt-1 ml-4 text-lg text-gray-800">{message}</p>
    {message === 'Joined earlier this year' && (
        <div className="ml-4 mt-1 flex items-center space-x-4">
            <span className="text-lg text-blue-500 cursor-pointer">0 followers</span>
            <span className="text-lg text-blue-500 cursor-pointer">0 following</span>
        </div>
    )}
    <div className=" border-gray-400 "> {/* Divider here */}</div>
    <div className="absolute top-0 right-0">
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
        </div>
    </div>

  )

};

export default Profile;
