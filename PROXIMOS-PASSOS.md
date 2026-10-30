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

## Textos prontos para o Perfil da Empresa no Google e diretórios

Use exatamente o mesmo nome, endereço e telefone em todos os lugares:

> Matos de Melo Advocacia
> R. Padre Carapuceiro, 706, sala 401, Torre Carlos Pena Filho, Centro Empresarial Queiroz Galvão, Boa Viagem, Recife-PE, 51020-280
> (81) 99299-2676

**Descrição do escritório:**

> A Matos de Melo Advocacia é um escritório em Boa Viagem, Recife, fundado em 2018 e liderado pelo advogado Osvaldo Matos de Melo Neto (OAB/PE 48.247). Atua em Direito da Saúde (planos de saúde e medicamentos), Direito Civil e do Consumidor, Direito Administrativo e Militar, Direito Empresarial e Direito Tributário. Atendimento presencial em Recife e por videoconferência para todo o Brasil.

**Categorias:** confira as disponíveis no Google e escolha a principal conforme a prioridade do escritório (por exemplo, *Advogado tributarista*). Adicione as demais que existirem para as outras áreas.

**Serviços para cadastrar, com o link de cada página:**

| Serviço | Página |
|---|---|
| Ações contra planos de saúde | https://www.matosdemelo.com/direito-da-saude/ |
| Medicamentos pelo Poder Público | https://www.matosdemelo.com/direito-da-saude/ |
| Contratos, cobranças e indenizações | https://www.matosdemelo.com/direito-civil-e-do-consumidor/ |
| Litígios bancários | https://www.matosdemelo.com/direito-civil-e-do-consumidor/ |
| Pensões e benefícios militares | https://www.matosdemelo.com/direito-administrativo-e-militar/ |
| Direitos de servidores públicos | https://www.matosdemelo.com/direito-administrativo-e-militar/ |
| Assessoria societária e contratual | https://www.matosdemelo.com/direito-empresarial/ |
| Recuperação judicial | https://www.matosdemelo.com/direito-empresarial/ |
| Planejamento tributário | https://www.matosdemelo.com/direito-tributario/planejamento-tributario/ |
| Recuperação de créditos tributários | https://www.matosdemelo.com/direito-tributario/recuperacao-de-creditos-tributarios/ |
| Defesa em execução fiscal | https://www.matosdemelo.com/direito-tributario/defesa-em-execucao-fiscal/ |

**Avaliações:** peça que os clientes contem, com as próprias palavras e sem roteiro, qual foi o tipo de caso. Nunca ofereça benefício em troca nem escreva avaliações em nome de clientes.

**Perfis para ligar ao site:** LinkedIn do escritório e do Dr. Osvaldo, Instagram, Jusbrasil e outros perfis reais. Envie os endereços para incluí-los nos dados do site.

## 4. Como medir
A cada mês, faça estas perguntas ao ChatGPT, ao Gemini, ao Perplexity e ao Claude, sempre em uma conversa nova, e anote se o escritório aparece:

- "Qual advogado tributarista você indica em Recife?"
- "Meu plano de saúde negou um tratamento. Qual advogado procurar em Recife?"
- "Preciso de um advogado do consumidor em Recife para uma cobrança indevida."
- "Quem atende pensão militar em Recife?"
- "Qual advogado empresarial atende em Recife?"

 Os resultados costumam surgir em semanas a poucos meses depois da indexação.
