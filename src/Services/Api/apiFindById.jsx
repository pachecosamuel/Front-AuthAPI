import { api } from "./apiConnection";

const FindById = async (id) => {

    try {
        const user = await api.get(`User/${id}`,
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
        console.log();(error.response.headers.error);
    }

}
export { FindById };
