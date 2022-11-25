import { React } from "react";
import Form from "react-bootstrap/Form";

import { ContainerPagination } from "./style";
import {
    MdNavigateNext,
    MdNavigateBefore,
    MdLastPage,
    MdFirstPage,
} from "react-icons/md";

function PaginationComponent({
    selectValue,
    setSelectValueChange,
    registros,
    currentPage,
    setCurrentPage
}) {
    return (
        <ContainerPagination>
            <Form.Select
                className="select-per-page"
                value={selectValue}
                onChange={(event) => setSelectValueChange(event.target.value)}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </Form.Select>
            <div>
                <span>Total de registros: {registros.length}</span>
            </div>
            <div className="area-paginacao">
                <div>
                    <MdFirstPage
                        onClick={(event) =>
                            currentPage === 1
                                ? function () {
                                    return;
                                }
                                : setCurrentPage(1)
                        }
                    />
                </div>
                <div>
                    <MdNavigateBefore
                        onClick={(event) =>
                            currentPage === 1
                                ? function () {
                                    return;
                                }
                                : 
                                Math.round(registros.length / selectValue) === 0 
                                ? function () {
                                    return;
                                }
                                : 
                                setCurrentPage(currentPage - 1) 
                        }
                    />
                </div>
                <div>
                    <span>{`${currentPage} de ${Math.round(registros.length / selectValue) === 0 ? "1" : (registros.length / selectValue).isInteger ? (registros.length / selectValue) : Math.round(registros.length / selectValue)
                        }`}</span>
                </div>
                <div>
                    <MdNavigateNext
                        onClick={(event) =>
                            currentPage === Math.round(registros.length / selectValue)
                                ? function () {
                                    return;
                                }
                                : 
                                Math.round(registros.length / selectValue) > 1  ?
                                setCurrentPage(currentPage + 1)
                                :
                                function () {
                                    return;
                                }
                        }
                    />
                </div>
                <div>
                    <MdLastPage
                        onClick={(event) =>
                            currentPage === Math.round(registros.length / selectValue)
                                ? function () {
                                    return;
                                }
                                : 
                                Math.round(registros.length / selectValue) === 0 ?
                                setCurrentPage(1)
                                :
                                setCurrentPage(Math.round(registros.length / selectValue))
                        }
                    />
                </div>
            </div>
        </ContainerPagination>
    );
}

export default PaginationComponent;