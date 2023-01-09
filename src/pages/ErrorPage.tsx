import "../assets/styles/index.scss";

interface IErrorProps {
  errorMessage: string
}

export const ErrorPage = ({ errorMessage }: IErrorProps) => {

  return (
    <div className="error-page">
      <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{errorMessage}</p>
      </div>
    </div>
  );
}