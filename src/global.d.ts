declare const __DEV__: boolean;

interface Mapped<T> {
	[key: string]: T;
}

type AsComponent = React.FunctionComponent<any> | React.ComponentClass<any> | string;
