import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../../components/Header/Header"
import { Idea } from "../../components/Idea/Idea"
import { Separator } from "../../components/Separator/Separator"
import './Timeline.css'

export function Timeline() {

    const [newIdea, setNewIdea] = useState('')
    const [ideas, setIdeas] = useState(['olokobixo', 'essa fera', 'ta pegando fogo'])

    function createNewIdea(event: FormEvent) {
        event.preventDefault()
        setIdeas([newIdea, ...ideas])
        setNewIdea('')
    }

    function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setIdeas([newIdea, ...ideas])
            setNewIdea('')
        }
    }

    return (
        <main className='timeline'>
            <Header title='Home' />
            <form onSubmit={createNewIdea} className='new-idea-form'>
                <label htmlFor="idea">
                    <img src="https://github.com/SamuelPiasecki.png" alt="Samuel Piasecki" />
                    <textarea
                        id="idea"
                        placeholder='Whats happening?'
                        value={newIdea}
                        onKeyDown={handleHotkeySubmit}
                        onChange={(event) => {
                            setNewIdea(event.target.value)
                        }}
                    />
                </label>

                <button type='submit'>Post your Idea</button>
            </form>
            <Separator />
            {ideas.map(idea => {
                return <Idea key={idea} content={idea} />
            })}
        </main>
    )
}