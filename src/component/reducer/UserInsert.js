import React, { useReducer, useEffect } from "react";
// import axios from "axios";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    // case 'SET_NAME':
    //   return { ...state, name: action.value };
    // case 'SET_EMAIL':
    //   return { ...state, email: action.value };
    // case 'SET_PASSWORD':
    //   return { ...state, password: action.value };
    case "SET_FIELDS":
      return { ...state, ...action.payload };
    case "INSERT_DATA":
      return { ...state, isLoading: true, error: null };
    case "INSERT_SUCCESS":
      return { ...state, isLoading: false, error: null, data: action.data };
    case "INSERT_ERROR":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

const setFields = (payload) => {
  return {
    type: "SET_FIELDS",
    payload: payload,
  };
};

// Initial state
const initialState = {
  name: "",
  email: "",
  password: "",
  isLoading: false,
  error: null,
  data: null,
};

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "INSERT_DATA" }); // Trigger loading state
    // const data = {name: state.name, email: state.email, password : state.password}
    dispatch({
      type: "INSERT_SUCCESS",
      data: { name: state.name, email: state.email, password: state.password },
    });

    console.log(state);
  };

  useEffect(() => {
    // Handle successful insertion (e.g., clear form, display success message)
    if (state.data) {
      // ...
    }

    // Handle error (e.g., display error message)
    if (state.error) {
      // ...
    }
  }, [state]);

  const handleChange = (field, value) => {
    dispatch(setFields({ [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={state.name}
        // onChange={(e) => dispatch({ type: 'SET_NAME', value: e.target.value })}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={state.email}
        // onChange={(e) => dispatch({ type: 'SET_EMAIL', value: e.target.value })}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={state.password}
        // onChange={(e) => dispatch({ type: 'SET_PASSWORD', value: e.target.value })}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <button type="submit" disabled={state.isLoading}>
        {state.isLoading ? "Inserting..." : "Insert Data"}
      </button>
      {state.error && <div className="error">{state.error}</div>}
      {state.data && <div className="success">Data inserted successfully!</div>}
    </form>
  );
}

export default MyComponent;
