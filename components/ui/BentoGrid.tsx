import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-violet dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background:'rgb(4,7,29)',
      backgroundColor:
        "linear-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,47,117,1) 23%, rgba(7,6,94,1) 24%, rgba(8,7,101,1) 27%, rgba(9,9,121,1) 35%, rgba(8,28,134,1) 41%, rgba(8,37,140,1) 44%, rgba(0,212,255,1) 100%);(180deg, var(--slate-800), var(--slate-900)",
    }}
    >
      {header}
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-1000 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
