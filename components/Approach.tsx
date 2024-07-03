"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvasReveal";

export function Approach() {
  return (
    <>
      <h1 className='heading mb-6'>
           <span className="text-white">My</span>
           <span className='text-purple'> Approaches</span>
        </h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center dark:bg-black w-full gap-4 mx-auto px-8"
                    style={{
                      background:'rgb(4,7,29)',
                    backgroundColor:
                      "linear-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,47,117,1) 23%, rgba(7,6,94,1) 24%, rgba(8,7,101,1) 27%, rgba(9,9,121,1) 35%, rgba(8,28,134,1) 41%, rgba(8,37,140,1) 44%, rgba(0,212,255,1) 100%);(180deg, var(--slate-800), var(--slate-900)",
                  }}
      >
        <Card title="Planning & Strategy" icon={<AceternityIcon order='Phase 1'/>}
             description='In my projects, I emphasize meticulous planning to ensure every detail is addressed from the outset. Strategic foresight allows us to anticipate challenges and proactively devise solutions. Collaboration and clear communication are pivotal, ensuring all stakeholders are aligned. This approach fosters innovation and drives efficient, impactful outcomes.'

        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-black"
          />
        </Card>
        <Card title="Development and Launch" icon={<AceternityIcon order='Phase 2'/>}
          description="Our development process is driven by innovation and precision, ensuring every feature meets high standards. We rigorously test and refine our work to guarantee robustness and reliability. As we approach launch, we implement strategic rollouts to ensure a seamless transition. This careful orchestration ensures our projects are impactful and well-received by our audience."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Development & Progress Update" icon={<AceternityIcon order='Phase 3'/>}
          description='Our development phase is characterized by rigorous attention to detail and a commitment to quality. We track progress through regular milestones, ensuring each step aligns with our overall objectives. Continuous feedback loops and iterative improvements drive our projects forward. This dynamic approach ensures we meet and exceed expectations, delivering outstanding results.'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description:string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.4] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4   group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}:{order:string}) => {
  return (
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
         {order}
      </span>
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
