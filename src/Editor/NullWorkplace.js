import "./null.css"
import LinkButton from "../Utility/LinkButton"

function NullWorkplace() {
    return (
        <div className="NullW">
            <div className="NullDirectory"></div>
            <div className="NullWorkspace">
                <p>Пока что никакой проект не загружен.<br/>Вы можете создать новый проект или открыть существующий.</p>
                <div className="NullButtons">
                    <LinkButton to={"create"} text={"Создать"}/>
                    <LinkButton text={"Открыть"}/>
                </div>
            </div>
        </div>
    )
}

export default NullWorkplace