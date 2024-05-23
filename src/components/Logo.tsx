import { cn } from "@/lib/utils";
import Letter from "@/components/Letter";

type Props = {
  className?: string;
  color?: string;
  border?: boolean;
  linear?: boolean;
  vertical?: boolean;
};

const Logo = ({
  className,
  color = "#000",
  border = false,
  linear = false,
  vertical = false,
}: Props) => {
  const textIcon: ["n", "a", "t", "h"] = ["n", "a", "t", "h"];

  return (
    <div
      className={cn("grid grid-cols-2 gap-1 p-1 border-black rounded-[14px]", [
        className,
        border && "border-2",
        linear
          ? vertical
            ? "grid-cols-1"
            : "grid-cols-4"
          : "grid-cols-2 aspect-square",
      ])}
    >
      {textIcon.map((letter, index) => (
        <Letter
          className="logoLetter w-4 row"
          key={index}
          letter={letter}
          color={color}
        />
      ))}
    </div>
  );
};

export default Logo;
