import { ImgHTMLAttributes } from 'react';
import styles from './input.module.css';

type Props = {
    placeholder: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type?: string;
    title: string;
};

const Input = (props: Props) => {
    const { name, title, value, onChange, placeholder, onSubmit, type = '' } = props;

    return (
        <div className={styles.main}>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={styles.input}
                title={title}
            />
            <button style={{ background: 'none', border: '0px' }} onClick={onSubmit}>
                <img src="/enter.svg" alt="Enter Icon" className={styles.icon} />
            </button>
        </div>
    );
};

export default Input;
