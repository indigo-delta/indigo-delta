import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '../lib/utils';

const gameNights = [
  new Date(2025, 2, 23)
];

export function Calendar() {
  const [selected, setSelected] = useState<Date>();

  return (
    <div className="flex justify-left">
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
        captionLayout="dropdown-buttons"
        showOutsideDays={false}
        className={cn(
          'p-3',
          'rounded-md',
          'border',
          '[&_.rdp-caption]:mb-4',
          '[&_.rdp-caption]:flex [&_.rdp-caption]:justify-center [&_.rdp-caption]:relative [&_.rdp-caption]:items-center',
          '[&_.rdp-caption_select]:px-2 [&_.rdp-caption_select]:py-1 [&_.rdp-caption_select]:rounded-md [&_.rdp-caption_select]:bg-muted',
          '[&_.rdp-nav]:flex [&_.rdp-nav]:gap-1',
          '[&_.rdp-nav_button]:rounded-md [&_.rdp-nav_button]:p-2 [&_.rdp-nav_button]:hover:bg-muted',
          '[&_.rdp-head_cell]:w-9 [&_.rdp-head_cell]:font-normal [&_.rdp-head_cell]:text-muted-foreground',
          '[&_.rdp-cell]:p-0',
          '[&_.rdp-day]:h-9 [&_.rdp-day]:w-9 [&_.rdp-day]:rounded-md [&_.rdp-day]:text-center',
          '[&_.rdp-day]:hover:bg-muted',
          '[&_.rdp-day_focus]:bg-muted',
          '[&_.rdp-dropdown]:bg-background [&_.rdp-dropdown]:border [&_.rdp-dropdown]:rounded-md [&_.rdp-dropdown]:p-1',
          '[&_.rdp-dropdown_month]:mr-2',
          '[&_.rdp-dropdown_year]:min-w-[80px]'
        )}
      />
    </div>
  );
}