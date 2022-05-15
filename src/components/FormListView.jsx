import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

function FormListView({ data, deleteForm }) {
  const history = useHistory();

  const setLink = () => {
    let formName = data.formname;
    formName = formName.replace(/\s+/g, "-");
    history.push(`/forms/${formName}`);
    window.location.reload(false);
  };

  const truncateView = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };

  return (
    <div className="relative  overflow-hidden">
      <Card
        className="cursor-pointer hover:bg-slate-200 hover:shadow-2xl"
        bg="Light"
        key="Light"
        text="Dark"
        style={{ width: "auto", height: "auto" }}
      >
        <Card.Header className="h-10 flex items-center" onClick={setLink}>
          {truncateView(data.formname, 23)}
        </Card.Header>
        <Card.Body onClick={setLink}>
          <Card.Text className="h-16 flex items-center">
            {truncateView(data.description, 55)}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button onClick={() => deleteForm(data.formname)}>
            <i className="fa fa-remove text-red-800 float-right hover:text-red-400"></i>
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default FormListView;
