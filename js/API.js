const url = 'http://localhost:4000/clientes';


export const nuevoCliente = async (cliente) => {
    try {
            await fetch(
                    url,
                    { 
                        method: 'POST', 
                        body: JSON.stringify(cliente),
                        headers: {'Content-Type': 'application/json'} 
                    }
            );
            window.location.href = 'index.html';
    } catch (error) {
        console.log(error)
    }
}

export const obtenerClientes = async () => {
    try{
        const resultado = await fetch(url);
        const json = await resultado.json();
        return json;
    }catch(error){
        console.log(error)
    }
}

export const eliminarCliente = async (id) => {
    try{

        await fetch(
                `${url}/${id}`,
                {
                    method: 'DELETE'
                }

        )
    }catch(error){
        console.log(error)
    }
} 