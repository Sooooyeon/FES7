import React from 'react'
import { useState } from 'react';

function UserItem({ user }) {

    const [showInfo, setShowInfo] = useState(false);



    return (
        <li onClick={()=>{setShowInfo(!showInfo)}}>
            {/* onClick 이벤트 핸들러는 함수의 이름을 넣어줘야함. (함수의 실행 결과가 아닌 함수 자체를 전달해야함!) */}
            {user.name}
            {showInfo ? <div>
                <p>email : {user.email}</p>
                <p>job : {user.job}</p>
            </div> : null}
        </li>
    )
}

function UserList({ users }) {
    return (
        <ul>
            {users.map((item) => {
                return <UserItem key={item.id} user={item} />
            })}
        </ul>
    );
}

export default function App3() {

    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ];


    return (
        <div>
            <h1>User list</h1>
            <UserList users={users} />
        </div>
    )
}