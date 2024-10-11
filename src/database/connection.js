import sql from "mssql";
const dbsettings = {
  user: "Anthony",
  password: "12345",
  server: "localhost",
  database: "tienditaprueba",
  options: {
    encrypt: true,
    trustServerCertificate: true
}
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbsettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
};
export { getConnection };
