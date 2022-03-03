import { useState } from "react";
import styled from "styled-components";

const TwitCard = styled.div`
  border-radius: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 100px;
  align-items: center;
  background-color: #9ec3ff;
  border: 3px solid black;
  gap: 20px;
  color: #fff;
  padding: 10px;
  flex-direction: column;
  box-shadow: 2px 2px 31px 6px rgba(0, 0, 0, 0.48);

  & h1 {
    position: absolute;
    top: 0px;
    left: 20px;
    margin-top: 0px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  & p {
    color: #f5cf11;
    font-size: 50px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    position: absolute;
    top: 50px;
    text-align: left;
    width: 90%;
    margin-top: 10px;
  }
  & button {
    color: #000;
    background-color: #f5cf11;
    position: absolute;
    top: -10px;
    right: 10px;
    font-size: 15px;
    border: none;
    padding: 0;
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid #000;
    height: 50px;
    width: 80px;
  }
  & .borrado {
    height: 40px;
    width: 100px;
    position: absolute;
    z-index: 1;
    top: -10px;
    color: red;
    font-size: 20px;
  }
  & .edit {
    height: 40px;
    width: 80px;
    position: absolute;
    top: 70px;
    font-size: 20px;
  }
`;

const AllContainer = styled.div`
  position: relative;
  width: 420px;
  height: 120px;
`;
const EditContainer = styled.div`
  position: absolute;
  top: -7px;
  width: 100%;
  height: 100%;
  background-color: #9ec3ff;
  border: 3px solid black;
  box-shadow: 2px 2px 31px 6px rgba(0, 0, 0, 0.48);
  border-radius: 10px;
  margin: 0;
  padding: 0;

  & button {
    color: #000;
    background-color: #f5cf11;
    position: absolute;
    top: -10px;
    right: 10px;
    font-size: 15px;
    border: none;
    padding: 0;
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid #000;
    height: 50px;
    width: 80px;
    position: absolute;
    top: 70px;
    font-size: 20px;
  }

  & form {
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    border-radius: 10px;
    text-align: center;
    margin-top: 10px;
    list-style: none;

    & input {
      margin: 5px;
      width: 100px;
    }
  }
`;

const Twitero = ({ twitero }) => {
  const [borrado, setBorrado] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [idBorrado, setIdBorrado] = useState("");
  const blankFields = { name: "", username: "" };

  const [formData, setFormData] = useState(blankFields);
  const resetForm = () => {
    setFormData(blankFields);
  };

  const sendEditTwitero = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://tuitah-alejandro-albert.herokuapp.com/tuiteros/${twitero._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    setHidden(!hidden);
    resetForm();
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const deleteTwitero = async () => {
    const response = await fetch(
      `http://localhost:4000/tuiteros/${twitero._id}`,
      {
        method: "DELETE",
      }
    );
    setBorrado(true);
    setIdBorrado(twitero._id);
  };

  const editTwitero = () => {
    setHidden(!hidden);
  };

  return (
    <AllContainer>
      <TwitCard>
        <h1>{twitero.username}</h1>
        <p>{twitero.name}</p>
        {idBorrado === twitero._id && (
          <p className="borrado">
            Hola Mario, se ha borrado pero tienes que refrescar
          </p>
        )}
        <button onClick={deleteTwitero}>DELETE</button>
        <button
          className={hidden ? "edit" : "edit hidden"}
          onClick={editTwitero}
        >
          EDIT
        </button>
      </TwitCard>
      <EditContainer className={hidden ? "edit hidden" : "edit"}>
        <form onSubmit={sendEditTwitero} noValidate autoComplete="off">
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

          <button type="submit">SEND</button>
        </form>
      </EditContainer>
    </AllContainer>
  );
};

export default Twitero;
