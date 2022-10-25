import "bootstrap/dist/css/bootstrap.min.css";
import FormDetailCardView from "./FormDetailCardView";

function FormDetailCard({ data }) {
  return (
    <div>
      {data?.map((data, i) => (
        <FormDetailCardView data={data} key={i} />
      ))}
      {data.length === 0 && (
        <h1 className="container flex justify-center items-center p-5 ">
          Form Not Created
        </h1>
      )}
    </div>
  );
}

export default FormDetailCard;
