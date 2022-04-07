import Header from "./Header";
import { useParams } from "react-router-dom";

export default function EditMovie() {
  const { movieid } = useParams();
  console.log(movieid);
  return (
    <div className="editmovie">
      <Header />
      <h1>Edit Page - {movieid}</h1>
    </div>
  );
}
