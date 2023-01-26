function App() {
    return (
    <div>
        <Person
           name="Toni"
           age={46}
           hobbies={["watching tv, collecting newpapers, makes pickles"]}
           />
        <Person name="Skip" age={65} hobbies={["old movies, bird watching"]}
           />
        <Person
        name="Seth"
        age={29}
        hobbies={["playing games, collecting movies, legos"]}
            />
        <Person
            name="jake"
            age={34}
            hobbies={["working out, books, cooking"]}
            />
    </div>
    );
}