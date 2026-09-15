const WHATSAPP_LINK = "https://wa.me/59157087685?text=Hola%2C%20estoy%20interesado%20en%20uno%20de%20tus%20sets%20de%20Dota%202.";


const sets={
        set1: {
            id: 1,
            nombre: "Shadowleaf Insurgent",
            imagen: "https://www.vikingdota.com/cdn/shop/files/download_5.gif?v=1741724329&width=500",
            heroe: "Hoodwink",
            estado: "Disponible",
            precio: 99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/watch?v=PFD3b1eF63E",
            color: "rojo"

        },
        set2: {
            id: 2,
            nombre: "The King Of Thieves",
            imagen: "https://www.vikingdota.com/cdn/shop/files/download_7_ca998a2c-f8a8-4fa8-8747-8a689b807812.gif?v=1741896097&width=637",
            heroe: "Keeper of the Light",
            estado: "Disponible",
            precio: 15.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set3: {
            id: 3,
            nombre: "Secrets of the Celestial 2020",
            imagen: "https://collectorscachegift.shop/cdn/shop/files/dota-2-skywrath-secrets-of-the-celestial-ti10-cache-2-set.jpg?v=1756965155",
            heroe: "Skywrath Mage",
            estado: "Disponible",
            precio: 20.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set4: {
            id: 4,
            nombre: "Beast of the Crimson Ring",
            imagen: "https://www.vikingdota.com/cdn/shop/files/download_6_d1273950-39fa-44bd-a98e-6d3b35995a34.gif?v=1741895828&width=416",
            heroe: "Bristleback",
            estado: "Disponible",
            precio: 10.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color: "rojo"

        },
        set5: {
            id: 5,
            nombre: "Talons of the Endless Storm",
            imagen: "https://www.vikingdota.com/cdn/shop/files/MgxKRJg.gif?v=1741896316&width=600",
            heroe: "Chaos Knight",
            estado: "Disponible",
            precio: 15.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set6: {
            id: 6,
            nombre: "Origin of the Dark Oath",
            imagen: "https://www.vikingdota.com/cdn/shop/files/giphy_9_07fd2d9e-22d4-4648-b38c-1dd3e2fc389d.gif?v=1741894881&width=400",
            heroe: "Night Stalker",
            estado: "Disponible",
            precio: 20.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set7: {
            id: 7,
            nombre: "Silent slayer",
            imagen: "https://www.vikingdota.com/cdn/shop/files/VvAQ7y4.gif?v=1741891341&width=300",
            heroe: "Silencer ",
            estado: "Disponible",
            precio: 10.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color: "rojo"

        },
        set8: {
            id: 8,
            nombre: "Apocalypse Unbound",
            imagen: "https://static.wikia.nocookie.net/dota2_gamepedia/images/3/31/Apocalypse_Unbound_Preview_1.png/revision/latest?cb=20200703042430",
            heroe: "Ancient Apparition",
            estado: "Disponible",
            precio: 15.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set9: {
            id: 9,
            nombre: "Blacksail Cannoneer",
            imagen: "https://www.vikingdota.com/cdn/shop/files/0T9voqc.gif?v=1741897170&width=600",
            heroe: "Sniper",
            estado: "Disponible",
            precio: 20.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set10: {
            id: 10,
            nombre: "Crown of Calaphas",
            imagen: "https://www.vikingdota.com/cdn/shop/files/giphy_7_89fd5457-1ce3-4d81-b610-465aeb18a96b.gif?v=1741896848&width=400",
            heroe: "Shadow Demon",
            estado: "Disponible",
            precio: 10.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color: "rojo"

        },
        set11: {
            id: 11,
            nombre: "Soul of the Brightshroud",
            imagen: "https://www.vikingdota.com/cdn/shop/files/AdNtzba.gif?v=1741986110&width=500",
            heroe: "Death Prophet",
            estado: "Disponible",
            precio: 15.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set12: {
            id: 12,
            nombre: "Defender of Ruin",
            imagen: "https://www.vikingdota.com/cdn/shop/files/ysY7mIX.gif?v=1741987203&width=600",
            heroe: "Phantom Assassin",
            estado: "Disruptor",
            precio: 20.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set13: {
            id: 13,
            nombre: "Lineage of the Stormlords",
            imagen: "https://www.vikingdota.com/cdn/shop/files/giphy_3_e23fcf23-d53b-4c0d-8e06-85c40392cd18.gif?v=1741889319&width=400",
            heroe: "Juggernaut",
            estado: "Disponible",
            precio: 10.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color: "rojo"

        },
        set14: {
            id: 14,
            nombre: "Herald of the Ember Eye",
            imagen: "https://www.vikingdota.com/cdn/shop/files/f5XIi9Z.gif?v=1741840531&width=600",
            heroe: "Grimstroke",
            estado: "Disponible",
            precio: 15.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set15: {
            id: 15,
            nombre: "Ravenous Abyss",
            imagen: "https://collectorscachegift.shop/cdn/shop/files/dota-2-underlord-ravenous-abyss-ti10-set.jpg?v=1756349941",
            heroe: "Underlord",
            estado: "Disponible",
            precio: 20.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set16: {
            id: 16,
            nombre: "Glory of the Elderflame",
            imagen: "https://i.giphy.com/coBGIAoi4841kXBB1X.gif",
            heroe: "Lina",
            estado: "Disponible",
            precio: 10.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color: "rojo"

        },
        set17: {
            id: 17,
            nombre: "Fissured Flight",
            imagen: "https://dota.adquira.me/wp-content/uploads/2021/02/dota-2-jakiro.jpg",
            heroe: "Jakiro",
            estado: "Disponible",
            precio: 15.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        },
        set18: {
            id: 18,
            nombre: "Carousal of the Mystic Masquerade",
            imagen: "https://www.vikingdota.com/cdn/shop/files/tXb7r56.gif?v=1741896937&width=600",
            heroe: "Rubick",
            estado: "Disponible",
            precio: 20.99,
            descripcion: "Este set incluye un conjunto completo de objetos cosméticos para tu héroe favorito en Dota 2. Mejora tu apariencia y destaca en el campo de batalla con este exclusivo set.",
            video: "https://www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
            color : "morado"
        }
        
    };




const boliviaData = {
    general: {
        nombre: "EL GRAN COLISEO DE BENJAZ",
        imagen: "https://media.esports.gg/uploads/2026/05/IMG_8323-768x960.avif",
        video: "https://kick.com/benjaz",
        mapa: "https://www.eluniversal.com.mx/resizer/v2/CSRETVWI4JBQVJGIBLAIMF56YQ.png?auth=a9700239e2ab4593ff3e2c68f9cbd7a39f7c37b69f5a43e08e4bc40e69f8a8a3&smart=true&height=666",
        video2: "//www.youtube.com/embed/9RTGFWFt5hA?si=GLCYBEEjgsh3ySrw",
        mapa2: "https://www.gstatic.com/marketing-cms/assets/images/08/25/fffdc76145f28be3a1ca63859c4a/external-logo-core-1.png=n-w1860-h1047-fcrop64=1,00000000ffffffff-rw",
        g1url: "https://scontent-lim1-1.cdninstagram.com/v/t51.82787-15/793069696_18130107307735485_9160327058767174797_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=109&ig_cache_key=Mzk3ODUzMTE3NDQ4NjAwNzUxOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTkyMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=PZeFein62VgQ7kNvwFJPWTs&_nc_oc=AdqD0QGdT93F9ak8JSTXZQbN9n6dvLFqF5-9eoopNrnIWLnmy983kOrTcZGngjKLZec&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_gid=4dHwGJ8YbMPPsxh3S3-mRQ&_nc_ss=7a22e&oh=00_AQLwLUd-EDhreWHVm9zz43zqMY4QSza7Mh09xpeIkQgRyg&oe=6AA0C930",
        g2url: "https://scontent-lim1-1.cdninstagram.com/v/t51.82787-15/793901045_18130107298735485_8326156366118222617_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=104&ig_cache_key=Mzk3ODUzMTE3NDkzODk4NDEzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTkyMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=2ReinDxdAIMQ7kNvwHh8XRm&_nc_oc=AdpBYTm-wtym2sa8zVlM5uYtgI02XzhFkYFLOFd44BqZh_jiMBTDN0OeEGEifphzE9Q&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_gid=4dHwGJ8YbMPPsxh3S3-mRQ&_nc_ss=7a22e&oh=00_AQIyc0frNBeU9Aa8UErPd83pRgIgbSqHAxkpLOHYxLZE8A&oe=6AA0BF36",
        tabladepuntos: "https://i.postimg.cc/Bvm9R9Xp/Captura.png"
    },
    
    departamentos: {
        thebots: {
            id: 1,
            nombre: "The Bot$",
            imagen: "https://media.cyberscore.live/static/teams/2026/9/33fa855f-3e5c-45c3-a232-dcd6f233596a.webp",
            video: "https://www.youtube.com/embed/XjyawCcHhQc",
            mapa: "https://media.cyberscore.live/static/teams/2025/6/cb8f3788-8005-411b-b5a4-360e5cbaf3a7.webp",
            generica: "https://media.tycsports.com/files/2025/03/21/823933/como-se-verian-los-personajes-de-dota-2-en-la-vida-real-segun-la-inteligencia-artificial_204x272.webp",
            n1: "lalatronii <",
            n2: "Jacholan",
            n3: "JP",
            n4: "Tmauri",
            n5: "Parker"         
        },
        teamcucharita: {
            id: 4,
            nombre: "Team Cucharita",
            imagen: "https://media.cyberscore.live/static/teams/2026/9/5b9d90e9-4269-47ce-935a-2eb1bf47721b.webp",
            video: "https://www.youtube.com/embed/V871IYGsa-s?si=5IZbZicl8hXQH4fY",
            mapa: "https://media.cyberscore.live/static/teams/2025/6/cb8f3788-8005-411b-b5a4-360e5cbaf3a7.webp",
            generica: "https://media.tycsports.com/files/2025/03/21/823933/como-se-verian-los-personajes-de-dota-2-en-la-vida-real-segun-la-inteligencia-artificial_204x272.webp",
            n1: "on my way",
            n2: "Hermit",
            n3: "Hoxhi",
            n4: "SustentoSB",
            n5: "Shaka"
           
        },
        fuerzasgayniu: {
            id: 5,
            nombre: "Fuerzas GAYniu",
            imagen: "https://media.cyberscore.live/static/teams/2026/9/7f8da013-dd88-42b8-96f9-5a6352ebf5b7.webp",
            video: "https://www.youtube.com/embed/AyOtlWnb0As?si=UNrThAPMdLsvKMhj",
            mapa: "https://media.cyberscore.live/static/teams/2025/6/cb8f3788-8005-411b-b5a4-360e5cbaf3a7.webp",
            generica: "https://media.tycsports.com/files/2025/03/21/823933/como-se-verian-los-personajes-de-dota-2-en-la-vida-real-segun-la-inteligencia-artificial_204x272.webp",

            n1: "F-Young",
            n2: "RyuDota",
            n3: "Rasec",
            n4: "Lana del rey",
            n5: "DotaGAYmer"
           
        }
    }
};

function App() {
    const [currentView, setCurrentView] = React.useState('bolivia');
    
    const renderMainPage = () => (
        <div>
            
           <div className="video-hero-wrapper">

  <video 
    className="video-hero-bg"
    autoPlay 
    loop 
    muted 
    playsInline
    poster="/img/poster.jpg" 
  >
    <source src="https://cdn.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm" type="video/webm" />
    
  </video>

  <div className="video-hero-overlay"></div>

  <div className="video-hero-content">
    <h1 className="video-hero-title">
      MI TIENDA DOTA 2 <br/>
    </h1>
    
  </div>
  </div>

  <br/>
  <br/>
  <div className="video-hero-title2"> <h2>Sets cache, cuentas y mas... </h2> </div>
  <br/>
  <br/>
  <br/>

   <div className="sets-section">
        {Object.values(sets).map((set) => (
          <div key={set.id} className="set-card">
            <div className="marquee"><span>{set.nombre} — {set.heroe} — </span></div>
            <div className="img-box" onClick={() => window.open(set.video, '_blank')}>
              <img src={set.imagen} alt={set.nombre} />
            </div>
            <div className="footer">
              <a href="https://wa.me/59157087685?text=Hola%2C%20estoy%20interesado%20en%20uno%20de%20tus%20sets%20de%20Dota%202." target="_blank" className="btn-comprar">comprar</a>
              <span className="costo">{set.precio} Bs</span>
            </div>
          </div>
        ))}
      </div>
  <br/>
  <br/>
  <br/>


{/*       
<div className="split-media-layout">
  
  <div className="split-media-main">
   
    <video className="split-media-gif" autoPlay loop muted playsInline>
      <source src="https://cdn.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.webm?undefined" type="video/webm" />
    </video> 
    
  </div>

  

  
  <nav className="split-media-nav">
    <ul className="split-media-nav-list">
      <li>
        <button className="split-media-nav-card" onClick={() => setCurrentView('teams')}>
          <img className="split-media-nav-icon" src="https://cdn-icons-png.flaticon.com/512/2674/2674996.png" alt="" />
          <span className="split-media-nav-label">CUENTAS</span>
        </button>
      </li>
      <li>
        <button className="split-media-nav-card" onClick={() => setCurrentView('grupos')}>
          <img className="split-media-nav-icon" src="https://png.pngtree.com/png-clipart/20250415/original/pngtree-vs-battle-png-image_20770212.png" alt="" />
          <span className="split-media-nav-label">BOSTEO</span>
        </button>
      </li>
      <li>
        <button className="split-media-nav-card" onClick={() => setCurrentView('playoffs')}>
          <img className="split-media-nav-icon" src="https://png.pngtree.com/png-clipart/20250421/original/pngtree-cross-icon-wrong-sign-vector-with-transparent-background-png-image_20826131.png" alt="" />
          <span className="split-media-nav-label">INMORTALE</span>
        </button>
      </li>
      <li>
        <button className="split-media-nav-card" onClick={() => setCurrentView('coliseopasado')}>
          <img className="split-media-nav-icon" src="https://cdn-icons-png.flaticon.com/512/61/61469.png" alt="" />
          <span className="split-media-nav-label">JFJFJ</span>
        </button>
      </li>
      <li>
        <button className="split-media-nav-card" onClick={() => setCurrentView('organizadores')}>
          <img className="split-media-nav-icon" src="https://cdn-icons-png.flaticon.com/512/2674/2674996.png" alt="" />
          <span className="split-media-nav-label">CONTACTAR</span>
        </button>
      </li>
    </ul>
  </nav>
  <br/>
  <br/>
</div>
        */}             
          
            <br/>  
             <br/>  
            {/* 
            <div className="media-container">
                <div className="video-container">
                    <iframe 
                        src={boliviaData.general.video2}
                        title="Video de Bolivia"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-container">
                    <iframe 
                        src={boliviaData.general.video}
                        title="Video de Bolivia"
                        allowFullScreen
                    ></iframe>
                </div>
              
                

            </div>
            */}   
            <br/>
            <div className="letras" >
                
                </div>


        </div>
    );
    
    const renderDepartmentPage = (deptoKey) => {
        const depto = boliviaData.departamentos[deptoKey];

    if (!depto) return <p>Equipo no encontrado</p>;

    
    const jugadores = [depto.n1, depto.n2, depto.n3, depto.n4].filter(Boolean);
        
        return (
            <div>
                <button 
                    className="btn back-btn"
                    onClick={() => setCurrentView('bolivia')}
                >
                    ← Volver al menu principal
                </button>
                <br />
                <button 
                    className="btn back-btn"
                    onClick={() => setCurrentView('teams')}
                >
                    ← Volver a equipos
                </button>
                
                <h2 className="video-hero-title2">{depto.nombre}</h2>

                

                <img 
                    src={depto.imagen} 
                    alt={`Mapa de ${depto.nombre}`} 
                    className="sub-image"
                />                              


                <div className="forja-omni-grimorio">
        

            <div className="forja-omni-grimorio__grid">
                {jugadores.map((nombre, index) => (
                    <div key={`${deptoKey}-${index}`} className="forja-omni-card">
                        <img
                            src={depto.generica}
                            alt={nombre}
                            className="forja-omni-card__imagen"
                        />
                        <p className="forja-omni-card__nombre">{nombre}</p>
                    </div>
                ))}
            </div>
        </div>
    
                <div className="info-section">
                    <div className="info-grid">
                        <div className="info-item">
                            <h3>pagina en desarrollo</h3>
                        </div>
                        
                        
                    </div>
                </div>
                
                
                
            </div>
        );
    };

    const renderTeams = () => (
        
            <div>      
                 <button  
                 className="btn"
                 onClick={() => setCurrentView('bolivia')}>
                 ← Volver al menu principal
                 </button>

                

                <div className="botones-grid">
                  {Object.keys(boliviaData.departamentos).map(depto => (
                     <button 
                       key={depto} 
                       className="boton-imagen"
                       onClick={() => setCurrentView(depto)}
                     >
                     <img src={boliviaData.departamentos[depto].imagen} />
                     <h4 className="boton-imagennombre">{boliviaData.departamentos[depto].nombre}</h4>
                     </button>

      ))}
    </div>

            </div>
    );

    const renderGrupos = () => (
        
            <div>      
                 <h2>Fase de Grupos</h2>
                 <button  
                 className="btn"
                 onClick={() => setCurrentView('bolivia')}>
                 ← Volver al menu principal
                 </button>
   
                 <img className="grupos-img" src={boliviaData.general.g1url} />
                 <img className="grupos-img" src={boliviaData.general.g2url} />
                 <img className="grupos-img1" src={boliviaData.general.tabladepuntos} />

                 <p>pagina en desarrollo mis kongs</p>
            </div>
    );

    const renderPlayOffs = () => (
        
            <div>      
                 <h2>Play Offs</h2>
                 <button  
                 className="btn"
                 onClick={() => setCurrentView('bolivia')}>
                 ← Volver al menu principal
                 </button>
                 <p>pagina en desarrollo mis kongs</p>
            </div>
    );

    const renderColiseoPasado = () => (
        
            <div>      
                 <h2>Coliseo Pasado</h2>
                 <button  
                 className="btn"
                 onClick={() => setCurrentView('bolivia')}>
                 ← Volver al menu principal
                 </button>
                 <br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rRtP4H9XDx8?si=rm1N_LVJfdr6kXyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                 <p>pagina en desarrollo mis kongs</p>
            </div>
    );

    const organizadores = () => (
        
            <div>      
                 <h2>Organizadores</h2>
                 <button  
                 className="btn"
                 onClick={() => setCurrentView('bolivia')}>
                 ← Volver al menu principal
                 </button>
                 <p>pagina en desarrollo mis kongs</p>
            </div>
    );

    
    
    return (
        <div className="container">
            
            
            <main>
                {
                currentView === 'bolivia'? renderMainPage() :
                currentView === 'teams'? renderTeams() :
                currentView === 'grupos'? renderGrupos() :
                currentView === 'playoffs'? renderPlayOffs() :
                currentView === 'coliseopasado'? renderColiseoPasado() :
                currentView === 'organizadores'? organizadores() :
                renderDepartmentPage(currentView)
                }
                <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


            </main>
            
        </div>
        
    );
}


ReactDOM.render(<App />, document.getElementById('root'));