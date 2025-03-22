import styles from "../InfoHome/style.module.css";


const InfoHome = () => {
    return(
        <article className={styles.info_container}>
            <h1>ScreenCritic</h1>
            <p>En esta aplicación encontrarás reseñas y opiniones de muchos 
                usuarios para ayudarte a elegir las mejores películas y series 
                para tus tardes. No pierdas tu tiempo con contenido que no 
                vale la pena. Aquí podrás descubrir nuevos títulos, ver sus 
                tráilers, conocer a los actores y mucho más. Además, tendrás 
                la oportunidad de compartir tus opiniones y ayudar a otros a 
                decidir qué ver.
            </p>
        </article>
    )
};

export default InfoHome;