import { getConnection } from "../database/connection.js";
import sql from "mssql";

export const getProducts = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("Select * From productos");
  res.json(result.recordset);
};

export const getProduct = async (req, res) => {
  console.log(req.params.producto_id);
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("producto_id", sql.Int, req.params.producto_id)
    .query("Select * from productos WHERE producto_id = @producto_id");
  if (result.rowsAffected[0] === 0) {
    return res.status(404).json({ message: "product no found" });
  }
  console.log(result);

  res.json(result.recordset);
};

export const createProduct = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("nombre", sql.VarChar, req.body.nombre)
    .input("descripcion", sql.VarChar, req.body.descripcion)
    .input("precio", sql.Decimal(10, 2), req.body.precio)
    .input("stock", sql.Int, req.body.stock)
    .query(
      "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (@nombre, @descripcion, @precio, @stock); SELECT SCOPE_IDENTITY() AS id"
    );

  console.log(result);
  res.json({
    producto_id: result.recordset[0].producto_id,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    stock: req.body.stock,
  });
};

export const updateProduct = async (req, res) => {
  const pool = await getConnection();
  const producto_id = req.params.producto_id;
  const result = await pool
    .request()
    .input("producto_id", sql.Int, req.params.producto_id)
    .input("nombre", sql.VarChar, req.body.nombre)
    .input("descripcion", sql.VarChar, req.body.descripcion)
    .input("precio", sql.Decimal(10, 2), req.body.precio)
    .input("stock", sql.Int, req.body.stock)
    .query(
      "UPDATE productos SET nombre = @nombre, descripcion = @descripcion, precio = @precio, stock = @stock WHERE producto_id = @producto_id"
    );

  if (result.rowsAffected[0] === 0) {
    return res.status(404).json({ message: "Product  no fount" });
  }
  res.json({
    producto_id: req.params.producto_id,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    stock: req.body.stock,
  });
};

export const DeleteProduct = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("producto_id", sql.Int, req.params.producto_id)
    .query("DELETE FROM productos WHERE producto_id = @producto_id");
  if (result.rowsAffected[0] === 0) {
    return res.status(404).json({ message: "product no found" });
  }
  return res.send({ message: "Producto Eliminado" });
};
