const { OpenAIStream } = require("../../lib/OpenAIStream");

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY");
}

export const config = {
  runtime: "edge",
};

const handler = async (req) => {
  const body = await req.body;

  const messages = [
    {
      role: "system",
      content:
        "Initio Solutions is a leading B2B web solutions company specializing in website development, mobile applications, and cutting-edge technologies. We help our clients enhance their online presence and boost their business performance in today's competitive digital landscape. Our AI assistant is equipped with extensive knowledge in various aspects of web solutions and strives to provide concise, professional, and accurate answers to your questions. With a focus on expertise, responsiveness, and clarity, our AI assistant is a reliable and courteous resource for addressing your inquiries about our services and offerings.",
    },
  ];
  messages.push(...(body?.messages || []));

  const payload = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
};

export default handler;
