import type { HeroType } from "~/types";

export default function HeroBlock({ hero }: { hero: HeroType }) {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">{hero.heading}</h1>
        <p className="text-xl">{hero.tagline}</p>
      </div>
    </div>
  );
}
