import Link from 'next/link';
import { Dice5 } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dice5 className="h-6 w-6" />
            <span className="font-semibold">Eaglesham Board Games</span>
          </Link>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/games"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Games
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}