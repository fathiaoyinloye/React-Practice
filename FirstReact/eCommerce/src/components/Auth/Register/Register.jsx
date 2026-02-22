import React from "react";

const Register = () =>{
    return (
    
     <div className={styles.loginPage}>
          <div className={styles.name}>
            OmoTemmy's
            <p>E-Commerce</p>
          </div>
    
          <div className={styles.todoBody}>
            <div className={styles.container}>
              <h1>Register</h1>
              <form action="" className={styles.userDetails}>
                <input
                  type="text"
                  placeholder="Enter your username"
                  minlength="6"
                  required
                  id={styles.username}
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  minLength="6"
                  id= {styles.password}
                />
                <button>submit</button>
              </form>
            </div>
          </div>
        </div>

)
}

export default Register




// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>ToDoApp</title>
//     <link rel="stylesheet" href="homepage.css" />
//   </head>
//   <body id="homepage">
//     <div class="name">
//       OmoTemmy's
//       <p>ToDoApp</p>
//     </div>
//     <div class="todoBody">
//       <div class="container">
//         <h1>Sign Up</h1>
//         <form action="" class="userDetails">
//           <input
//             type="text"
//             placeholder="Enter Your Name"
//             minlength="3"
//             required
//             id="name"
//           />
//           <input
//             type="text"
//             placeholder="Enter your username"
//             minlength="6"
//             required
//             id="username"
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             minlength="6"
//             id="password"
//           />
//           <button type="submit">submit</button>
//         </form>
//         <div class="login">
//           <h2>Already Have an Account</h2>
//           <button>login</button>
//         </div>
//       </div>
//     </div>
//     <script src="toDo.js"></script>
//   </body>
// </html>
