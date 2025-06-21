import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product ? res.json(product) : res.status(404).send("Not found");
  } catch {
    res.status(404).send("Invalid ID");
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    updated ? res.json(updated) : res.status(404).send("Not found");
  } catch {
    res.status(404).send("Invalid ID");
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Deleted");
  } catch {
    res.status(404).send("Invalid ID");
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const keyword = req.query.keyword
      ? {
          $or: [
            { name: { $regex: req.query.keyword, $options: "i" } },
            { description: { $regex: req.query.keyword, $options: "i" } },
          ],
        }
      : {};

    const sort = {};
    if (req.query.sort) {
      req.query.sort.split(",").forEach((s) => {
        sort[s.replace("-", "")] = s.startsWith("-") ? -1 : 1;
      });
    }

    const products = await Product.find(keyword)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Product.countDocuments(keyword);

    res.json({
      total,
      page,
      totalPages: Math.ceil(total / limit),
      products,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
