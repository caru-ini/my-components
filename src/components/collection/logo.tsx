import { cn } from '@/lib/utils';
import { Terminal } from 'lucide-react';

import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export const Logo: React.FC = () => {
  return (
    <div
      className={cn(
        sourceCodePro.className,
        'text-primary-500 dark:text-primary-400 flex items-center gap-x-1 rounded-lg border-2 border-blue-400 bg-secondary px-2 text-2xl',
      )}
    >
      <Terminal size={25} />
      caru.live
    </div>
  );
};
