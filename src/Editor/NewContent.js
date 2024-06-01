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
                    <LinkButton to="create/new" text="Сохранить"/>
                    <input type="checkbox" id="draft" name="draft" value="draft"/>
                    <label for="draft">Контент-черновик</label><br/>
                    <TextEditor/>
                </div>
            </div>
        </div>
    )
}

export default NewContent;