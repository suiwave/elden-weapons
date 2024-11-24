import fs from 'fs';
import path from 'path';

export const writeFile = async (filePath: string, data: string) => {
    try {
        // ディレクトリが存在しない場合は作成
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // ファイルが既に存在する場合は上書き
        if (fs.existsSync(filePath)) {
            console.log(`File already exists. Overwriting: ${filePath}`);
        } else {
            console.log(`File does not exist. Creating: ${filePath}`);
        }

        // ファイルに書き込み
        fs.writeFileSync(filePath, data, 'utf8');
        console.log(`File written successfully: ${filePath}`);
    } catch (error) {
        console.error(`Failed to write file: ${filePath}`, error);
    }
};
