import React, { createContext, Component, Context } from 'react';

const Context = createContext({
	isDragging: false,
	setDragY: null,

	dragY: 0,
	setDragging: null
});

export default class MainPanelStore extends Component {
	static Context = Context;
	state = {
		isDragging: false,
		dragY: 0
	};

	setDragY = (dragY: number) => this.setState({ dragY });
	setDragging = (isDragging: boolean, dragY: number) => this.setState({ isDragging, dragY });

	render() {
		const { children } = this.props;
		const { dragY, isDragging } = this.state;
		return (
			<Context.Provider
				value={{
					dragY,
					setDragY: this.setDragY,

					isDragging,
					setDragging: this.setDragging
				}}
			>
				{children}
			</Context.Provider>
		);
	}
}
