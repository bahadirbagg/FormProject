import "bootstrap/dist/css/bootstrap.min.css";
import FormDetailCardView from "./FormDetailCardView";

function FormDetailCard({ data }) {
  return (
    <div>
      {data?.map((data, i) => (
        <FormDetailCardView data={data} key={i} />
      ))}
    </div>
  );
}

export default FormDetailCard;
