import React from "react";
import moment from "moment";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "../../assets/styles/Users.scss"
import { addComma, printNums } from "../../utils/functions";
import { Loading } from "../../components/Loading";
import { ErrorPage } from "../ErrorPage";
import { ViewUser } from "../../components/ViewUser";
import { Pagination } from "../../components/Pagination";
import { gridItems } from "../../utils/GridItems";
import SharedLayout from "../../components/layout/SharedLayout";
import filter_results_btn from "../../assets/icons/filter_results_btn.svg";
import { FilterForm } from "../../components/FilterForm";


const Users = () => {

  const [users, setUsers] = React.useState<any[]>([]);
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const [usersPerPage, setUsersPerPage] = React.useState(20);
  const [currentUsers, setCurrentUsers] = React.useState<any[]>([]);
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState<any>(0);

  const [indicator, setIndicator] = React.useState(-1);

  const [isFormOpen, setIsFormOpen] = React.useState(false);

  let allNums = printNums();

  const handleIsFormFilterOpen = () => {
    setIsFormOpen(!isFormOpen);
  }

  const handleChange = (event: any) => {
    // console.log("e.ta: ", event.target.value)
    const value = Number(event.target.value);
    setUsersPerPage(value);
  }

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * usersPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
      );

      if (res.status !== 200) {
        // console.error("An error occured: ", res.statusText);
        setIsError(true);
        setErrorMessage(res.statusText);
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      // console.log("Data: ", data);
      setUsers(data);
      setIsLoading(false);
      setIsError(false);

    } catch (error: any) {
      console.error("err: ", error);
      setIsError(true);
      setErrorMessage("Check your network and try again");
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  React.useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + usersPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentUsers(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / usersPerPage));
  }, [itemOffset, users, usersPerPage]);

  // console.log("users: ", users)

  if (isError) {
    return (
      <ErrorPage errorMessage={errorMessage} />
    )
  }

  return (
    <SharedLayout>
      {
        isLoading ? (
          <Loading />
        ) : (
          <>
            <p className="heading">Users</p>
            <div className="grid_container">
              {gridItems.map((gridItem) => (
                <div className="grid_item" key={gridItem.id}>
                  <p>{gridItem.icon}</p>
                  <p className="grid_item_title">{gridItem.title}</p>
                  <p className="grid_item_figure">{addComma(gridItem.figure)}</p>
                </div>
              ))}
            </div>
            <div className="table_container">
              <table>
                <thead>
                  <tr>
                    <th>
                      <div className="table_header_flex">
                        <p>organisation</p>
                        <FilterForm isFormOpen={isFormOpen} />
                        <img src={filter_results_btn} alt="filter icon" className="form_click_handler" onClick={handleIsFormFilterOpen} />
                      </div>
                    </th>
                    <th>
                      <div className="table_header_flex">
                        <p>username</p>
                        <img src={filter_results_btn} alt="filter icon" onClick={handleIsFormFilterOpen} />
                      </div>
                    </th>
                    <th>
                      <div className="table_header_flex">
                        <p>email</p>
                        <img src={filter_results_btn} alt="filter icon" onClick={handleIsFormFilterOpen} />
                      </div>
                    </th>
                    <th>
                      <div className="table_header_flex">
                        <p>phone number</p>
                        <img src={filter_results_btn} alt="filter icon" onClick={handleIsFormFilterOpen} />
                      </div>
                    </th>
                    <th>
                      <div className="table_header_flex">
                        <p>date joined</p>
                        <img src={filter_results_btn} alt="filter icon" onClick={handleIsFormFilterOpen} />
                      </div>
                    </th>
                    <th>
                      <div className="table_header_flex">
                        <p>status</p>
                        <img src={filter_results_btn} alt="filter icon" onClick={handleIsFormFilterOpen} />
                      </div>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    !users || users.length === 0 ? (
                      <tr><td colSpan={7} style={{ textAlign: "center" }}>{isError ? isError : "No data available"}</td></tr>
                    ) : (
                      currentUsers.map((user, index) => {
                        const { id, orgName, userName, email, phoneNumber, createdAt, status } = user;
                        return (
                          <tr key={id}>
                            <td>{orgName}</td>
                            <td>{userName}</td>
                            <td>{email}</td>
                            <td>{phoneNumber}</td>
                            <td>{moment(createdAt).format("lll")}</td>
                            <td>{status ? status : "Nil"}</td>
                            <td>
                              <ViewUser userId={id} index={index} indicator={indicator} setIndicator={setIndicator} />
                            </td>
                          </tr>
                        )
                      })
                    )
                  }
                </tbody>
              </table>
            </div>
            <div className="data_modifier">
              <p className="items_per_page">Showing
                <select className="num_value" value={usersPerPage} onChange={handleChange}>
                  {allNums.map((num, ind) => <option key={ind}>{num}</option>)}
                </select> out of 100
                <MdOutlineKeyboardArrowDown size={20} color="#213F7D" className="items_per_page_icon" />
              </p>
              <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
          </>
        )
      }
    </SharedLayout>
  )
}

export default Users;
