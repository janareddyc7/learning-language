import Link from "next/link";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

import { courses } from "@/db/schema";
import { Button } from "@/components/ui/button";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({ 
  activeCourse, 
  points, 
  hearts, 
  hasActiveSubscription
}: Props) => {
  return (
<div className="flex items-center justify-between gap-x-2 w-full">
  <Link href="/courses">
    <Button variant="ghost">
      <Image
        src={activeCourse.imageSrc}
        alt={activeCourse.title}
        className="rounded-md border"
        width={32}
        height={32}
      />
    </Button>
  </Link>
  <div className="relative group">
  <Link href="/shop">
    <Button variant="ghost" className="text-blue-500 flex items-center">
      <Image src="/hi2.svg" height={40} width={40} alt="Points" className="mr-4" />
      <span className="text-lg">{points}</span> 
    </Button>
  </Link>
  <div className="absolute top-full left-1/2 transform -translate-x-1/2 p-4 bg-white text-gray-800 text-lg rounded-md hidden group-hover:block shadow-lg w-80">
    <div className="flex items-center justify-center mb-4">
      <Image src="/hi8.svg" alt="Image" height={100} width={100} className="mr-4" />
  
      <span>You have {points} Gems</span>
    </div>

  </div>
</div>



<div className="relative group">
  <Link href="/shop">
    <Button variant="ghost" className="text-rose-500">
      <Image src="/heart3.svg" height={27} width={27} alt="Hearts" className="mr-2" />
      {hasActiveSubscription 
        ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> 
        : hearts
      }
    </Button>
  </Link>
  <div className="absolute top-full left-1/2 transform -translate-x-1/2 p-4 bg-white text-gray-800 text-lg rounded-md hidden group-hover:block shadow-lg w-80">
    <div className="flex flex-col items-center mb-4">
      <span className="font-bold ">Hearts</span>
      

    </div>
    <div className="flex flex-wrap justify-center">
      {[...Array(hearts)].map((_, index) => (
        <Image key={index} src="/heart3.svg" height={27} width={27} alt="Heart" className="mr-2" />
      ))}
    </div>

    <div className="flex flex-col items-center mb-4">
    <span className=" font-bold ">
        {hearts === 5 ? "You have full hearts" : `You have ${hearts} hearts`}
      </span>
      <span className=" font-bold text-sm mt-1">
        keep on learning
      </span>
    </div>
  </div>
</div>



</div>



  );
};
