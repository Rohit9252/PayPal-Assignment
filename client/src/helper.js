import Cookies from "js-cookie";
export async function fetchApi(endpoint, model) {

    const response = await fetch("https://task-planner-txcg.onrender.com/api" + endpoint, {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
    });

    return  response;
}


export async function fetchApiWithToken(endpoint, model) {

    const token = Cookies.get("token");

    const response = await fetch("https://task-planner-txcg.onrender.com/api" + endpoint, {

        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
    });

    return  response;
}


export async function fetchApiGetWithToken(endpoint) {

    const token = Cookies.get("token");

    const response = await fetch("https://task-planner-txcg.onrender.com/api" + endpoint, {

        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
        },
    });

    return  response;
}



