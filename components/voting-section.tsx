"use client";

import { useState, useEffect, memo } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useItinerary } from "@/lib/itinerary-context";

interface VotingSectionProps {
  activityId: string;
}

export const VotingSection = memo(function VotingSection({ activityId }: VotingSectionProps) {
  const { tripId } = useItinerary();
  const [votes, setVotes] = useState<Record<string, "up" | "down" | null>>({});
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  // Get trip-specific family members
  const getFamilyMembers = () => {
    if (tripId === 'charleston25') {
      return ["Lady Jae", "Nikki", "Shawn"];
    }
    // Default for oki25
    return ["Kyle", "Yury", "Andrew", "Leo", "Nikki", "Shawn", "Lady Jae"];
  };

  const familyMembers = getFamilyMembers();

  // Load votes from localStorage
  useEffect(() => {
    const savedVotes = localStorage.getItem(`votes-${activityId}`);
    if (savedVotes) {
      setVotes(JSON.parse(savedVotes));
    }
  }, [activityId]);

  const handleVote = (member: string, vote: "up" | "down") => {
    const newVotes = {
      ...votes,
      [member]: votes[member] === vote ? null : vote
    };
    setVotes(newVotes);
    localStorage.setItem(`votes-${activityId}`, JSON.stringify(newVotes));
  };

  const upVotes = Object.values(votes).filter(v => v === "up").length;
  const downVotes = Object.values(votes).filter(v => v === "down").length;

  // Get trip-specific styling
  const getThemeConfig = () => {
    if (tripId === 'charleston25') {
      return {
        bgGradient: "bg-gradient-to-r from-violet-50/50 to-rose-50/50 dark:from-violet-950/30 dark:to-rose-950/30",
        activeBg: "bg-white dark:bg-violet-900/20",
        hoverBg: "hover:bg-gray-50 dark:hover:bg-violet-900/30"
      };
    }
    // Default for oki25
    return {
      bgGradient: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-pink-950/30 dark:to-purple-950/30",
      activeBg: "bg-white dark:bg-pink-900/20",
      hoverBg: "hover:bg-gray-50 dark:hover:bg-pink-900/30"
    };
  };

  const theme = getThemeConfig();

  return (
    <div className={`mt-4 p-4 ${theme.bgGradient} rounded-xl`}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Who's interested?</p>
        <div className="flex items-center gap-3 text-sm">
          <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <ThumbsUp className="w-4 h-4" />
            {upVotes}
          </span>
          <span className="flex items-center gap-1 text-red-600 dark:text-red-400">
            <ThumbsDown className="w-4 h-4" />
            {downVotes}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {!selectedMember ? (
          <div className="flex flex-wrap gap-2">
            {familyMembers.map((member) => (
              <button
                key={member}
                onClick={() => setSelectedMember(member)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                  votes[member] === "up" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 ring-2 ring-green-300 dark:ring-green-700" :
                  votes[member] === "down" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 ring-2 ring-red-300 dark:ring-red-700" :
                  `${theme.activeBg} text-gray-600 dark:text-gray-300 ${theme.hoverBg}`
                )}
              >
                {member}
                {votes[member] && (
                  <span className="ml-1">
                    {votes[member] === "up" ? "👍" : "👎"}
                  </span>
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className={`flex items-center justify-between ${theme.activeBg} rounded-lg p-3`}>
            <span className="font-medium text-gray-700 dark:text-gray-200">{selectedMember}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  handleVote(selectedMember, "up");
                  setSelectedMember(null);
                }}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  votes[selectedMember] === "up"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                    : "hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400"
                )}
              >
                <ThumbsUp className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  handleVote(selectedMember, "down");
                  setSelectedMember(null);
                }}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  votes[selectedMember] === "down"
                    ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                    : "hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400"
                )}
              >
                <ThumbsDown className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedMember(null)}
                className="ml-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
