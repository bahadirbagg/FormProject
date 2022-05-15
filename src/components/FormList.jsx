import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import FormListView from "./FormListView";

const getDataList = () => {
  const data = localStorage.getItem("forms");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
function FormList() {
  const [data, setData] = useState(getDataList());
  const [query, setQuery] = useState("");

  const searchText = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    getDataList();
  }, [data]);

  const deleteForm = (formName) => {
    const newForm = [...data];
    const index = data.findIndex((data) => data.formname === formName);
    data.splice(index, 1);
    setData(newForm);
    localStorage.setItem("forms", JSON.stringify(data));
    window.location.reload(false);
  };

  return (
    <>
      <div className="container flex justify-center items-center p-5 ">
        <input
          className="flex w-full rounded-full px-4 py-1 border-2 border-black  bg-slate-100"
          type="text"
          name="formname"
          placeholder="Search Button"
          autoComplete="off"
          value={query}
          onChange={searchText.bind(this)}
        ></input>
      </div>
      <div className="container my-auto mx-auto px-4 py-4 pt-16 pb-16">
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-14">
          {data
            ?.filter((val) => {
              if (query === "") {
                return val;
              } else if (
                val.formname
                  .toLocaleLowerCase()
                  .includes(query.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((data, i) => (
              <FormListView data={data} deleteForm={deleteForm} key={i} />
            ))}
        </div>
      </div>
    </>
  );
}

export default FormList;
