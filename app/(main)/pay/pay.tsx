import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelection = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    // Redirect to Stripe (replace with your Stripe URL)
    window.location.href = "https://stripe.com";
  };

  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/mascot.svg"
            height={40}
            width={40}
            alt="Mascot"
            className="rounded-full"
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Duolingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <div
          className={`glass p-8 rounded-lg shadow-lg text-center cursor-pointer ${
            selectedPlan === "$20" ? "bg-blue-200" : "bg-white"
          }`}
          onClick={() => handlePlanSelection("$20")}
        >
          <h2 className="text-2xl font-semibold mb-4">$20 Plan</h2>
          <ul className="text-left">
            <li className="mb-2">Feature 1</li>
            <li className="mb-2">Feature 2</li>
            <li className="mb-2">Feature 3</li>
          </ul>
        </div>
        <div
          className={`glass p-8 rounded-lg shadow-lg text-center cursor-pointer ${
            selectedPlan === "$50" ? "bg-blue-200" : "bg-white"
          }`}
          onClick={() => handlePlanSelection("$50")}
        >
          <h2 className="text-2xl font-semibold mb-4">$50 Plan</h2>
          <ul className="text-left">
            <li className="mb-2">Feature 1</li>
            <li className="mb-2">Feature 2</li>
            <li className="mb-2">Feature 3</li>
            <li className="mb-2">Feature 4</li>
            <li className="mb-2">Feature 5</li>
          </ul>
        </div>
      </div>
      <button
        className="glass bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        onClick={handlePayment}
      >
        Get Started
      </button>
    </div>
  );
};
