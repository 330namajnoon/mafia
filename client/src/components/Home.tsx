import "../styles/home.scss";
function Home() {
    return ( 
        <div className="home_container">
            <a href="/admin">
                <input type="button" value="ADMIN" />
            </a>
            <a href="/user">
                <input type="button" value="USER" />
            </a>
        </div>
     );
}

export default Home;