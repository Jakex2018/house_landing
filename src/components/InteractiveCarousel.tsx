import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardFooter } from "@/components/ui/card";



const InteractiveCarousel = () => {
  return (
    <Carousel className="relative max-w-[183vh] px-10">
      <CarouselContent className="-ml-1 flex gap-x-1 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 sm:basis-1/2 lg:basis-1/3 basis-1/2 ">
            <div className="p-1 ">
              <Card className=" bg-[#DDC7BB]  max-w-[60vh] rounded-[20px] overflow-hidden ">
                <img
                  src="/popular01.jpg"
                  className="max-h-[200px] w-full object-cover"
                  alt=""
                />
                <CardFooter>
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between mt-5 w-full">
                      <div className="flex items-center gap-x-3">
                        <img src="/avatar01.svg" alt="" />
                        <div className="flex-flex-col items-center">
                          <span className="text-[20px] font-bold">Sarah Nguyen</span>
                          <p className="text-sm">San Francisco</p>
                        </div>
                      </div>
                      <div className="px-3 py-1 flex gap-x-2 items-center bg-white rounded-lg mt-4">
                        <img src="/star.svg" alt="" />
                        <span className="font-bold">5.0</span>
                      </div>
                    </div>
                    <p className="mt-10 text-[#4F3527] font-medium">
                      Dwello truly cares about their clients. They listened to my needs
                      and preferences and helped me find the perfect home in the Bay Area.
                      Their professionalism and attention to detail are unmatched.
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute flex -bottom-20 left-[50%] right-[48%]">
        <CarouselPrevious
          className="bg-[#2b1b12] text-white p-6" />
        <CarouselNext
          className="bg-[#2b1b12] text-white p-6" />

      </div>
    </Carousel>
  );
};

export default InteractiveCarousel;