"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Define the props for the component
export interface PhotoStackItem {
  src: string;
  name: string;
  role?: string;
  experience?: string;
}

export interface InteractivePhotoStackProps {
  items: PhotoStackItem[];
  title?: React.ReactNode;
  className?: string;
}

// Helper function to generate a random number in a range
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Helper function to generate a set of non-overlapping positions
const generateNonOverlappingTransforms = (items: PhotoStackItem[], topIndex: number = 0) => {
  const displayedItems = items.slice(0, 5);

  // If exactly 3 items, provide an aesthetically balanced 3-card spread (Left, Center hero, Right)
  if (displayedItems.length === 3) {
    return [
      `translate(-25vw, ${random(-1, 1)}vh) rotate(${random(-5, -3)}deg)`,
      `translate(0vw, ${random(-2, 0)}vh) rotate(${random(-1, 1)}deg)`,
      `translate(25vw, ${random(-1, 1)}vh) rotate(${random(3, 5)}deg)`,
    ];
  }

  // If exactly 4 items, provide an aesthetically balanced 4-card spread (Left to Right)
  if (displayedItems.length === 4) {
    return [
      `translate(-28vw, ${random(-1, 1)}vh) rotate(${random(-6, -4)}deg)`,
      `translate(-9.5vw, ${random(-2, 0)}vh) rotate(${random(-2, 0)}deg)`,
      `translate(9.5vw, ${random(-2, 0)}vh) rotate(${random(0, 2)}deg)`,
      `translate(28vw, ${random(-1, 1)}vh) rotate(${random(4, 6)}deg)`,
    ];
  }

  const cardWidthVW = 25;
  const cardHeightVH = 45;
  const maxRetries = 100;
  const positions: { x: number; y: number; r: number }[] = [];

  displayedItems.forEach(() => {
    let newPos;
    let collision;
    let retries = 0;

    do {
      collision = false;
      const x = random(-35, 35);
      const y = random(-20, 20);
      const r = random(-15, 15);
      newPos = { x, y, r };

      for (const pos of positions) {
        const dx = Math.abs(newPos.x - pos.x);
        const dy = Math.abs(newPos.y - pos.y);
        if (dx < cardWidthVW && dy < cardHeightVH) {
          collision = true;
          break;
        }
      }
      retries++;
    } while (collision && retries < maxRetries);
    
    positions.push(newPos);
  });

  return positions.map(pos => `translate(${pos.x}vw, ${pos.y}vh) rotate(${pos.r}deg)`);
};

const InteractivePhotoStack = React.forwardRef<
  HTMLDivElement,
  InteractivePhotoStackProps
>(({ items, title, className, ...props }, ref) => {
  const [topCardIndex, setTopCardIndex] = React.useState(0);
  const [isGroupHovered, setIsGroupHovered] = React.useState(false);
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);
  const [spreadTransforms, setSpreadTransforms] = React.useState<string[]>([]);

  const displayedItems = items.slice(0, 5);
  const baseRotations = ["rotate-2", "-rotate-2", "rotate-3", "-rotate-3", "rotate-4"];

  const handleMouseEnter = () => {
    const newTransforms = generateNonOverlappingTransforms(items, topCardIndex);
    setSpreadTransforms(newTransforms);
    setIsGroupHovered(true);
  };

  const handleCardClick = (index: number) => {
    if (isGroupHovered) {
      setClickedIndex(index);
      setTimeout(() => {
        setIsGroupHovered(false);
        setTopCardIndex(index);
        setClickedIndex(null);
      }, 500);
    } else {
      setTopCardIndex(index);
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center w-full",
        title ? "gap-10" : "gap-0",
        className,
      )}
      {...props}
    >
      <div
        className="relative h-[30rem] w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => !clickedIndex && setIsGroupHovered(false)}
      >
        <div className="relative left-1/2 top-1/2 h-[435px] w-[340px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2">
          {displayedItems.map((item, index) => {
            const isTopCard = index === topCardIndex;
            const numItems = displayedItems.length;
            let stackPosition = index - topCardIndex;
            if (stackPosition < 0) stackPosition += numItems;
            const isClicked = index === clickedIndex;
            
            const transform = isGroupHovered
              ? spreadTransforms[index]
              : `translateY(${stackPosition * 0.45}rem) scale(${1 - stackPosition * 0.045})`;

            return (
              <div
                key={item.name}
                onClick={() => handleCardClick(index)}
                className={cn(
                  "absolute inset-0 h-[435px] w-[340px] max-w-[90vw] cursor-pointer rounded-[18px] bg-white border border-[#E8DEF2] p-2.5 transition-all duration-400 ease-out select-none",
                  {
                    "rotate-0": isGroupHovered,
                    [baseRotations[stackPosition]]: !isGroupHovered && !isTopCard,
                    "hover:-translate-y-1 hover:border-[#D5C2EB]": isGroupHovered && !isClicked,
                  }
                )}
                style={{
                  transform: transform,
                  zIndex: isClicked ? 200 : isGroupHovered ? (isTopCard ? 110 : 100) : isTopCard ? numItems : numItems - stackPosition,
                  boxShadow: isTopCard
                    ? "0 14px 34px -8px rgba(16, 24, 43, 0.08), 0 2px 8px rgba(16, 24, 43, 0.03)"
                    : "0 8px 20px -6px rgba(16, 24, 43, 0.05), 0 1px 4px rgba(16, 24, 43, 0.02)",
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-between">
                  {/* Photo Frame */}
                  <div className="relative h-[255px] w-full overflow-hidden rounded-[14px] bg-[#F7F5FA] border border-[#F0EBF7]">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-full w-full rounded-[14px] object-cover object-top"
                    />
                  </div>

                  {/* Specialist Information */}
                  <div className="flex flex-col items-center justify-center py-3 px-3 w-full text-center flex-grow">
                    {/* Doctor Name */}
                    <p className="font-serif text-[23px] font-semibold text-[#10182B] tracking-tight leading-snug">
                      {item.name || "Specialist Name"}
                    </p>

                    {/* Role / Designation */}
                    {item.role && (
                      <p className="font-sans text-[13.5px] font-semibold text-[#853BC0] mt-1.5 leading-snug line-clamp-2">
                        {item.role}
                      </p>
                    )}

                    {/* Qualifications / Experience */}
                    {item.experience && (
                      <p className="font-sans text-[12.5px] font-medium text-[#5A6679] mt-1.5 leading-relaxed line-clamp-2">
                        {item.experience}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {title && (
        <div className="text-center w-full">
          {title}
        </div>
      )}
    </div>
  );
});

InteractivePhotoStack.displayName = "InteractivePhotoStack";

export { InteractivePhotoStack };
