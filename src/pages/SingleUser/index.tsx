import React from "react";
import { useNavigate, useParams } from "react-router-dom"

import "../../assets/styles/Users.scss"
import SharedLayout from "../../components/layout/SharedLayout";
import { ErrorPage } from "../ErrorPage";
import { Loading } from "../../components/Loading";

import arrow_back from "../../assets/icons/arrow_back.svg";
import star_full from "../../assets/icons/star_full.svg";
import star_empty from "../../assets/icons/star_empty.svg";


const SingleUser = () => {
  const [user, setUser] = React.useState<any>({});
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  let { userId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
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
        setUser(data);
        setIsError(false);
        setIsLoading(false);

      } catch (error: any) {
        console.error("err: ", error);
        setIsError(true);
        setErrorMessage("An error occured. Check your network and try again");
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  // console.log("user: ", user);

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
            <div className="back_button" onClick={() => navigate("/users")}>
              <img src={arrow_back} alt="arrow back" />
              <p>Back to Users</p>
            </div>
            <div className="user_actions">
              <p>User Details</p>
              <div className="btns_container">
                <button className="btn_blacklist">Blacklist user</button>
                <button className="btn_activate">Activate user</button>
              </div>
            </div>
            <div className="user_summary">
              <div className="user_summary_box_one">
                <img src={user?.profile?.avatar} alt="user avatar" className="user_avatar" />
                <div className="user_name">
                  <p>{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</p>
                  <p>{user?.userName}</p>
                </div>
                <div className="user_stars_container">
                  <p>User&apos;s Tier</p>
                  <div >
                    <img src={star_full} alt="star full" /><img src={star_empty} alt="star empty" /><img src={star_empty} alt="star empty" />
                  </div>
                </div>
                <div className="user_amount">
                  <p>&#x20A6;{user?.accountBalance}</p>
                  <p>{user?.accountNumber}</p>
                </div>
              </div>

              <div className="user_summary_box_two">
                <p>General Details</p>
                <p>Documents</p>
                <p>Bank Details</p>
                <p>Loans</p>
                <p>Savings</p>
                <p>App and System</p>
              </div>
            </div>
            <div className="user_details">
              <div className="personal_information">
                <p>Personal Information</p>
                <div className="personal_information_grid">
                  <div>
                    <p>Full name</p>
                    <p>{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</p>
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <p>{user?.profile?.phoneNumber}</p>
                  </div>
                  <div>
                    <p>Email Address</p>
                    <p>{user?.email}</p>
                  </div>
                  <div>
                    <p>BVN</p>
                    <p>{user?.profile?.bvn}</p>
                  </div>
                  <div>
                    <p>Gender</p>
                    <p>{user?.profile?.gender}</p>
                  </div>
                  <div>
                    <p>Marital status</p>
                    <p>Single</p>
                  </div>
                  <div>
                    <p>Children</p>
                    <p>None</p>
                  </div>
                  <div>
                    <p>Type of residence</p>
                    <p>Parent&apos;s Apartment</p>
                  </div>
                </div>
              </div>
              <div className="education_and_employment">
                <p>Education and Employment</p>
                <div className="education_and_employment_grid">
                  <div>
                    <p>level of education</p>
                    <p>{user?.education?.level}</p>
                  </div>
                  <div>
                    <p>employment status</p>
                    <p>{user?.education?.employmentStatus}</p>
                  </div>
                  <div>
                    <p>sector of employment</p>
                    <p>{user?.education?.sector}</p>
                  </div>
                  <div>
                    <p>Duration of employment</p>
                    <p>{user?.education?.duration}</p>
                  </div>
                  <div>
                    <p>office email</p>
                    <p>{user?.education?.officeEmail}</p>
                  </div>
                  <div>
                    <p>Monthly income</p>
                    <p>&#x20A6;{user?.education?.monthlyIncome?.[1]} - &#x20A6;{user?.education?.monthlyIncome?.[0]}</p>
                  </div>
                  <div>
                    <p>loan repayment</p>
                    <p>{user?.education?.loanRepayment}</p>
                  </div>
                </div>
              </div>
              <div className="socials">
                <p>Socials</p>
                <div className="socials_grid">
                  <div>
                    <p>Twitter</p>
                    <p>{user?.socials?.twitter}</p>
                  </div>
                  <div>
                    <p>Facebook</p>
                    <p>{user?.socials?.facebook}</p>
                  </div>
                  <div>
                    <p>Instagram</p>
                    <p>{user?.socials?.instagram}</p>
                  </div>
                </div>
              </div>

              <div className="guarantor">
                <p>Guarantor</p>
                <div className="guarantor_grid">
                  <div>
                    <p>Full Name</p>
                    <p>{`${user?.guarantor?.firstName} ${user?.guarantor?.lastName}`}</p>
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <p>{user?.guarantor?.phoneNumber}</p>
                  </div>
                  <div>
                    <p>Email Address</p>
                    <p>{user?.guarantor?.email ? user?.guarantor?.email : "-"}</p>
                  </div>
                  <div>
                    <p>Relationship</p>
                    <p>{user?.guarantor?.relationship ? user?.guarantor?.relationship : "-"}</p>
                  </div>
                </div>
              </div>
              <div className="no_heading">
                <p></p>
                <div className="no_heading_grid">
                  <div>
                    <p>Full Name</p>
                    <p>Debby Ogana</p>
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <p>07060780922</p>
                  </div>
                  <div>
                    <p>Email Address</p>
                    <p>debby@gmail.com</p>
                  </div>
                  <div>
                    <p>Relationship</p>
                    <p>Sister</p>
                  </div>

                </div>
              </div>

            </div>
          </>
        )
      }
    </SharedLayout>
  )
}

export default SingleUser;