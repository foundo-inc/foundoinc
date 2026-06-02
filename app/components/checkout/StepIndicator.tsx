import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  steps: string[];
  current: number; // 0-based
}

const StepIndicator = ({ steps, current }: Props) => {
  const pct = ((current) / (steps.length - 1)) * 100;
  return (
    <div className="w-full">
      {/* Desktop: dots with labels */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute top-4 left-0 right-0 h-1 bg-muted rounded-full" />
          <div
            className="absolute top-4 left-0 h-1 bg-primary rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
          <div className="relative flex justify-between">
            {steps.map((label, i) => {
              const done = i < current;
              const active = i === current;
              return (
                <div key={label} className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className={cn(
                      "h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all",
                      done && "bg-primary border-primary text-primary-foreground",
                      active && "bg-background border-primary text-primary ring-4 ring-primary/15",
                      !done && !active && "bg-background border-border text-muted-foreground",
                    )}
                  >
                    {done ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium text-center max-w-[100px] leading-tight",
                      active ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: compact bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">
            Step {current + 1} of {steps.length}
          </span>
          <span className="text-sm text-muted-foreground">{steps[current]}</span>
        </div>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
