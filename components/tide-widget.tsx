"use client";

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Waves, TrendingUp, TrendingDown, Anchor } from 'lucide-react';

interface TideData {
  time: string;
  type: 'high' | 'low';
  height: string;
}

interface DayTides {
  [date: string]: TideData[];
}

// Mock tide data for Oak Island, NC (June 1-7, 2025)
const mockTideData: DayTides = {
  "2025-06-01": [
    { time: "04:23", type: "high", height: "4.8 ft" },
    { time: "10:45", type: "low", height: "0.3 ft" },
    { time: "16:51", type: "high", height: "5.2 ft" },
    { time: "23:12", type: "low", height: "0.5 ft" }
  ],
  "2025-06-02": [
    { time: "05:14", type: "high", height: "4.9 ft" },
    { time: "11:38", type: "low", height: "0.2 ft" },
    { time: "17:42", type: "high", height: "5.3 ft" },
  ],
  "2025-06-03": [
    { time: "00:03", type: "low", height: "0.4 ft" },
    { time: "06:05", type: "high", height: "5.0 ft" },
    { time: "12:31", type: "low", height: "0.1 ft" },
    { time: "18:33", type: "high", height: "5.4 ft" }
  ],
  "2025-06-04": [
    { time: "00:54", type: "low", height: "0.3 ft" },
    { time: "06:56", type: "high", height: "5.1 ft" },
    { time: "13:24", type: "low", height: "0.0 ft" },
    { time: "19:24", type: "high", height: "5.5 ft" }
  ],
  "2025-06-05": [
    { time: "01:45", type: "low", height: "0.2 ft" },
    { time: "07:47", type: "high", height: "5.2 ft" },
    { time: "14:17", type: "low", height: "-0.1 ft" },
    { time: "20:15", type: "high", height: "5.6 ft" }
  ],
  "2025-06-06": [
    { time: "02:36", type: "low", height: "0.1 ft" },
    { time: "08:38", type: "high", height: "5.3 ft" },
    { time: "15:10", type: "low", height: "-0.2 ft" },
    { time: "21:06", type: "high", height: "5.7 ft" }
  ],
  "2025-06-07": [
    { time: "03:27", type: "low", height: "0.0 ft" },
    { time: "09:29", type: "high", height: "5.4 ft" },
    { time: "16:03", type: "low", height: "-0.3 ft" },
    { time: "21:57", type: "high", height: "5.8 ft" }
  ]
};

export function TideWidget({ date }: { date: string }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tideStatus, setTideStatus] = useState<'rising' | 'falling'>('rising');
  const [nextTide, setNextTide] = useState<TideData | null>(null);
  const [currentHeight, setCurrentHeight] = useState("3.2 ft");

  const todayTides = mockTideData[date] || [];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Calculate current tide status and next tide
    const now = new Date();
    const currentTimeStr = format(now, 'HH:mm');
    
    let next: TideData | null = null;
    let status: 'rising' | 'falling' = 'rising';
    
    for (let i = 0; i < todayTides.length; i++) {
      if (todayTides[i].time > currentTimeStr) {
        next = todayTides[i];
        // If next tide is high, we're currently rising
        status = next.type === 'high' ? 'rising' : 'falling';
        break;
      }
    }
    
    // If no future tide today, use first tide of tomorrow
    if (!next && todayTides.length > 0) {
      next = todayTides[0];
      status = todayTides[todayTides.length - 1].type === 'high' ? 'falling' : 'rising';
    }
    
    setNextTide(next);
    setTideStatus(status);
    
    // Mock current height calculation
    const heights = ['2.8 ft', '3.2 ft', '3.5 ft', '2.1 ft'];
    setCurrentHeight(heights[Math.floor(Math.random() * heights.length)]);
  }, [todayTides, currentTime]);

  return (
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-ocean-night-200 dark:to-ocean-night-100 rounded-xl p-4 border border-cyan-200 dark:border-ocean-800">
      <div className="flex items-center gap-2 mb-3">
        <Waves className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">Oak Island Tides</h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Station: Southport, NC
        </span>
      </div>

      {/* Current Status */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white/50 dark:bg-ocean-night-300/50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            {tideStatus === 'rising' ? (
              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
            ) : (
              <TrendingDown className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            )}
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Tide is {tideStatus}
            </span>
          </div>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {currentHeight}
          </p>
        </div>

        {nextTide && (
          <div className="bg-white/50 dark:bg-ocean-night-300/50 rounded-lg p-3">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Next {nextTide.type} tide
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {nextTide.time}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {nextTide.height}
            </p>
          </div>
        )}
      </div>

      {/* Today's Tides */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          Today's Tides
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {todayTides.map((tide, index) => (
            <div
              key={index}
              className={`text-center p-2 rounded-lg ${
                tide.type === 'high'
                  ? 'bg-blue-100 dark:bg-ocean-700'
                  : 'bg-orange-100 dark:bg-orange-900/30'
              }`}
            >
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {tide.type === 'high' ? '↑ High' : '↓ Low'}
              </p>
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                {tide.time}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {tide.height}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tide Tips */}
      <div className="mt-4 p-3 bg-cyan-100/50 dark:bg-cyan-900/20 rounded-lg">
        <div className="flex items-start gap-2">
          <Anchor className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-0.5" />
          <div className="text-xs text-gray-700 dark:text-gray-300">
            <p className="font-medium mb-1">Best times today:</p>
            <ul className="space-y-0.5">
              <li>• Shelling: 2 hours before low tide (8:45 AM)</li>
              <li>• Swimming: High tide ± 2 hours</li>
              <li>• Fishing: Moving tides (1 hr before/after)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
