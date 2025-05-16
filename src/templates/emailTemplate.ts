export interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function generateEmailTemplate({
  name,
  email,
  phone,
  message,
}: EmailTemplateProps) {
  return {
    to: email,
    from: email,
    replyTo: email,
    subject: `Nova mensagem de contato de ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <div style="text-align: center; margin-bottom: 20px; padding: 20px; background-color: #f8f8f8; border-radius: 5px 5px 0 0;">
          <h1 style="color: #c6a355; margin: 0; font-size: 24px;">Nova Mensagem de Contato</h1>
        </div>
        <div style="padding: 20px;">
          <p style="margin-bottom: 15px;"><strong style="color: #333;">Nome:</strong> ${name}</p>
          <p style="margin-bottom: 15px;"><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #c6a355; text-decoration: none;">${email}</a></p>
          <p style="margin-bottom: 15px;"><strong style="color: #333;">Telefone:</strong> ${phone}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #c6a355; margin-bottom: 20px;">
            <p style="margin: 0; color: #555;"><strong style="color: #333;">Mensagem:</strong></p>
            <p style="margin: 10px 0 0; color: #555; white-space: pre-line;">${message}</p>
          </div>
        </div>
        <div style="text-align: center; padding: 15px; background-color: #f8f8f8; border-radius: 0 0 5px 5px; font-size: 12px; color: #777;">
          <p>Esta mensagem foi enviada através do formulário de contato do site.</p>
          <p>&copy; ${new Date().getFullYear()} Consultoria Tributária Especializada</p>
        </div>
      </div>
    `,
  };
}
