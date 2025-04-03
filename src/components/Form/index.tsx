import React from "react";
import Input from "../Input";
import { PlayCircleIcon } from "lucide-react";
import Button from "../Button";
import Cycles from "../Cycles";

export default function index() {
  return (
    <form action="" className="form">
      <div className="formRow">
        <Input
          id="123"
          type="text"
          labelText="Teste"
          placeholder="Digite Algo"
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <Button icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
