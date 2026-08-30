import './style.css'

interface CardProps {
    children: React.ReactNode; // <--- Recebe um conteúdo interno, por exemplo uma imagem,
}


function DefaultCard({children}: CardProps) { // <--- Uso dele dentro
    return (
        <button className='cardDefault'>
            {children}
        </button>
    )
}

export default DefaultCard