import logo from "./logo.svg";
import "./App.css";
import LeftBar from "./Component/LeftBar/LeftBar";
import TopNav from "./Component/TopNav/TopNav";
import Bottom from "./Component/Bottom/Bottom.jsx";
import Center from "./Component/Center/Center";
import TopLeft from "./TopLeft/TopLeft";

function App() {
	return (
		<div className="App">
			<div class="container">
				<div class="TopLeft">
					<TopLeft />
				</div>
				<div class="LeftBar">
					<LeftBar />
				</div>
				<div class="TopRight">
					<TopNav />
				</div>
				<div class="Bottom">
					<Bottom />
				</div>
				<div class="Center">
					<Center />
				</div>
			</div>
		</div>
	);
}

export default App;
