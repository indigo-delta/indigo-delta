import { Calendar } from '@/components/calendar';
import { Card } from '@/components/ui/card';
import { Dice5 } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Dice5 className="h-12 w-12 text-primary" />
        <div>
          <h1 className="text-4xl font-bold text-primary">Eaglesham Board Games</h1>
          <p className="text-xl text-muted-foreground">Family Gaming in Eaglesham</p>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Upcoming Game Nights</h2>
        <Calendar />
      </Card>

      <Card className="mt-8 p-6">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-muted-foreground">
          Welcome to Eaglesham Board Games! We're a friendly local community of board game enthusiasts
          who meet regularly to play and share our love of tabletop gaming. Whether you're new to
          the hobby or a seasoned player, everyone is welcome to join our game nights.
        </p>
      </Card>
    </div>
  );
}