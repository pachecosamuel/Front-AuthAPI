import { api } from "./apiConnection";


const FindById = async (data) => {

    try {
        const user = await api.get(`User/${data}`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            // }
        );
        if (user.status === 200) return user;
        return false;

    } catch (error) {
        alert(error.response.headers.error);
    }

}
export { FindById };
