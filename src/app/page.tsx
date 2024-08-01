import ToggleTheme from '@/components/collection/toggletheme';
import { Showcase } from '@/components/showcase';
import { buttonVariants } from '@/components/ui/button';
import { getSnippet } from '@/lib/getCodeSnippet';

export default function Home() {
  return (
    <div className='container flex flex-col gap-3 p-10'>
      <div className='flex justify-between border-b-2 border-border py-2'>
        <h1 className='flex items-center gap-x-2 text-2xl'>
          <a
            href='https://github.com/caru-ini'
            className={buttonVariants({ variant: 'ghost', className: 'py-1 !text-2xl' })}
            target='_blank'
          >
            caru-ini
          </a>
          /
          <a
            href='https://github.com/caru-ini/my-components'
            className={buttonVariants({ variant: 'ghost', className: 'py-1 !text-2xl' })}
            target='_blank'
          >
            my-components
          </a>
        </h1>
        <div>
          <ToggleTheme />
        </div>
      </div>
      <div className='flex flex-wrap gap-3'>
        {/* frame and code */}
        <Showcase title='Example' />
        <Showcase title='Theme Toggle' code={getSnippet('toggletheme')}>
          <ToggleTheme />
        </Showcase>
      </div>
    </div>
  );
}
