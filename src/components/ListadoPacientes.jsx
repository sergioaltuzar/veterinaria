import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
        <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        
        
    </div>
  )
}

export default ListadoPacientes
