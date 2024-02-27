import { Button } from '@/components/ui/button'
import { typographyClasses } from '@/lib/typography'
import { cn } from '@/lib/utils'
import { GitHubLogoIcon, StarIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-2">
      <h1 className={cn(typographyClasses.h1)}>Fast Next Setup</h1>
      <p className={cn(typographyClasses.lead)}>
        It&apos;s al
        <b className={cn(typographyClasses.h4, 'text-foreground')}>ready</b>.
      </p>
      <div className="mt-6 space-x-8">
        <a href="https://github.com/Casali-Dev/fast-next-setup" target="_blank">
          <Button>
            <StarIcon className="mr-2 h-4 w-4" />
            Star the repo!
          </Button>
        </a>
        <a href="https://github.com/Casali-Dev" target="_blank">
          <Button variant={'secondary'}>
            <GitHubLogoIcon className="mr-2 h-4 w-4" />
            Follow the creator!
          </Button>
        </a>
      </div>
    </main>
  )
}
