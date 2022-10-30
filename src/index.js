import React from "react"
import ReactDOM from "react-dom"

function ProfilePics() {
    return (
      <>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHmu38XXGmsqQ/profile-displayphoto-shrink_200_200/0/1651077574377?e=1669852800&v=beta&t=liqI8fGbKeMOouBQQ84hOgJ5rD49q6szIBI9_0yuhJc" id="profile__img" alt="" />
        <h4>Gbaje Eva</h4>
      </>
        )
}

// function Footer() {
//     return (
//         <footer>
//         </footer>
//     )
// }

function LinkSection() {
    return (
        <div className="link__sect">
          <button>
            <a href="twitter.com/fj_fabulous" id="twitter">Twitter</a>
          </button>
          <button>
            <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
          </button>
          <button>
            <a href="http://books.zuri.team" id="books">Zuri Books</a>
          </button>
          <button>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=taddy" id="book__python">Python Books</a>
          </button>
          <button>
            <a href="https://background.zuri.team" id="pitch">Background check for coders</a>
          </button>
          <button>
            <a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a>
          </button>
        </div>
    )
}

function Page() {
    return (
        <div>
            <ProfilePics />
            <LinkSection />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))