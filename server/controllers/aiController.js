import openai from "../config/openai.js";

import Product from "../models/Product.js";

// AI CHATBOT
const aiChatbot = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content:
            "You are Karobar shopping assistant.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.status(200).json({
      success: true,
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// AI PRODUCT RECOMMENDATION
const aiRecommendations = async (req, res) => {
  try {
    const { query } = req.body;

    const products = await Product.find();

    const productText = products
      .map(
        (p) =>
          `${p.name} - ${p.category} - ₹${p.price}`
      )
      .join("\n");

    const response =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content:
              "Recommend products from this list.",
          },
          {
            role: "user",
            content: `
User Query:
${query}

Products:
${productText}
`,
          },
        ],
      });

    res.status(200).json({
      success: true,
      recommendations:
        response.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { aiChatbot, aiRecommendations };