import React from 'react'

const FormContact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
    }
    return (
        <form onSubmit={ handleSubmit }>
            <div className="form-group">
                <h6>
                    Nombre y apellido:
                </h6>
                <input
                    type="text"
                    autoComplete="off"
                    className="form-control is-invalid"
                />
                <div className="invalid-feedback">Example invalid feedback text</div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <h6>
                        Email:
                    </h6>
                    <input
                        type="email"
                        className="form-control"
                    />
                </div>
                <div className="form-group col-md-6">
                    <h6>
                        Telefono:
                    </h6>
                    <input
                        type="number"
                        autoComplete="off"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="form-group">
                <h6>
                    Mensaje:
                </h6>
                <textarea 
                    className="form-control"
                    rows="3"
                />
            </div>

            <div className="form-group">
            
                <button 
                    className="form-control btn btn-primary"
                    type="submit"
                >
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default FormContact
