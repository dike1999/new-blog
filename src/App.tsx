import React from 'react';
import { getTagList } from './apis/tag';

function App() {
	return (
		<div className='App'>
			<button
				onClick={() => {
					console.log(111);
					getTagList().then((res) => {
						console.log(res);
					});
				}}
				style={{ width: 400, height: 100 }}
			>
				测试
			</button>
		</div>
	);
}

export default App;
