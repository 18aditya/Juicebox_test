import style from './form.module.css'

type props = {
    text: string;
}
const Form = (props: props) => {
    const { text } = props
    return (
        <h4 className={style.formCaption}>
            {text}
        </h4>
    )
}
export default Form