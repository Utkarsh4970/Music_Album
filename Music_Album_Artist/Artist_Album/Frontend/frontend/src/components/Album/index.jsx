
import { Album } from "./Album";


export const Album_page = ({ prev, next }) => {
  return (
    <div>
      <Album prev={prev} next={next} />
    </div>
  );
};
