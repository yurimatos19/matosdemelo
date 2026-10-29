# Matos de Melo Advocacia: site

Site institucional da Matos de Melo Advocacia, escritório de advocacia tributária e empresarial em Recife (PE): https://www.matosdemelo.com

## Pastas

- `site-novo/` é o site pronto para publicar: HTML estático, sem build. É o conteúdo que vai para o `public_html` da hospedagem.
- `gerador/gerar_site.py` gera todas as páginas de `site-novo/` (textos, dados estruturados, sitemap e `llms.txt`).
- `PROXIMOS-PASSOS.md` traz a publicação e as ações fora do site (Google, Bing, avaliações).

## Publicar

- **Vercel:** importe este repositório. O `vercel.json` já indica que o site está em `site-novo/` e que não há build. Cada `git push` na `main` publica uma nova versão.
- **HostGator:** envie o conteúdo de `site-novo/` para o `public_html`. O `.htaccess` cuida dos redirecionamentos.

## Alterar textos

Edite `gerador/gerar_site.py` e rode:

```bash
python3 gerador/gerar_site.py
```

Estilos e interações ficam em `site-novo/assets/site.css` e `site-novo/assets/site.js`.

## Ver no computador

```bash
python3 -m http.server 8765 --directory site-novo
```

Depois, abra http://localhost:8765.
