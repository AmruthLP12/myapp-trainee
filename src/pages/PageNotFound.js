import React,{useEffect} from "react";
import './CSS/PageNotFound.css'

const PageNotFound = () => {
  // const [logoUrl, setLogoUrl] = useState("/path-to-default-logo.png"); // Set the default logo path

  // Use useEffect to update the document title and logo URL when the component mounts
  useEffect(() => {
    document.title = "404 Page Not Found"; // Set the desired title

    // // Check conditions to determine the logo URL
    // // For example, you can check if the user is logged in or any other condition
    // // Update the logo URL accordingly
    // const userLoggedIn = "hi";
    // const newLogoUrl = userLoggedIn
      // ? "/path-to-logged-in-logo.png"
    //   : "/path-to-logged-out-logo.png";

    // setLogoUrl(newLogoUrl);
  }, []);
  return (
    <div>
      <div class="flex-container">
        <div class="text-center">
          <h1>
            <span class="fade-in" id="digit1">
              4
            </span>
            <span class="fade-in" id="digit2">
              0
            </span>
            <span class="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 class="fadeIn">PAGE NOT FOUND</h3>
          <button type="button" name="button">
            Return To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
