'use client';
import { Check, Code2, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface ShowcaseProps {
  children?: JSX.Element;
  title?: string;
  code?: string | null;
}

export const Showcase = ({ children, title, code }: ShowcaseProps) => {
  const [copied, setCopied] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const onCopy = async () => {
    await navigator.clipboard.writeText(code || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };
  return (
    <div className='flex flex-col justify-center gap-2 rounded-md border border-border p-2'>
      <h2 className='px-2 text-xl font-semibold'>{title || 'Title'}</h2>
      <div className='p-3 pt-0'>
        <div className='flex h-36 w-60 items-center justify-center'>
          {children || <p className='text-gray-500'>Component Here</p>}
        </div>
      </div>
      <div className='flex justify-between gap-2 border-t border-border pt-3'>
        <Button className='gap-2' variant={'outline'} onClick={onCopy}>
          {copied ? (
            <>
              <Check size={20} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={20} />
              Copy
            </>
          )}
        </Button>
        <Button className='gap-2' onClick={() => setIsCodeModalOpen(true)}>
          <Code2 size={20} />
          Code
        </Button>
      </div>
      {/* fullscreen code modal*/}
      {isCodeModalOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-background/60'
          onClick={() => setIsCodeModalOpen(false)}
        >
          <div className='relative flex max-h-[85svh] flex-col rounded-md border-2 border-border bg-background/70 p-4 backdrop-blur-md'>
            <span className='absolute -top-7 text-muted-foreground'>Click outside to close</span>
            <div className='rounded-md bg-slate-900 text-white'>
              <pre className='overflow-auto text-wrap p-4'>
                <code>{code || 'Code comes here'}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
