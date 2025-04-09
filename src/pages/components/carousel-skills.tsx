// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Skills",
  logos = [
    {
      id: "html",
      description: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "css",
      description: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "javascript",
      description: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "typescript",
      description: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "react",
      description: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "nextjs",
      description: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "nodejs",
      description: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "aws",
      description: "AWS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "mantine",
      description: "Mantine",
      image:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/mantine-logo-full.svg",
      className: "h-8 w-auto",
    },
    {
      id: "shadcn",
      description: "Shadcn UI",
      image:
        "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/icon.png",
      className: "h-8 w-auto",
    },
    {
      id: "mui",
      description: "Material UI",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "redux",
      description: "Redux",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      className: "h-8 w-auto",
    },
    {
      id: "zustand",
      description: "Zustand",
      image: "https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg",
      className: "h-8 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-16">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 as CarouselSkills };
