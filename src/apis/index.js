import axios from "axios"
import { BASE_URL, environmentId, projectId } from "./config"

export const getEmployeeList = async ({ limit, offset }) => {
    try {
        const res = await axios.get(`${BASE_URL}?limit=${limit}&offset=${offset}`, {
            headers: {
                "projectId": projectId,
                "environmentId": environmentId
            }
        })
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}

export const getEmployeeDetails = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}/${id}`, {
            headers: {
                "projectId": projectId,
                "environmentId": environmentId
            }
        })
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteEmployee = async (id) => {
    try {
        const res = await axios.delete(`${BASE_URL}/${id}`, {
            headers: {
                "projectId": projectId,
                "environmentId": environmentId
            },
            data: {}
        })
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}

export const addEmployee = async ({name, line1, city, country, zip, contact_type, value}) => {
    try {
        const res = await axios.post(`${BASE_URL}`,
            {
                name,
                address: {
                    line1,
                    city,
                    country,
                    zip
                },
                contact_method: {
                    contact_type,
                    value
                }
            },
            {
                headers: {
                    "projectId": projectId,
                    "environmentId": environmentId
                }
            }
        );
        return res;
    } catch (error) {
        throw new Error(error);
    }
}