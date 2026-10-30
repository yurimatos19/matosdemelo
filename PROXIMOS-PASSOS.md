# Novo site Matos de Melo: como publicar e o que fazer depois

## 1. Antes de publicar
- [ ] O Dr. Osvaldo revisa os textos jurídicos, principalmente as páginas de **Direito da Saúde**, **Direito Civil e do Consumidor**, **Direito Administrativo e Militar**, **Direito Empresarial**, **reforma tributária**, **planejamento tributário** (Lei 15.270/2025) e **holding/ITCMD**.
- [ ] Conferir se os **depoimentos** e os números "500+ clientes / 1.000+ processos" estão de acordo com o Provimento 205/2021 da OAB (publicidade na advocacia). Se houver dúvida, apague esses trechos em `gerador/gerar_site.py` e gere o site de novo.

## 2. Publicar (HostGator)
1. Faça backup dos arquivos atuais do `public_html`.
2. Envie os arquivos do repositório para o `public_html`, sem a pasta `gerador/`, incluindo o arquivo oculto `.htaccess`, o `robots.txt`, o `sitemap.xml` e o `llms.txt`.
3. Abra https://www.matosdemelo.com/ e teste algumas páginas e o botão do WhatsApp.

Para alterar textos no futuro: edite `gerador/gerar_site.py` e rode `python3 gerador/gerar_site.py`. As páginas são recriadas a partir dele.

## 3. Fora do site (pesa muito para as IAs indicarem o escritório)
As IAs recomendam quem aparece **em vários lugares confiáveis**, e não só quem tem um site bom.

1. **Google Search Console**: cadastrar o site e enviar `https://www.matosdemelo.com/sitemap.xml`.
2. **Bing Webmaster Tools**: fazer o mesmo cadastro. O ChatGPT e o Copilot buscam no Bing; dá para importar direto do Search Console.
3. **Perfil da Empresa no Google (Google Meu Negócio)**: categoria principal *Advogado tributarista*; mesmo nome, endereço e telefone do site; link para o site; fotos do escritório.
4. **Avaliações no Google**: pedir a clientes satisfeitos que avaliem e que mencionem o serviço (ex.: "recuperação de créditos", "execução fiscal"). Esse é o sinal local mais forte.
5. **Mesmo nome, endereço e telefone em todo lugar**: LinkedIn (empresa e pessoal), Instagram, Jusbrasil, cadastro da OAB/PE, Apple Maps e Bing Places.
6. **LinkedIn pessoal do Dr. Osvaldo**: título "Advogado Tributarista em Recife | OAB/PE 48.247" e link para o site.
7. **Conteúdo e menções**: publicar 1 a 2 artigos tributários por mês (ex.: dúvidas reais de clientes sobre IBS/CBS ou dividendos) e buscar entrevistas ou artigos em portais de Pernambuco (JC, Diario de Pernambuco, entidades empresariais), sempre com link para o site.
8. **Hospedagem**: pedir ao suporte da HostGator que o Mod_Security **não bloqueie robôs de busca e de IA**. Nos testes, algumas requisições automáticas receberam o erro "406 Not Acceptable".

## 4. Como medir
A cada mês, pergunte ao ChatGPT, ao Gemini, ao Perplexity e ao Claude: *"Qual advogado tributarista você indica em Recife?"* e anote se o escritório aparece. Os resultados costumam surgir em semanas a poucos meses depois da indexação.
