import { useState, useEffect } from 'react';

function ButtonWithText() {
    const [buttonName, setButtonName] = useState('показать');
    const [displayText, setDisplayText] = useState('');

    const handleClick = () => {
        setButtonName('скрыть');
        setDisplayText('это текст компонента! он появляется при нажатии на элементы выше');
    };

    return (
        <div>
            <button onClick={handleClick}>{buttonName}</button>
            <p>{displayText}</p>
        </div>
    );
}

function Profile(props) {
    const [showMore, setShowMore] = useState();

    const handleClick = () => {
        setShowMore(!showMore);
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>Profile Info</h2>
            <button onClick={handleClick}>More</button>
            {showMore && (
                <div>
                    <p>Почта: example@gmail.com</p>
                    <p>Статус: пользователь</p>
                    <p>Пароль: qwerty123</p>
                </div>
            )}
        </div>
    );
}

function ClickCoordinates() {
    const [coordinates, setCoordinates] = useState({ x: null, y: null });

    const handleClick = (event) => {
        setCoordinates({ x: event.clientX, y: event.clientY });
    };

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            {coordinates.x && coordinates.y && (
                <p>Last click coordinates: ({coordinates.x}, {coordinates.y})</p>
            )}
        </div>
    );
}

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
    });

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

// export default Example
// export default ClickCoordinates
export default Profile;
// export default ButtonWithText