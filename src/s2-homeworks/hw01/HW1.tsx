import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: MessageInType
}
type UserType = {
    avatar: string
    name: string
}

type MessageInType = {
    text: string
    time: string
}
// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg', // можно менять
        name: 'Boss Stanly',  // можно менять
    },
    message: {
        text: 'Big brother watching on you', // можно менять
        time: '22:12', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://android-obzor.com/wp-content/uploads/2022/04/4-7-300x300.jpg', // можно менять
        name: 'Little Any', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:17', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
