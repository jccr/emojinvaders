"use strict";
const importJsx = require("import-jsx").create({
	pragma: "React.createElement",
});
const { useEffect, useState, useRef, useReducer } = require("react");
const React = require("react");
const { render, Text, Box, useInput, useStdin } = require("ink");
const Umbrella = importJsx("./objects/umbrella");
const Leveler = importJsx("./objects/leveler");
const Formation = importJsx("./objects/formation");

const Grid = (props) => (
	<Box alignItems="center" justifyContent="center" marginTop={1}>
		<Box width={42} height={20} flexDirection="column">
			<Box justifyContent="space-between" width="100%">
				<Text>SCORE&lt;1&gt;</Text>
				<Text>HI-SCORE</Text>
				<Text>SCORE&lt;2&gt;</Text>
			</Box>
			<Box justifyContent="space-between" width="100%">
				<Box marginLeft={2}>
					<Text>0000</Text>
				</Box>
				<Box>
					<Text>0000</Text>
				</Box>
				<Box marginRight={2}>
					<Text>0000</Text>
				</Box>
			</Box>
			<Box height={1}></Box>
			<Box marginLeft={0} width={38} height={1}>
				<Box marginLeft={0}>
					<Leveler x={0} char={"⛵"} />
				</Box>
			</Box>
			<Box height={1}></Box>
			<Box marginTop={10} flexDirection="column">
				<Box height={1}></Box>
				<Umbrella marginTop={-1} marginLeft={6} />
				<Umbrella marginTop={-1} marginLeft={15} />
				<Umbrella marginTop={-1} marginLeft={24} />
				<Umbrella marginTop={-1} marginLeft={33} />
			</Box>
			<Box width={22} height={1}>
				<Box
					width={2}
					marginLeft={props.mX}
					marginTop={props.mY}
					display={props.mDisplay}
				>
					<Text>|</Text>
				</Box>
			</Box>
			<Box marginLeft={0} height={1}>
				<Leveler x={props.iX} minX={2} char={"🦞"} />
			</Box>
			<Box marginLeft={-1} width={46}>
				<Text>▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁</Text>
			</Box>
			<Box justifyContent="space-between" width="100%">
				<Box width={6} justifyContent="space-between">
					<Text>3</Text>
					<Text>🔺🔺</Text>
				</Box>
				<Box width={9} justifyContent="space-between">
					<Text>CREDIT</Text>
					<Text>00</Text>
				</Box>
			</Box>
			<Box marginTop={-15} flexDirection="column">
				<Formation x={5} char={"🦑"} />
				<Formation x={5} char={"🦀"} />
				<Formation x={5} char={"🦀"} />
				<Formation x={5} char={"🐙"} />
				<Formation x={5} char={"🐙"} />
			</Box>
		</Box>
	</Box>
);

function useInterval(callback, delay) {
	const savedCallback = useRef();
	useEffect(() => {
		savedCallback.current = callback;
	});
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		let id = setInterval(tick, delay);
		return () => clearInterval(id);
	}, [delay]);
}

const Game = () => {
	const [x, setX] = useState(0);
	const [fire, setFire] = useState(false);

	const [mDisplay, setMDisplay] = useState(false);

	const [mX, setMX] = useState(0);
	const [mY, setMY] = useState(0);

	useInput((input, key) => {
		if (input === "q") {
			process.exit();
		}
		if (key.leftArrow) {
			setX(Math.max(0, x - 1));
		}

		if (key.rightArrow) {
			setX(Math.min(37, x + 1));
		}

		if (input === " ") {
			setFire(true);
		}
	});

	useInterval(() => {
		if (fire) {
			setFire(false);
			setMDisplay(true);
			setMY(0)
			setMX(6)
		}

		if (mDisplay) {
			setMY((y) => y - 1);
		}
	}, 1000 / 30);

	return <Grid iX={x} mDisplay={mDisplay ? "flex" : "none"} mX={mX} mY={mY} />;
};

render(<Game />);
