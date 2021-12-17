import axios from "axios";
import * as actions from "../actions";

const api =
    ({ dispatch }) =>
        (next) =>
            async (action) => {
                console.log("Middleware action: " + String(action.type));
                if (action.type !== actions.apiCallBegan.type) return next(action);

                const { url, method, data, onStart, onSuccess, onError } =
                    action.payload;

                if (onStart) dispatch({ type: onStart });

                next(action);

                try {
                    console.log("Axios Req");
                    const response = await axios.request({
                        baseURL: "http://127.0.0.1:3000/",
                        url,
                        method,
                        data,
                    });
                    // General
                    dispatch(actions.apiCallSucess(response.data));
                    // Specific
                    if (onSuccess)
                        dispatch({ type: onSuccess, payload: response.data });
                } catch (error) {
                    // General
                    dispatch(actions.apiCallFailed(error.message));
                    // Specific
                    if (onError) dispatch({ type: onError, payload: error.message });
                }
            };

export default api;