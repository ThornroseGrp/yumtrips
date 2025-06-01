import { LayoutGrid, AlignJustify } from "lucide-react";

interface TimelineToggleProps {
  isTimelineView: boolean;
  onToggle: (value: boolean) => void;
}

export function TimelineToggle({ isTimelineView, onToggle }: TimelineToggleProps) {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => onToggle(false)}
        className={`p-2 rounded ${
          !isTimelineView
            ? "bg-white shadow-sm text-cyan-600"
            : "text-gray-500 hover:text-gray-700"
        } transition-all`}
        aria-label="Card view"
      >
        <LayoutGrid className="w-4 h-4" />
      </button>
      <button
        onClick={() => onToggle(true)}
        className={`p-2 rounded ${
          isTimelineView
            ? "bg-white shadow-sm text-cyan-600"
            : "text-gray-500 hover:text-gray-700"
        } transition-all`}
        aria-label="Timeline view"
      >
        <AlignJustify className="w-4 h-4" />
      </button>
    </div>
  );
}
