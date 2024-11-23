import { Card } from '@/components/ui/card';
import { games } from '@/lib/games-data';

export default function GamesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Games Collection</h1>
      <div className="grid gap-6">
        {games.map((game) => (
          <Card key={game.id} className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{game.title}</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <span>{game.playTime} minutes</span>
              <span>•</span>
              <span>{game.players} players</span>
            </div>
            <p className="text-muted-foreground">{game.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}