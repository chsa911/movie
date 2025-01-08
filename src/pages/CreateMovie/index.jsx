import styles from "./styles.module.css";


function CreateMovie() {
	const [obj, setObj] = useState({});

<div className="wrapper">
			<div className="container">
				<div className="head">
					<img src="./images/logo.png" alt="logo" className="logo" />
					<Search setSearch={(search) => setSearch(search)} />
				</div>