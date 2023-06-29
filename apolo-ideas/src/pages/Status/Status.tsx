import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../../components/Header/Header"
import { Idea } from "../../components/Idea/Idea"
import { Separator } from "../../components/Separator/Separator"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status() {

    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState(['olokobixo', 'essa fera', 'ta pegando fogo'])

    function createNewAnswer(event: FormEvent) {
        event.preventDefault()
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
    }

    function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([newAnswer, ...answers])
            setNewAnswer('')
        }
    }

    return (
        <main className='status'>
            <Header title='Home' />
            <Idea content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vitae eligendi quasi placeat facere, nesciunt iste blanditiis earum laboriosam accusamus sed nisi consectetur ipsa, a quos facilis pariatur corporis? Quod." />
            <Separator />
            <form onSubmit={createNewAnswer} className='answer-idea-form'>
                <label htmlFor="idea">
                    <img src="https://github.com/SamuelPiasecki.png" alt="Samuel Piasecki" />
                    <textarea
                        id="idea"
                        placeholder='Write your answer'
                        value={newAnswer}
                        onKeyDown={handleHotkeySubmit}
                        onChange={(event) => {
                            setNewAnswer(event.target.value)
                        }}
                    />
                </label>

                <button type='submit'>
                    <PaperPlaneRight />
                    <span>Answer</span>
                </button>

            </form>
            {answers.map(idea => {
                return <Idea key={idea} content={idea} />
            })}
        </main>
    )
}