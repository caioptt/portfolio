import {
    useEffect,
    useState
} from "react"

import {
    useLocation,
    useNavigate
} from "react-router-dom"

import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa"

import "./Sidebar.css"

export function Sidebar() {

    const navigate = useNavigate()
    const location = useLocation()

    const [activeSection, setActiveSection] =
        useState("sobre")


    const menuItems = [
        {
            label: "SOBRE",
            id: "sobre"
        },
        {
            label: "PROJETOS",
            id: "projetos"
        },
        {
            label: "CONTATO",
            id: "contato"
        }
    ]

    useEffect(() => {

        /*
          O scroll spy só deve funcionar
          na página principal
        */
        if (location.pathname !== "/") {
            return
        }

        const sections =
            document.querySelectorAll<HTMLElement>(
                "[data-section]"
            )

        if (!sections.length) {
            return
        }


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            setActiveSection(
                                entry.target.id
                            )

                        }

                    })

                },
                {
                    root: null,

                    /*
                      Define uma faixa central da tela
                      para identificar a seção ativa
                    */
                    rootMargin:
                        "-30% 0px -55% 0px",

                    threshold: 0
                }
            )


        sections.forEach(section => {
            observer.observe(section)
        })


        return () => {
            observer.disconnect()
        }

    }, [location.pathname])



    function scrollToSection(id: string) {

        function scroll() {

            const section =
                document.getElementById(id)

            if (!section) {
                return
            }

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })

            setActiveSection(id)
        }


        /*
          Se estiver dentro da página
          de detalhes de algum projeto
        */
        if (location.pathname !== "/") {

            navigate("/")

            /*
              Aguarda o Portfolio renderizar
              para depois procurar a seção
            */
            setTimeout(() => {
                scroll()
            }, 150)

            return
        }


        scroll()
    }


    return (
        <aside className="sidebar">

            <div className="sidebar-content">




                <div className="sidebar-intro">
                    <h3 className="sidebar-name">
                        Caio Pereira
                    </h3>
                    <h2>
                        Front-end Developer
                    </h2>

                    <p>
                        Crio interfaces Web responsivas, performáticas e integradas a APIs. 
                        
                    </p>
                    <p> Com foco em tecnologia, experiência e produto.</p>

                </div>


                <nav className="sidebar-navigation">

                    {menuItems.map(item => (

                        <button
                            type="button"
                            key={item.id}

                            onClick={() =>
                                scrollToSection(item.id)
                            }

                            className={
                                activeSection === item.id
                                    ? "sidebar-link active"
                                    : "sidebar-link"
                            }
                        >

                            <span
                                className="sidebar-line"
                            />

                            <span
                                className="sidebar-label"
                            >
                                {item.label}
                            </span>

                        </button>

                    ))}

                </nav>


                <div className="sidebar-social">

                    <a
                        href="https://github.com/caioptt"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>


                    <a
                        href="https://www.linkedin.com/in/caiodevpereira/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                </div>

            </div>

        </aside>
    )
}