import { React } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { AiOutlineSearch } from "react-icons/ai";
import { ContainerSearch } from "./style";

function SearchComponent({ filterBySearch }) {
    return (
        <ContainerSearch>
            <InputGroup
                className="mb-3"
                onChange={(event) => filterBySearch(event.target.value)}
            >
                <InputGroup.Text><AiOutlineSearch /></InputGroup.Text>
                <Form.Control placeholder="Busca..." />
            </InputGroup>
        </ContainerSearch>
    );
}

export default SearchComponent;