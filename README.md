# Matos de Melo Advocacia: site

Site institucional da Matos de Melo Advocacia, escritório de advocacia tributária e empresarial em Recife (PE): https://www.matosdemelo.com

É um site estático: o `index.html` e as páginas ficam na raiz do repositório e não há build.

## Estrutura

- `index.html` e as pastas de cada página (`contato/`, `o-escritorio/`, `artigos/`...) formam o site publicado.
- `assets/` guarda o CSS, o JS e as imagens.
- `robots.txt`, `sitemap.xml` e `llms.txt` são lidos por buscadores e assistentes de IA.
- `gerador/gerar_site.py` gera todas as páginas a partir dos textos.
- `PROXIMOS-PASSOS.md` traz a publicação e as ações fora do site (Google, Bing, avaliações).

## Publicar

- **Vercel:** importe o repositório sem alterar nada. Cada `git push` na `main` publica uma nova versão.
- **GitHub Pages:** em Settings > Pages, escolha a branch `main` e a pasta `/ (root)`, e configure o domínio próprio `www.matosdemelo.com`. Os links do site partem da raiz do domínio, então é preciso usar o domínio próprio.
- **HostGator:** envie os arquivos para o `public_html`, sem a pasta `gerador/`. O `.htaccess` cuida dos redirecionamentos.

## Alterar textos

Edite `gerador/gerar_site.py` e rode:

```bash
python3 gerador/gerar_site.py
```

Estilos e interações ficam em `assets/site.css` e `assets/site.js`.

## Ver no computador

```bash
python3 -m http.server 8765
```

Depois, abra http://localhost:8765.
