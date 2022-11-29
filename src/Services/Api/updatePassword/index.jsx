import { api } from "../apiConnection";
import { toast } from 'react-toastify';


const UpdatePassword = async (email, password, newPassword) => {
    try {
        const user = await api.put(`User/pass/`, {
            personalEmail: email,
            oldPassword: password,
            newPassword: newPassword
        }
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            // }
        );
        if (user.status === 200) return true;

    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message)
    }

}
export { UpdatePassword };