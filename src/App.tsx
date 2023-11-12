import { useState } from "react";
import "./App.css";
import reactPic from "./assets/react.svg";
import UserInfo from "./components/userInfo";

// define user info types
export interface IUser {
	title: string;
	course: string;
	stuId: number;
	stuName: string;
	location: string;
}

function App() {
	// toggle display button
	const [isToggled, setIsToggled] = useState<boolean>(false);

	// hard coding user's info
	const user: IUser = {
		title: "Welcome to Fullstack Development - I",
		course: "React.js Programming Week09 Lab",
		stuId: 101363755,
		stuName: "Jayden Nguyen",
		location: "George Brown College",
	};

	return (
		<>
			<img
				src={reactPic}
				alt='react pic'
				style={{
					width: "10rem",
					display: "block",
					margin: "0 auto",
					marginBottom: "2rem",
				}}
			/>

			<button onClick={() => setIsToggled(!isToggled)}>
				{isToggled ? "Hide Info 🥲" : "Show user Info!  🚀"}
			</button>

			{isToggled ? <UserInfo user={user} /> : <h2>Info is hidden...</h2>}
		</>
	);
}

export default App;
