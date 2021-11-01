import createConnection from "../../database/";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

async function create() {
    const connection = await createConnection();
    const id = uuidv4();

    const password = await hash("admin", 8);
    await connection.query(`INSERT INTO USERS(id, username, email, password, is_admin)
    VALUES('${id}', 'joseph', 'joestar@gmail.com', '${password}', 'true')`);

    await connection.close();
}

create().then(() => console.log("ADM INSERTED"));