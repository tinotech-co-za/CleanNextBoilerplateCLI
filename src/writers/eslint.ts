import path from "path";
import fs from "fs";
import { ESLINT_RC } from "../utils/constants";

export const writeESLintRC: Function = async (
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/.eslintrc.json"),
		ESLINT_RC
	);
};
