'use client';

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';

const gameNights = [
  new Date(2024, 2, 15),
  new Date(2024, 2, 29),
  new Date(2024, 3, 12),
  new Date(2024, 3, 26),
];

export function Calendar() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      modifiers={{
        gameNight: gameNights,
      }}
      modifiersStyles={{
        gameNight: {
          backgroundColor: 'hsl(var(--primary))',
          color: 'hsl(var(--primary-foreground))',
        },
      }}
      className={cn(
        'p-3',
        'rounded-md',
        'border',
        '[&_.rdp-caption]:flex [&_.rdp-caption]:justify-center [&_.rdp-caption]:relative [&_.rdp-caption]:items-center',
        '[&_.rdp-caption_select]:pl-8',
        '[&_.rdp-nav]:flex [&_.rdp-nav]:gap-1',
        '[&_.rdp-nav_button]:rounded-md [&_.rdp-nav_button]:p-2 [&_.rdp-nav_button]:hover:bg-muted',
        '[&_.rdp-head_cell]:w-9 [&_.rdp-head_cell]:font-normal [&_.rdp-head_cell]:text-muted-foreground',
        '[&_.rdp-cell]:p-0',
        '[&_.rdp-day]:h-9 [&_.rdp-day]:w-9 [&_.rdp-day]:rounded-md [&_.rdp-day]:text-center',
        '[&_.rdp-day]:hover:bg-muted',
        '[&_.rdp-day_focus]:bg-muted',
      )}
    />
  );
}