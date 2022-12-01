import { useParams } from "react-router-dom";

export const EditUser = () => {
    const params = useParams();
    const userId = params.userId;

    return (
        <div>
            {userId}
        </div>

    )
}