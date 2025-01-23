'use client'
import styles from './header.module.css'
import { Icon } from '../Icon';
import { useStateContext } from '@/context/context';

export const Header = () => {
    const { state } = useStateContext()

    return (
        <div className={styles.header}>
            {state.screen !== 0 ? <Icon type='back' /> : <div></div>}
            <h1 className={styles.headerItem}>Juicebox</h1>
            <Icon type='refresh' />
        </div>
    )
}

export default Header