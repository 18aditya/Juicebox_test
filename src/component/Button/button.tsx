import { MouseEventHandler } from 'react'
import styles from './button.module.css'

type props = {
    text: string,
    type: 'main' | 'secondary' | 'tertiary'
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: props) => {
    const { text, type, onClick } = props

    const buttonStyle = () => {
        switch (type) {
            case 'main':
                return styles.main
            case 'secondary':
                return styles.secondary
            default:
                return styles.tertiary
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBlock: '20px' }}>
            <button className={buttonStyle()} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

