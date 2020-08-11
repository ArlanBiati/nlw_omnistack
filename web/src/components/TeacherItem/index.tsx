import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/43690080?s=460&u=671312ce6fec36b5d95ffe46c625402c87acec0b&v=4" alt="Arlan Biati"/>
                <div>
                    <strong>Arlan Biati</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam officiis, unde doloremque nesciunt minus! Dolores ullam ea quo ipsum, dolor nisi minus reprehenderit qui, illum ipsa sunt labore in!
                <br></br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus atque illo illum, quam perferendis accusantium deserunt hic vero eius error magnam? Ratione aliquid iure facere ullam porro adipisci deleniti enim.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem

