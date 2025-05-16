import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Obter os dados do corpo da requisição
    const body = await request.json();
    const { to, subject, text, html, replyTo, from } = body;

    // Verificar se todos os campos necessários estão presentes
    if (!to || !subject || !text) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Configurar o transporte do Nodemailer com as credenciais do Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      secure: true, // Usar SSL/TLS
    });

    // Configurar as opções do e-mail para o administrador
    const adminMailOptions = {
      from: `${from} <${process.env.GMAIL_USER}>`, // Usa o nome do remetente com o email configurado no .env
      to: process.env.GMAIL_USER, // Enviar para o próprio e-mail configurado no .env
      replyTo: replyTo || from, // Adicionar o campo replyTo
      subject,
      text,
      html,
    };

    // Configurar as opções do e-mail de confirmação para o usuário
    const userMailOptions = {
      from: `Consultoria Tributária Especializada <${process.env.GMAIL_USER}>`,
      to: to, // Email do usuário
      subject: "Confirmação de recebimento da sua mensagem",
      text: body.confirmationText,
      html: body.confirmationHtml,
    };

    // Enviar ambos os e-mails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    // Retornar resposta de sucesso
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Erro ao enviar e-mail" },
      { status: 500 }
    );
  }
}
