import data from "./../../../public/data/blogs.json";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const { blogs } = data;
console.log(blogs.at(1));
console.log(
  blogs
    .at(1)
    .content_text.replace("\n", " ")
    .split(" ")
    .slice(0, 10)
    .join(" ") + "...",
);

function BlogsSection() {
  return (
    <section id="blogs" className="container">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center font-semibold text-primary">
          Latest Insights from innovIT Solutions
        </h2>
        <p className="mb-8 text-center">
          Explore our latest articles and industry insights on web development,
          SEO, IT consulting, and emerging technologies. Stay up-to-date with
          trends, tips, and expert advice to help you grow your digital
          footprint.
        </p>

        <div className="flex items-center justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[85%] md:max-w-[95%]"
            // className="my-16 w-full max-w-xs"
          >
            <CarouselContent>
              {blogs.map((blog) => (
                <CarouselItem
                  key={blog.id}
                  className="p-6 md:basis-1/2 xl:basis-1/3"
                >
                  <Card className="shadow-md transition-all hover:scale-[1.05]">
                    <CardContent className="flex aspect-square flex-col gap-2 p-2">
                      <img
                        src={blog.photo_url}
                        alt={`Photo of blog ${blog.title}`}
                        className="h-[60%] w-full rounded-t-sm"
                      />

                      <div className="px-2 pt-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-primary lg:text-base">
                            {blog.title}
                          </span>

                          <span>
                            <Badge>{blog.category}</Badge>
                          </span>
                        </div>
                        {/* <div className="text-sm text-secondary">
                        {blog.description}
                      </div> */}
                        <div className="max-h-20 overflow-hidden py-4 text-sm">
                          {blog.content_text
                            .replace("\n", " ")
                            .split(" ")
                            .slice(0, 15)
                            .join(" ") + "..."}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center justify-center p-3 pt-0">
                      <Separator />

                      <Link
                        to={`/blogs/${blog.id}`}
                        className="pt-2 text-sm text-primary transition-all hover:scale-105 hover:text-primary/90 hover:underline"
                      >
                        Read more...
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <Button variant="outline" className="mt-8">
          <Link to="/blogs">View all &rarr;</Link>
        </Button>
      </div>
    </section>
  );
}

export default BlogsSection;
