import { readFileSync } from 'fs';
import { XMLParser } from 'fast-xml-parser';

export interface Game {
  title: string;
  image: string;
  thumbnail: string;
  yearPublished: number;
  numPlays: number;
}

export function getGamesCollection(): Game[] {
  const xmlData = readFileSync('data/collection.xml', 'utf-8');
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: '_text'
  });
  
  const data = parser.parse(xmlData);
  
  return data.items.item.map((item: any) => ({
    title: item.name._text,
    image: item.image,
    thumbnail: item.thumbnail,
    yearPublished: parseInt(item.yearpublished),
    numPlays: parseInt(item.numplays)
  }));
} 