export class Logger {
	public static generateSourceTag(constructorName: string, methodName: string): string {
		return `${constructorName}` + (methodName ? `.${methodName}` : '');
	}

	public static log(constructorName: string = '', methodName: string = '', ...args: any) {
		console.debug(`[${Logger.generateSourceTag(constructorName, methodName)}]`, ...args);
	}

	public static error(constructorName: string = '', methodName: string = '', ...args: any) {
		console.error(`[${Logger.generateSourceTag(constructorName, methodName)}]`, ...args);
	}
}