import { useState } from "react";
import styled from "styled-components";

const CreateTwiteroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  & form {
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 5px solid black;
    box-shadow: 2px 2px 31px 6px rgba(0, 0, 0, 0.48);
    border-radius: 10px;
    width: 200px;
    height: 300px;
    text-align: center;
    margin-top: 10px;
    list-style: none;
    align-items: center;

    & input {
      margin: 5px;
      width: 100px;
    }
  }
`;
const NewTwitero = () => {
  const blankFields = { name: "", username: "" };

  const [formData, setFormData] = useState(blankFields);
  const resetForm = () => {
    setFormData(blankFields);
  };

  const newTwitero = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://tuitah-alejandro-albert.herokuapp.com/tuiteros/new",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    resetForm();
  };
  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <CreateTwiteroContainer>
      <form onSubmit={newTwitero} noValidate autoComplete="off">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder="Name"
        />

        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder="Username"
        />

        <button type="submit">CREATE</button>
      </form>
    </CreateTwiteroContainer>
  );
};

export default NewTwitero;
