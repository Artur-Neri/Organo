import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} required={props.obrigatorio} valor={props.valor}>
                <option value='' />
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;