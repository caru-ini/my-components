'use client';
import { Check, Code2, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export const Showcase = ({ children, title }: { children?: React.ReactNode; title?: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className='flex flex-col justify-center gap-2 rounded-md border border-border p-2'>
      <h2 className='px-2 text-xl font-semibold'>{title || 'Title'}</h2>
      <div className='p-3 pt-0'>
        <div className='flex h-36 w-60 items-center justify-center bg-gray-200'>
          {children || <p className='text-gray-500'>Component Here</p>}
        </div>
      </div>
      <div className='flex justify-between gap-2 border-t border-border pt-3'>
        <Button
          className='gap-2'
          variant={'outline'}
          onClick={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 5000);
          }}
        >
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
        <Button className='gap-2'>
          <Code2 size={20} />
          Code
        </Button>
      </div>
    </div>
  );
};
