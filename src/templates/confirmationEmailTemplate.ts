import { EmailTemplateProps } from "./emailTemplate";

export function generateConfirmationEmailTemplate({
  name,
  email,
  phone,
  message,
  taxationType,
}: EmailTemplateProps) {
  const taxationTypeLabels = {
    simples: "Simples Nacional",
    presumido: "Lucro Presumido",
    real: "Lucro Real",
  };

  return {
    to: email,
    from: process.env.GMAIL_USER || "",
    subject: `Confirmação de recebimento da sua mensagem`,
    text: `Olá ${name},

Agradecemos por entrar em contato conosco! Esta é uma confirmação de que recebemos sua mensagem e retornaremos em breve.

Detalhes da sua mensagem:
Nome: ${name}
Email: ${email}
Telefone: ${phone}
Tipo de Atendimento: ${taxationTypeLabels[taxationType]}
Mensagem: ${message}

Atenciosamente,
Equipe de Consultoria Tributária Especializada`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <div style="text-align: center; margin-bottom: 20px; padding: 20px; background-color: #f8f8f8; border-radius: 5px 5px 0 0;">
          <h1 style="color: #c6a355; margin: 0; font-size: 24px;">Recebemos sua Mensagem!</h1>
        </div>
        <div style="padding: 20px;">
          <p style="margin-bottom: 15px; color: #333;">Olá ${name},</p>
          <p style="margin-bottom: 20px; color: #555; line-height: 1.5;">
            Agradecemos por entrar em contato conosco! Esta é uma confirmação de que recebemos sua mensagem e retornaremos em breve.
          </p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #c6a355; margin-bottom: 20px;">
            <p style="margin: 0; color: #333;"><strong>Detalhes da sua mensagem:</strong></p>
            <p style="margin: 10px 0 0; color: #555;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 5px 0 0; color: #555;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0 0; color: #555;"><strong>Telefone:</strong> ${phone}</p>
            <p style="margin: 5px 0 0; color: #555;"><strong>Tipo de Atendimento:</strong> ${
              taxationTypeLabels[taxationType]
            }</p>
            <p style="margin: 5px 0 0; color: #555;"><strong>Mensagem:</strong></p>
            <p style="margin: 5px 0 0; color: #555; white-space: pre-line;">${message}</p>
          </div>
          <p style="color: #555; margin-top: 20px;">
            Atenciosamente,<br>
            Equipe de Consultoria Tributária Especializada
          </p>
        </div>
        <div style="text-align: center; padding: 15px; background-color: #f8f8f8; border-radius: 0 0 5px 5px; font-size: 12px; color: #777;">
          <p>&copy; ${new Date().getFullYear()} Consultoria Tributária Especializada</p>
        </div>
      </div>
    `,
  };
}
