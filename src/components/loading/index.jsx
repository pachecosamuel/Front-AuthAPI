import { Spinner } from "react-bootstrap"

export const LoadingComponent = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <span>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /> Carregando...
            </span>
        </div>
    )
}