import  Genres  from "./Genres";
import  Platform  from "./Platform";
import  Publisher from "./Publisher";



export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genres[];
  description_raw: string;
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
