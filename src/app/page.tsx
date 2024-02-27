import { Button } from "@/components/ui/button";
import { typographyClasses } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { GithubLogo, Star } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-2">
      <h1 className={cn(typographyClasses.h1)}>
        <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
          Fast
        </span>{" "}
        Next Setup
      </h1>
      <p className={cn(typographyClasses.lead)}>
        Is al
        <b className={cn(typographyClasses.h4, "text-foreground")}>ready</b>.
      </p>
      <div className="mt-6 flex flex-col lg:flex-row lg:gap-8 gap-8 items-center justify-center">
        <a href="https://github.com/Casali-Dev/fast-next-setup" target="_blank">
          <Button>
            <Star className="mr-2 h-4 w-4" weight="fill" />
            Star the repo!
          </Button>
        </a>
        <a href="https://github.com/Casali-Dev" target="_blank">
          <Button variant={"secondary"}>
          <GithubLogo className="mr-2 h-4 w-4" weight="fill" />
            Follow on Github!
          </Button>
        </a>
      </div>
    </main>
  );
}
