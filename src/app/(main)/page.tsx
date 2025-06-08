import { FileQuestion } from "lucide-react";
import Link from "next/link";

import LocalSearch from "@/components/controls/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTE from "@/constants/route";

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button variant={"outline"} className="text-dark100_light900" asChild>
          <Link href={ROUTE.ASK_QUESTION} className="flex items-center gap-2">
            <FileQuestion className="w-4 h-4" />
            <span>Question</span>
          </Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch imgSrc="/icons/search.svg" placeholder="Search..." />
      </section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        <p>Question Card 1</p>
        <p>Question Card 1</p>
        <p>Question Card 1</p>
      </div>
    </>
  );
}
