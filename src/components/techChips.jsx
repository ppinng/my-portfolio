import { useState, useEffect, useRef } from "react";

const techChips = ({ stacks, isExample }) => {
  const containerRef = useRef(null);
  const [toolsToDisplay, setToolsToDisplay] = useState([]);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const toolMinWidth = 70; // Minimum width of each tool (adjust as needed)
        const maxTools = Math.floor((containerWidth - toolMinWidth) / toolMinWidth);

        // Limit displayed tools to 3 if the array is longer than 4 or equal to 4
        const displayedTools = stacks.length <= 4 ? stacks : stacks.slice(0, 3);
        const isOverflowing = stacks.length > 4;

        setToolsToDisplay(displayedTools);
        setIsOverflowing(isOverflowing);
      }
    };

    handleResize(); // Initial calculation on mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [stacks]);
  
  return (
    <div ref={containerRef} className="text-black dark:text-white flex flex-wrap gap-2 my-2">
      {toolsToDisplay.map((tool, index) => (
        <span
          key={index}
          className="inline-block border-2 border-zinc-300 dark:border-zinc-600 rounded-full font-thin px-2 py-1 text-xs"
        >
          {tool}
        </span>
      ))}
      {isOverflowing && (
        <span className="inline-block border-2 border-zinc-300 dark:border-zinc-600 rounded-full px-2 py-1 text-xs">
          . . .
        </span>
      )}
    </div>
  );
};

export default techChips;
