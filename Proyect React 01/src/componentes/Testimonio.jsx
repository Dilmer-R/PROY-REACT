import React from 'react'; // Importacion de react
import '../css/Testimonio.css';

function Testimonio(props) {
	return (
		<div className='contenedor-testimonio'>
			{ <img src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt="images" className='imagen-testimonio'/>}
			<div className='contenedor-texto-testimonio'>
				<p className='nombre-testimonio'><strong>{props.nombre} </strong>en {props.pais}</p>
				<p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
				<p className="texto-testimonio">"{props.testimonio}"</p>
			</div>
		</div>
	);
} 
// Exportacion por defecto:

export default Testimonio;