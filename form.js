if(window.SimpleForm) {
	new SimpleForm({
	  form: ".formphp", // seletor do formulário
	  button: "#enviar", // seletor do botão
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email: compras@cobrainformatica.com</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve entraremos em contato com você.</p></div>", // mensagem de sucesso
	});
}