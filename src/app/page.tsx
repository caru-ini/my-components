import { Kaiwai } from '@/components/collection/kaiwai';
import { StatusCard } from '@/components/collection/statusCard';
import { TagPicker } from '@/components/collection/tagPicker';
import ToggleTheme from '@/components/collection/toggletheme';
import { Showcase } from '@/components/showcase';
import { buttonVariants } from '@/components/ui/button';
import { getSnippet } from '@/lib/getCodeSnippet';
import { IceCream } from 'lucide-react';

export default function Home() {
  return (
    <div className='container flex grow flex-col p-10'>
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
        <div className='hidden gap-x-2 sm:flex'>
          <ToggleTheme />
        </div>
      </div>
      <div className='mt-5 grid grid-cols-1 justify-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <Showcase title='Example' />
        <Showcase title='Theme Toggle' code={getSnippet('toggletheme')}>
          <ToggleTheme />
        </Showcase>
        <Showcase title='Status Card' code={getSnippet('statusCard')}>
          <StatusCard
            icon={<IceCream size={30} />}
            title='IceCream'
            status='success'
            description='available'
          />
        </Showcase>
        <Showcase title='Tag Picker' code={getSnippet('tagPicker')}>
          <TagPicker tags={['react', 'typescript', 'tailwindcss']} defaultTags={['react']} />
        </Showcase>
        <Showcase title='界隈曲のアレ' code={getSnippet('kaiwai')}>
          <Kaiwai />
        </Showcase>
      </div>
    </div>
  );
}
