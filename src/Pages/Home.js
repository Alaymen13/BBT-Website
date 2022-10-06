import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Contents from "../Components/Contents/Contents.js";
import "../App.css";
function Home() {
	return (
		<div>
			<Header />
			<Contents />
			<Footer />
		</div>
	);
}

export default Home;
