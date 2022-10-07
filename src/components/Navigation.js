import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import cookie from "cookie";


const Navigation = (props) => {
  const navigate = useNavigate();
  const loggedIn = document.cookie;

  return (
    <div>
      <AppBar
        style={{ background: "#ffffff", color: "#000000", opacity: "0.9" }}
      >
        <Toolbar>
          <div>
           
          </div>

          <Typography variant="h6" style={{ flexGrow: ".5" }}>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Button>
                  {/* <Link to="/main">Main</Link> */}
                  <Link to="/dinner">Add</Link>
                </Button>
              </li>
              <li className="nav-list-item">
                <Button>
                  <Link to="/">Register</Link>
                </Button>
              </li>

       
       

              <Button>
                <li
                  className="nav-list-item"
                  onClick={() => {
                    document.cookie = cookie.serialize("loggedIn", null, {
                      maxAge: 0,
                    });
                    document.cookie = cookie.serialize("jwt", null, {
                      maxAge: 0,
                    });
                    document.cookie = cookie.serialize("userId", null, {
                      maxAge: 0,
                    });
                    navigate("/login");
                  }}
                >
                  {loggedIn ? "LOGOUT" : "LOGIN"}
                </li>
              </Button>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
{/* 
      {document.cookie === "loggedIn=true" ? (
        <Typography variant="h6" color="white" padding={1}>
          Logged in as: <span>{props.users.username}</span>
        </Typography>
      ) : null} */}

      <Box
        backgroundColor="primary.main"
        display="flex"
        flex-direction={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
      >
        {/* {document.cookie === "loggedIn=true" ? (
          <Typography variant="h6" color="white" padding={1}>
            Logged in as: <span>{props.users.username}</span>
          </Typography>
        ) : null} */}
      </Box>
    </div>
  );
};

export default Navigation;

// import React from "react";
// import { AppBar, Toolbar, Typography, Box } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";

// import cookie from "cookie";

// const Navigation = (props) => {
//   const navigate = useNavigate();
//   const loggedIn = document.cookie;

//   return (
//     <div>
//       <AppBar style={{ background: "#F4A8D3" }} position="relative">
//         <Toolbar>
//           <Typography variant="h2" style={{ flexGrow: "1" }}>
//             Meal Planner
//           </Typography>
//           <ul className="nav-list">
//             {/* <li className="nav-list-item">
//               <Link to="/">Home</Link>
//             </li> */}
//             {/* <li className="nav-list-item">
//               <Link to="/dinner">Add</Link>
//             </li> */}
//             {/* <li className="nav-list-item">
//               <Link to="/listings">Listings</Link>
//             </li> */}
//             <li
//               className="nav-list-item"
//               onClick={() => {
//                 document.cookie = cookie.serialize("loggedIn", null, {
//                   maxAge: 0,
//                 });
//                 navigate("/login");
//               }}
//             >
//               {loggedIn ? "Logout" : "Login"}
//             </li>
//           </ul>
//         </Toolbar>
//       </AppBar>
//       <Box
//         backgroundColor="secondary.main"
//         padding="50px"
//         display="flex"
//         flex-direction={"column"}
//         alignItems="center"
//         justifyContent={"center"}
//         margin="auto"
//       >
//         {document.cookie === "loggedIn=true" ? (
//           <Typography variant="h4" color="white" padding={1}>
//             Logged in as: <span>{props.user.username}</span>
//           </Typography>
//         ) : null}
//       </Box>
//     </div>
//   );
// };
// export default Navigation;