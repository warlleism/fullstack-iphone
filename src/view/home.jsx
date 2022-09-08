import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import './style.scss'


const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/listar")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })

    }, [])

    const showContent = (value, cor) => {

        showOutline(value, cor)

        const imgAzul = document.getElementById("img1")
        const imgEstrelar = document.getElementById("img2")
        const imgMeiaNoite = document.getElementById("img3")
        const imgRosa = document.getElementById("img4")
        const imgVerde = document.getElementById("img5")
        const imgVermelha = document.getElementById("img6")

        imgAzul.style.opacity = value == "azul" ? 1 : 0
        imgMeiaNoite.style.opacity = value == "meianoite" ? 1 : 0
        imgRosa.style.opacity = value == "rosa" ? 1 : 0
        imgEstrelar.style.opacity = value == "estrelar" ? 1 : 0
        imgVerde.style.opacity = value == "verde" ? 1 : 0
        imgVermelha.style.opacity = value == "vermelho" ? 1 : 0
    }

    const showOutline = (value, cor) => {

        const azul = document.getElementById("azul")
        const estrelar = document.getElementById("estrelar")
        const meianoite = document.getElementById("meianoite")
        const rosa = document.getElementById("rosa")
        const verde = document.getElementById("verde")
        const vermelho = document.getElementById("vermelho")
        const botao = document.getElementById("botao")

        setTimeout(() => {
            botao.style.backgroundColor = cor
            azul.style.outline = value == 'azul' ? `solid 4px ${cor}` : ""
            estrelar.style.outline = value == 'estrelar' ? `solid 4px ${cor}` : ""
            meianoite.style.outline = value == 'meianoite' ? `solid 4px ${cor}` : ""
            rosa.style.outline = value == 'rosa' ? `solid 4px ${cor}` : ""
            verde.style.outline = value == 'verde' ? `solid 4px ${cor}` : ""
            vermelho.style.outline = value == 'vermelho' ? `solid 4px ${cor}` : ""
        }, 10)

    }

    useEffect(() => {
        showOutline()
    }, [])

    return (
        <>
            {data?.length == 0 ?
                <div style={{ height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ColorRing
                        visible={true}
                        height="130"
                        width="130"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                </div>
                :
                <>
                    {data[0]?.map((e) => {
                        return (
                            <div className='main'>
                                <div className='container-descricao'>
                                    <div className='texto1'>{e?.nome}</div>
                                    <div className='texto2'>{e?.titulo}</div>
                                    <div className='texto3'>{e?.specs}</div>
                                    <div className='texto4'>A partir de {e?.preco}</div>
                                    <div id='botao' className='texto5'>Comprar</div>
                                </div>
                                <div className='container-imagens'>
                                    <img id='img1' src={`data:image/png;base64,${e?.imagemAzul}`} />
                                    <img id='img2' src={`data:image/png;base64,${e?.imagemEstrelar}`} />
                                    <img id='img3' src={`data:image/png;base64,${e?.imagemMeiaNoite}`} />
                                    <img id='img4' src={`data:image/png;base64,${e?.imagemRosa}`} />
                                    <img id='img5' src={`data:image/png;base64,${e?.imagemVerde}`} />
                                    <img id='img6' src={`data:image/png;base64,${e?.imagemVermelho}`} />
                                </div>
                            </div>
                        )
                    })}

                    <div className='lista-cores'>
                        <ul>
                            <div className='container-lista'>
                                <li>
                                    <div onClick={() => showContent('azul', '#276787')} id='azul' className='Circle' style={{ backgroundColor: "#276787" }}></div>
                                    <div>Azul</div>
                                </li>
                                <li>
                                    <div onClick={() => showContent("estrelar", '#dcdbda')} id='estrelar' className='Circle' style={{ backgroundColor: "#dcdbda" }}></div>
                                    <div>Estrelar</div>
                                </li>
                                <li>
                                    <div onClick={() => showContent("meianoite", '#232a31')} id='meianoite' className='Circle' style={{ backgroundColor: "#232a31" }}></div>
                                    <div>Meia-Noite</div>
                                </li>
                                <li>
                                    <div onClick={() => showContent("rosa", '#faddd7')} id='rosa' className='Circle' style={{ backgroundColor: "#faddd7" }}></div>
                                    <div>Rosa</div>
                                </li>
                                <li>
                                    <div onClick={() => showContent("verde", '#394c38')} id='verde' className='Circle' style={{ backgroundColor: "#394c38" }}></div>
                                    <div>Verde</div>
                                </li>
                                <li>
                                    <div onClick={() => showContent("vermelho", '#bf0013')} id='vermelho' className='Circle' style={{ backgroundColor: "#bf0013" }}></div>
                                    <div>Vermelho</div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </>

            }


        </>
    );
}

export default Home;
