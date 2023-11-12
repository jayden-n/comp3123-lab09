import { IUser } from "../App";

interface IUserInfoProps {
	user: IUser;
}
export default function UserInfo({ user }: IUserInfoProps) {
	return (
		<>
			<h1>{user.title}</h1>
			<h2>{user.course}</h2>
			<h3>{user.stuName}</h3>
			<h3>{user.stuId}</h3>
			<h3>{user.location}</h3>
		</>
	);
}
