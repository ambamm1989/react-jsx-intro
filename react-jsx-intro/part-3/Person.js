function Person(props) {
    let voteText = props.age >= 18 ? "Please go vote!" : "you must be 18";

    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn about his hobbies:</p>
            <ul>
                <li>Name: {props.name.slice(0, 5)}</li>
                <li>Age: {props.age}</li>
            </ul>
            <ul>
                hobbies
                    {hobbies}
                </ul>
            <h3>{voteText}</h3>
        </div>
    );
}