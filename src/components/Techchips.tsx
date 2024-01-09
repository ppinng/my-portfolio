import { useState, useEffect, useRef } from "react";

const ToolComponent = ({ tools }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [toolsToDisplay, setToolsToDisplay] = useState<string[]>([]);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const displayedTools = tools.length <= 4 ? tools : tools.slice(0, 3);
        const isOverflowing = tools.length > 4;

        setToolsToDisplay(displayedTools);
        setIsOverflowing(isOverflowing);
      }
    };

    handleResize(); // Initial calculation on mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tools]);

  return (
    <div
      ref={containerRef}
      className="text-black dark:text-white flex flex-wrap gap-2 my-2"
    >
      {toolsToDisplay.map((tool, index) => (
        <span
          key={index}
          className="inline-block border-2 border-customorange  rounded-full font-thin px-2 py-1 text-xs"
        >
          {tool}
        </span>
      ))}
      {isOverflowing && (
        <span className="inline-block border-2 bg-customorange border-customorange  rounded-full font-thin px-4 py-1 text-xs">
          . . .
        </span>
      )}
    </div>
  );
};

export default ToolComponent;
