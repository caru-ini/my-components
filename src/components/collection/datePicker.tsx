'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import * as chrono from 'chrono-node/ja';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

export function DatePicker() {
  const [date, setDate] = useState<Date | null>(null);

  const handleManualInput = (input: string) => {
    const parsed = chrono.parse(
      input,
      { instant: new Date() },
      {
        forwardDate: true,
      },
    );
    if (parsed.length > 0) {
      const parsedDate = parsed[0].start.date();
      setDate(parsedDate);
      return;
    }
    setDate(null);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' className='w-[280px] justify-start text-left font-normal'>
          <CalendarIcon className='mr-2 size-4' />
          {date ? format(date, 'PPP', { locale: ja }) : <span>日付を選択</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='flex flex-col gap-2'>
        <Input
          type='text'
          placeholder='日付や時間を入力（例：明日、来週金曜日、3時）'
          onChange={(e) => handleManualInput(e.target.value)}
        />
        <p className='rounded-md bg-secondary p-2 font-mono'>
          {date
            ? `${format(date, 'PPP', { locale: ja })} ${format(date, 'HH:mm', { locale: ja })}`
            : 'Unknown'}
        </p>
      </PopoverContent>
    </Popover>
  );
}
