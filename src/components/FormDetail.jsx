import { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FormDetailCard from "./FormDetailCard";

const getDataList = () => {
  const data = localStorage.getItem("forms");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function FormDetail(query) {
  const history = useHistory();

  let formName = query.match.params.formName;
  formName = formName.replace(/-/g, " ");
  const [data] = useState(getDataList());

  const backRoute = () => {
    history.push("/");
    window.location.reload(false);
  };

  return (
    <div>
      <button
        onClick={backRoute}
        className="flex s:text-2xl md:text-3xl lg:text-4xl p-4 text-[#487be9] hover:text-[#004FFF]"
      >
        <i className="fa fa-arrow-left"></i>
      </button>
      <h1 className=" flex w-full justify-center items-center">{formName}</h1>
      {data
        ?.filter((val) => formName === val.formname)
        .map((data, i) => (
          <FormDetailCard data={data.fields} key={i} />
        ))}
    </div>
  );
}

export default FormDetail;
