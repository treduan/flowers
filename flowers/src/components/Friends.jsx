import {useState} from "react";
const FriendsList = ({friends, addPoint}) => {
    return (
        <div>
            <ul>
            {friends.map((f)=> 
            <li key={f.id}>
                {f.name} pisteet: {f.points} 
                <button onClick={e=>addPoint(f.id)}>Lisää piste</button>
            </li>)}
            </ul>
        </div>
    )
}
const Friends = () => {
    const [name, setName] = useState("");
    const [friends, setFriends] = useState([]);

    const addPoint = id => {
        const tempFriends = friends.map(f=>
            f.id === id ? { ...f, points: f.points + 1 } : f
        )
        setFriends(tempFriends);
    }
    const submitHandler = (e, name) => {
        e.preventDefault();
        setFriends([...friends, ({name: name, points: 0, id: Math.floor(Math.random()*100000)})]);
        setName("");
    }
    return (
        <div>
            <p>Kaverit</p>
            <form onSubmit={e=>submitHandler(e, name)}>
                <label htmlFor="name">Nimi: </label>
                <input onChange={e=>setName(e.target.value)} type="text" id="name" value={name}/>
                <input type="submit"/>
            </form>
            <FriendsList friends={friends} addPoint={addPoint}/>
        </div>
    )
}
export default Friends;