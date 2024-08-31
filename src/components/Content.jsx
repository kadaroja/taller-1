const Content = () => {
    return (
        <main>
            <div className="inicio">
                <section >
                    <h1>Yoga</h1>
                    <p>Es una práctica que conecta el cuerpo, la respiración y la mente. Esta práctica utiliza posturas físicas, ejercicios de respiración y meditación para mejorar la salud general.</p>
                    <h1>Pilates</h1>
                    <p>Es un método de ejercicio y movimiento físico. Su objetivo es fortalecer y equilibrar cuerpo y mente. Es un conjunto de movimientos controlados en colchonetas y maquinas.</p>
                    <h1>Tai Chi</h1>
                    <p>Suele combinar movimientos suaves con técnicas de respiración, concentración mental y relajación. Estos movimientos pueden adaptarse y practicarse al caminar, estando de pie o sentado.</p>                    
                </section>
            </div>
            <aside className="imagenes">
                <img src="https://files.nccih.nih.gov/yoga-gettyimages-1204500395-16-9.jpg" alt="Yoga" />
                <img src="https://www.pilates.de/media/catalog/product/cache/23d03fb575cb5e0b77f2774d540a42e5/b/a/balanced-body_studio-reformer-03.jpg" alt="Pilates" /> 
                <img src="https://i.insider.com/65ca67066fcb546d2d4e9c4f?width=1136&format=jpeg" alt="Tai Chi"/>
            </aside>
        </main>
    )
}

export default Content