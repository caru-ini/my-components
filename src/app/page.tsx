import { Showcase } from '@/components/showcase';
import ToggleTheme from '@/components/toggletheme';

export default function Home() {
  return (
    <div className='container flex flex-col gap-3 p-10'>
      <div className='flex justify-between border-b-2 border-border py-2'>
        <h1 className='text-3xl'>My components</h1>
        <div>
          <ToggleTheme />
        </div>
      </div>
      <div className='flex flex-wrap'>
        {/* frame and code */}
        <Showcase title='Example' />
      </div>
    </div>
  );
}
