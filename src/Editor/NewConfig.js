import IntroHeader from "../Intro/IntroHeader";
import TextEditor from "../Utility/TextEditor";
import LinkButton from "../Utility/LinkButton";
import "./active.css"
import "./content.css"

function NewContent() {
    return(
        <div>
            <IntroHeader/>
            <div className="ContentEditor">
                <div className="ActiveDirectory">Здесь будут отображены файлы проекта.</div>
                <div className="ContentText">
                    <LinkButton to="create/new" text="Сохранить"/><br/>
                    <input type="text" id="name" name="name" required minLength={2}/>
                    <label for="name">Имя сайта</label><br/><br/>
                    <input type="text" id="theme" name="theme"/>
                    <label for="theme">Название темы сайта</label><br/><br/>
                    <input type="text" id="url" name="url"/>
                    <label for="url">URL-сайта</label><br/><br/>
                    <p>В последствии подразумевается добавление других настроек в конфиг-файлы.</p>
                </div>
            </div>
        </div>
    )
}

export default NewContent;