import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from 'react-router-dom';
import './Idea.css';

interface IdeaProps {
    content: string;
}

export function Idea(props: IdeaProps) {
    return (
        <Link to="/status" className="idea">
            <img src="https://github.com/SamuelPiasecki.png" alt="Samuel Piasecki" />

            <div className="idea-content">
                <div className="idea-content-header">
                    <strong>Samuel Piasecki</strong>
                    <span>@samuel</span>
                </div>

                <p>
                    {props.content}
                </p>

                <div className="idea-content-footer">
                    <button type="button"><ChatCircle /></button>
                    <button type="button"><ArrowsClockwise /></button>
                    <button type="button"><Heart /></button>
                </div>
            </div>
        </Link>
    )
}