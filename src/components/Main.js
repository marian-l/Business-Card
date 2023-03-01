function Main() {
    return (
        <div className="main">
            <h3 className="main--name"> Marian Lippold </h3>
            <h4 className="main--profession"> Student </h4>
            <h5 className="main--email"> marian.lippold@gmx.de </h5>

            <a 
            href="../images/contacts.csv" download 
            className="main--csv-download"
            >Download contact.csv-File</a>

            <div className="main--description">
                <h4> Über mich </h4>
                <p>Ich bin Angewandte Informatik und studiere an der Hochschule Mainz Marian Lippold. Ich bin Angewandte Informatik und studiere an der Hochschule Mainz Marian Lippold. </p>
                <h4> Interessen </h4>
                <p> Meine Interessen sind vor allem Zocken, Ficken, Kiffen und Fluchen. </p>
                <h4> Skills </h4>
                <p> Meine Skills sind: </p>
            </div>
        </div>
    )
}

export default Main;