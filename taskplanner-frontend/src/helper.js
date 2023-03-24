// import Cookies from "js-cookie";
export async function fetchApi(endpoint, model) {

    const response = await fetch("http://localhost:3000/api" + endpoint, {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
    });

    return  response;
}


export async function fetchApiWithToken(endpoint, model) {

    // const token = Cookies.get("token");

    const response = await fetch("http://localhost:3000/api" + endpoint, {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
    });

    return  response;
}