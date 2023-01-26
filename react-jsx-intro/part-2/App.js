function App() {
    return (
        <div>
            <Tweet
                name="Jacob Stinkl"
                username="JBStink"
                date={new Date().toDateString()}
                message="Aliens are REAL!"
            />
            <Tweet
                name="Apple mutangle"
                username="Appleslash"
                date={new Date().toDateString()}
                message="Life's hard when you are an Apple."
            />
            <Tweet
                name="Jeb Jingles"
                username="JebLINGLING"
                date={new Date().toDateString()}
                message="Jingle to Jeb Jingles!"
                />
        </div>
    );
}