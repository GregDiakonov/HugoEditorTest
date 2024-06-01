import "./active.css"
import LinkButton from "../Utility/LinkButton"

function Workplace() {
    return (
        <div className="ActiveW">
            <div className="ActiveDirectory">Здесь будут отображены файлы проекта.</div>
            <div className="ActiveWorkspace">
                <p>Проект создан.<br/>Вы можете создать новые файлы контента.</p>
                <div className="ActiveButtons">
                    <LinkButton to={"create/new/content"} text={"Новый контент-файл"}/>
                    <LinkButton to={"create/new/config"} text={"Новый конфиг-файл"}/>
                </div>
            </div>
        </div>
    )
}

export default Workplace