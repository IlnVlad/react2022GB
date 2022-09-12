import '../App.css'
import { useStateq } from 'react'
export const MessageList = () => {
    const [messageArch, setMessageArch] = useState([]);
    const [message, setMessage] = useState({})
    const handleChange = ev => {
        const { name, value } = ev.target;
        setMessage(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const addToList = () => {
        let copy = messageArch;
        copy.push(message);
        setMessageArch(copy);
    }
    return <>
        <span>Автор:</span>
        <br />
        <input type="text" onChange={handleChange} value={message.author} name='author' />
        <br />
        <span>Сообщение: </span>
        <br />
        <input type="text" onChange={handleChange} value={message.text} name='text' />
        <br />
        <button type="button" onClick={addToList}>Отправить</button>
        <p>Архив Сообщений: </p>
        {messageArch.map((item, id) => <p key={id}>{item.author}: {item.text}</p>)}
    </>

}