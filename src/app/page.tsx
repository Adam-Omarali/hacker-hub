import { ModeToggle } from "@/components/theme-toggle";
import { HoverBorderGradient } from "@/components/ui/border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div>
        <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div>
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
              hacker hub
            </p>
            <div className="flex flex-col gap-4 p-4">
              <p>
                What are you intensely curious about? Following one's curiosity
                is the golden path to developing something impactful in the
                world. This is how the best startups start and where new
                inventions arise. Global progress is limited to the ambition of
                the most ambitious. If you're an ambitious person who has been
                itching to explore a space or project out of curiosity, Hacker
                Hub is for you.
              </p>
              <p>
                Have you always wanted to make a robotic chef? How about an AI
                that places you in Avengers or Inside Out? We meet up weekly to
                work on our ideas and give feedback. If you want to build a
                product and get users, awesome, we'll help. If you wish to
                explore Black Holes, that's equally as awesome. We'll bring in
                speakers, give tactical feedback on ideas, provide a space to
                demo your work and expose you to grants and funding
                opportunities. With more traction, we'll also provide hardware
                like arduinos and vr headsets.
              </p>
              <p>
                This club is not for everyone. It's for those who feel school is
                not enough for their ambition and want to be pushed to make
                great things. If you've felt tired of solely focusing on grades
                and feel you can do so much more outside of a classroom, come
                join us, you're a rare group of people.
              </p>
            </div>
            <div className="py-6 flex justify-center items-center">
              <Link href="/signup">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <span>Sign Up</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between items-center pb-4">
        <p>Hacker Hub</p>
        <ModeToggle />
      </div> */}
    </div>
  );
}
