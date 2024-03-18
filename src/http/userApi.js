import {$host} from "./index";

const registration = async (obj) => {
    const {data} = await $host.post('/user/registration', obj)
    return {data}
}

export {
    registration
}