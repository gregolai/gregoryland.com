declare const __DEV__: boolean;

interface Mapped<T> {
	[key: string]: T;
}

type AsComponent<T = any> = React.FunctionComponent<T> | React.ComponentClass<T> | string;
