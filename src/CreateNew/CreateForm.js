import "./CreateForm.css";
import LinkButton from "../Utility/LinkButton";

function CreateForm() {
    return(
        <div className="CreateForm">
            <p>Введите имя нового проекта:</p>
            <input type="text" id="newProjectName" required minLength={2}/>
            <p>В ходе разработки редактора могут быть добавлены и другие поля для ввода.</p>
            <LinkButton to={"create/new"} text={"Создать"}/>
        </div>
    )
}

export default CreateForm;