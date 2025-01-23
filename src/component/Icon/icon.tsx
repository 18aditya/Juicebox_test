'use client'
import styles from './icon.module.css'

type props = {
    type: 'refresh' | 'back'
}

export const Icon = (prop: props) => {
    const { type } = prop

    const handleBack = () => {
        window.location.reload();
    }

    return (
        <div className={styles.icon} onClick={() => type === 'back' ? handleBack() : null}>
            <img src={`./${type}.svg`} width='13.3px' height='13.3px' />
        </div>
    )
}