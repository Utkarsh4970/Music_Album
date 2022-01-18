
import { Showsong } from "./Showsong";

export const Song_page = ({ prev, next }) => {
  return (
    <div>
      <Showsong prev={prev} next={next} />
    </div>
  );
};
